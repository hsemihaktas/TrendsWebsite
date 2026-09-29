/**
 * Tasarım akımı kategorilerinin geçerli ID'lerini tanımlayan union tipi.
 * Her ID, URL parametrelerinde ve frontmatter'da kullanılan slug formatındadır.
 */
export type CategoryId =
  | 'modern-populer'
  | 'clean-professional'
  | 'bold-expressive'
  | 'dark-atmospheric'
  | 'retro-nostalgic'
  | 'artistic-creative';

/**
 * MDX dosyalarının başındaki YAML frontmatter yapısını temsil eden arayüz.
 * Gereksinim 10.2 kapsamında tanımlanan tüm zorunlu alanları içerir.
 */
export interface TrendFrontmatter {
  /** Trendin görüntülenen adı — en fazla 60 karakter gösterilir (Gereksinim 2.1) */
  title: string;
  /** URL-dostu benzersiz tanımlayıcı, ör. "neubrutalism" */
  slug: string;
  /** Trendin ait olduğu kategori (Gereksinim 2.6, 10.2) */
  category: CategoryId;
  /** Trendi açıklayan etiket dizisi */
  tags: string[];
  /** Trendin kısa açıklaması — en fazla 120 karakter gösterilir (Gereksinim 2.3) */
  description: string;
  /** ISO 8601 formatında yayın tarihi, ör. "2024-01-15" */
  publishedAt: string;
}

/**
 * Bileşenlere ve listeleme mantığına geçirilen trend veri nesnesi.
 * TrendFrontmatter ile semantik olarak eşdeğerdir; bağımsız kullanım için takma ad olarak tanımlanmıştır.
 */
export type Trend = TrendFrontmatter;

/**
 * Ham MDX içeriğini de kapsayan genişletilmiş trend arayüzü.
 * Detay sayfasında MDXRemote ile render için kullanılır.
 */
export interface TrendWithContent extends TrendFrontmatter {
  /** Frontmatter parse edildikten sonra kalan ham MDX içeriği */
  rawContent: string;
}

/**
 * Navigasyon bağlantıları için kullanılan hafif trend temsili.
 * Önceki/sonraki navigasyonda ve ilişkili trend listelerinde kullanılır.
 */
export interface TrendNavItem {
  slug: string;
  title: string;
}

/**
 * Bir detay sayfasındaki önceki ve sonraki trend navigasyonunu temsil eder.
 * Liste başındaki trend için prev null, sonundaki için next null olur (Gereksinim 12.5).
 */
export interface TrendNavigationResult {
  prev: TrendNavItem | null;
  next: TrendNavItem | null;
}
