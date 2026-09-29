'use client';

import type { CategoryId, Trend } from '@/types/trend';
import { CATEGORIES, CATEGORY_ORDER } from '@/lib/categories';
// TrendCard bu dosya için yer tutucu durumdadır; sonraki görevde tam olarak implemente edilecektir.
import { TrendCard } from '@/components/TrendCard';

interface TrendGridProps {
  /** Gösterilecek (filtrelenmiş) trend listesi */
  trends: Trend[];
  /** Boş durum ekranındaki "Tüm filtreleri sıfırla" düğmesinin geri çağırımı */
  onResetFilters: () => void;
}

/**
 * TrendGrid — filtrelenmiş trendleri CATEGORY_ORDER sırasında kategori
 * bölümleri altında responsive grid olarak gösterir.
 *
 * - Masaüstü (≥1280px): 3 sütun (xl:grid-cols-3)
 * - Tablet  (768–1279px): 2 sütun (md:grid-cols-2)
 * - Mobil   (<768px):     1 sütun (grid-cols-1)
 *
 * Eşleşen trend yoksa "Sonuç bulunamadı" mesajı ve filtreleri sıfırlama
 * düğmesi gösterilir. (Gereksinim 1.10, 11.5)
 */
export function TrendGrid({ trends, onResetFilters }: TrendGridProps): JSX.Element {
  // ── Boş durum (Requirements 1.10, 11.5, 13.5) ────────────────────────────
  if (trends.length === 0) {
    return (
      <div
        role="status"
        className="flex flex-col items-center justify-center py-20 text-center"
      >
        <p className="text-xl font-medium text-gray-500 mb-6">
          Sonuç bulunamadı
        </p>
        <button
          type="button"
          onClick={onResetFilters}
          className="
            min-h-[44px] px-5 py-2.5
            bg-indigo-600 text-white text-sm font-medium rounded-lg
            hover:bg-indigo-700
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
            transition-colors
          "
        >
          Tüm filtreleri sıfırla
        </button>
      </div>
    );
  }

  // ── Kategori gruplu grid (Requirements 1.1, 1.3, 1.4, 1.5, 1.6, 13.6, 13.7) ──
  return (
    <div>
      {CATEGORY_ORDER.map((categoryId: CategoryId) => {
        const categoryTrends = trends.filter(
          (trend) => trend.category === categoryId,
        );

        // Bu kategoride eşleşen trend yoksa bölümü atla
        if (categoryTrends.length === 0) return null;

        const categoryConfig = CATEGORIES[categoryId];
        const headingId = `category-heading-${categoryId}`;

        return (
          // <section> semantic olarak kategori grubunu etiketler (Requirement 15.2)
          <section
            key={categoryId}
            aria-labelledby={headingId}
            className="mb-12"
          >
            <h2
              id={headingId}
              className="text-2xl font-bold text-gray-900 mb-6"
            >
              {categoryConfig.name}
            </h2>

            {/* Responsive grid — Requirements 1.3, 1.4, 1.5, 13.6, 13.7 */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {categoryTrends.map((trend) => (
                <TrendCard key={trend.slug} trend={trend} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
