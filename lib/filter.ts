import type { CategoryId } from '@/types/trend';
import type { Trend } from '@/types/trend';
import { CATEGORY_ORDER } from '@/lib/categories';

/**
 * Trend listesini metin arama terimiyle filtreler.
 * `title` veya `description` alanında büyük/küçük harf duyarsız
 * (case-insensitive) substring eşleşmesi arar.
 * Boş veya yalnızca boşluk içeren `searchTerm` tüm trendleri
 * değiştirmeden döndürür. (Gereksinim 11.1, 11.6)
 */
export function filterBySearch(trends: Trend[], searchTerm: string): Trend[] {
  const trimmed = searchTerm.trim();
  if (trimmed === '') {
    return trends;
  }
  const lower = trimmed.toLowerCase();
  return trends.filter(
    (trend) =>
      trend.title.toLowerCase().includes(lower) ||
      trend.description.toLowerCase().includes(lower),
  );
}

/**
 * Trend listesini kategori değeriyle filtreler.
 * Yalnızca belirtilen `category` değeriyle tam eşleşen trendleri döndürür.
 * `null` kategori tüm trendleri değiştirmeden döndürür. (Gereksinim 11.3, 11.7)
 */
export function filterByCategory(
  trends: Trend[],
  category: CategoryId | null,
): Trend[] {
  if (category === null) {
    return trends;
  }
  return trends.filter((trend) => trend.category === category);
}

/**
 * Metin araması ve kategori filtresini AND mantığıyla birleştirir.
 * `filterByCategory(filterBySearch(trends, searchTerm), category)` ile
 * semantik olarak eşdeğerdir. (Gereksinim 11.4)
 */
export function filterTrends(
  trends: Trend[],
  searchTerm: string,
  category: CategoryId | null,
): Trend[] {
  return filterByCategory(filterBySearch(trends, searchTerm), category);
}

/**
 * URL arama parametresini geçerli `CategoryId` değerine dönüştürür.
 * Parametre `CATEGORY_ORDER` içinde geçerli bir değerse döndürür;
 * geçersiz, boş veya `null` ise `null` döndürür. (Gereksinim 11.9, 11.10)
 */
export function parseUrlCategory(param: string | null): CategoryId | null {
  if (param === null || param === '') {
    return null;
  }
  if ((CATEGORY_ORDER as string[]).includes(param)) {
    return param as CategoryId;
  }
  return null;
}

/**
 * Açıklama metnini belirtilen maksimum uzunlukta kırpar.
 * `description.length > maxLength` ise `description.slice(0, maxLength) + '...'`
 * döndürür; aksi halde metni değiştirmeden döndürür.
 * Varsayılan `maxLength`: 120. (Gereksinim 2.3)
 */
export function truncateDescription(
  description: string,
  maxLength: number = 120,
): string {
  if (description.length > maxLength) {
    return description.slice(0, maxLength) + '...';
  }
  return description;
}
