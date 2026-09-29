import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import type {
  CategoryId,
  Trend,
  TrendFrontmatter,
  TrendNavigationResult,
  TrendWithContent,
} from '@/types/trend';
import { CATEGORY_ORDER } from '@/lib/categories';

/**
 * Tüm MDX trend dosyalarının bulunduğu dizin yolu.
 * (Gereksinim 10.1)
 */
export const TRENDS_DIR = path.join(process.cwd(), 'content/trends');

/**
 * Geçerli kategori ID'leri — CATEGORY_ORDER'dan türetilir.
 * Yeni kategori eklendiğinde burası otomatik güncellenir.
 */
const VALID_CATEGORIES: readonly CategoryId[] = CATEGORY_ORDER;

/**
 * ISO 8601 tarih formatını doğrulayan regex (YYYY-MM-DD).
 */
const ISO_8601_DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

/**
 * Ham frontmatter verisini alır ve tüm zorunlu alanları doğrular.
 * Herhangi bir alan eksik, boş dize veya yanlış tipte ise alan adını
 * içeren bir hata fırlatır. Başarıda nesneyi değiştirmeden döndürür.
 * (Gereksinim 2.7, 10.2, 10.6)
 */
export function validateFrontmatter(data: unknown): TrendFrontmatter {
  if (typeof data !== 'object' || data === null) {
    throw new Error('Frontmatter bir nesne olmalıdır');
  }

  const obj = data as Record<string, unknown>;

  // title
  if (typeof obj.title !== 'string' || obj.title.trim() === '') {
    throw new Error('Geçersiz veya eksik frontmatter alanı: title');
  }

  // slug
  if (typeof obj.slug !== 'string' || obj.slug.trim() === '') {
    throw new Error('Geçersiz veya eksik frontmatter alanı: slug');
  }

  // category
  if (
    typeof obj.category !== 'string' ||
    !VALID_CATEGORIES.includes(obj.category as CategoryId)
  ) {
    throw new Error('Geçersiz veya eksik frontmatter alanı: category');
  }

  // tags
  if (
    !Array.isArray(obj.tags) ||
    obj.tags.length < 1 ||
    !obj.tags.every((t) => typeof t === 'string')
  ) {
    throw new Error('Geçersiz veya eksik frontmatter alanı: tags');
  }

  // description
  if (typeof obj.description !== 'string' || obj.description.trim() === '') {
    throw new Error('Geçersiz veya eksik frontmatter alanı: description');
  }

  // publishedAt
  if (
    typeof obj.publishedAt !== 'string' ||
    !ISO_8601_DATE_REGEX.test(obj.publishedAt)
  ) {
    throw new Error('Geçersiz veya eksik frontmatter alanı: publishedAt');
  }

  return {
    title: obj.title,
    slug: obj.slug,
    category: obj.category as CategoryId,
    tags: obj.tags as string[],
    description: obj.description,
    publishedAt: obj.publishedAt,
  };
}

/**
 * `content/trends/` dizinindeki tüm `.mdx` dosyalarını okur,
 * frontmatter'larını parse eder ve doğrular. Hatalı dosyaları
 * (`console.error` ile loglar) atlar, çökmez.
 * Sonucu `CATEGORY_ORDER` öncelikli, ardından başlığa göre
 * alfabetik sıralı döndürür. (Gereksinim 10.1, 10.3)
 */
export async function getAllTrends(): Promise<Trend[]> {
  let fileNames: string[];

  try {
    fileNames = await fs.readdir(TRENDS_DIR);
  } catch (err) {
    const error = err as NodeJS.ErrnoException;
    if (error.code === 'ENOENT') {
      return [];
    }
    throw err;
  }

  const mdxFiles = fileNames.filter((name) => name.endsWith('.mdx'));

  const trends: Trend[] = [];

  for (const fileName of mdxFiles) {
    const filePath = path.join(TRENDS_DIR, fileName);
    try {
      const raw = await fs.readFile(filePath, 'utf-8');
      const { data } = matter(raw);
      const frontmatter = validateFrontmatter(data);
      trends.push(frontmatter);
    } catch (err) {
      console.error(`${fileName} işlenirken hata oluştu:`, err);
    }
  }

  return trends.sort((a, b) => {
    const indexA = CATEGORY_ORDER.indexOf(a.category);
    const indexB = CATEGORY_ORDER.indexOf(b.category);

    if (indexA !== indexB) {
      return indexA - indexB;
    }

    return a.title.localeCompare(b.title);
  });
}

/**
 * Verilen slug'a ait `.mdx` dosyasını okur ve ham içeriğiyle birlikte
 * döndürür. Dosya bulunamazsa (ENOENT) `notFound()` ile 404 sayfasına
 * yönlendirir. (Gereksinim 9.9, 10.1)
 */
export async function getTrendBySlug(slug: string): Promise<TrendWithContent> {
  const filePath = path.join(TRENDS_DIR, `${slug}.mdx`);

  let raw: string;
  try {
    raw = await fs.readFile(filePath, 'utf-8');
  } catch (err) {
    const error = err as NodeJS.ErrnoException;
    if (error.code === 'ENOENT') {
      notFound();
    }
    throw err;
  }

  const { data, content } = matter(raw);
  const frontmatter = validateFrontmatter(data);

  return {
    ...frontmatter,
    rawContent: content,
  };
}

/**
 * Mevcut trend dışındaki ilişkili trendleri döndürür.
 * Aynı kategorideki trendleri önceliklendirir; sayı yetersizse
 * farklı kategorilerden tamamlar.
 * Her zaman `Math.min(allTrends.length - 1, count)` adet trend döndürür.
 * (Gereksinim 9.8)
 */
export function getRelatedTrends(
  currentSlug: string,
  currentCategory: CategoryId,
  allTrends: Trend[],
  count: number = 2,
): Trend[] {
  const maxCount = Math.min(allTrends.length - 1, count);

  if (maxCount <= 0) {
    return [];
  }

  const sameCategory = allTrends.filter(
    (t) => t.slug !== currentSlug && t.category === currentCategory,
  );

  const otherCategory = allTrends.filter(
    (t) => t.slug !== currentSlug && t.category !== currentCategory,
  );

  const result: Trend[] = [];

  for (const trend of sameCategory) {
    if (result.length >= maxCount) break;
    result.push(trend);
  }

  for (const trend of otherCategory) {
    if (result.length >= maxCount) break;
    result.push(trend);
  }

  return result;
}

/**
 * Mevcut slug'a göre önceki ve sonraki trend navigasyon öğelerini döndürür.
 * Liste başında `prev: null`, sonunda `next: null` olur.
 * (Gereksinim 12.4, 12.5)
 */
export function getTrendNavigation(
  currentSlug: string,
  allTrends: Trend[],
): TrendNavigationResult {
  const index = allTrends.findIndex((t) => t.slug === currentSlug);

  if (index === -1) {
    return { prev: null, next: null };
  }

  const prev =
    index > 0
      ? { slug: allTrends[index - 1].slug, title: allTrends[index - 1].title }
      : null;

  const next =
    index < allTrends.length - 1
      ? { slug: allTrends[index + 1].slug, title: allTrends[index + 1].title }
      : null;

  return { prev, next };
}
