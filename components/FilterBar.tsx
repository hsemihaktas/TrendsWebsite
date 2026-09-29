"use client";

import { CATEGORIES, CATEGORY_ORDER } from "@/lib/categories";
import type { CategoryId } from "@/types/trend";

interface FilterBarProps {
  activeCategory: CategoryId | null;
  onCategoryChange: (category: CategoryId | null) => void;
  matchCounts: Record<string, number>;
}

/**
 * Kategori filtre çubuğu bileşeni.
 * "Tümü" düğmesi ve CATEGORY_ORDER sırasında 6 kategori düğmesi (toplam 7) render eder.
 * Aktif düğme görsel vurgu ve aria-pressed="true" alır.
 * Mobil: yatay kaydırılabilir container.
 * Requirements: 1.7, 11.3, 11.8, 13.4, 15.6
 */
export default function FilterBar({
  activeCategory,
  onCategoryChange,
  matchCounts,
}: FilterBarProps) {
  const isAllActive = activeCategory === null;

  // "Tümü" için toplam eşleşme sayısı: tüm kategori sayılarının toplamı
  const totalCount = CATEGORY_ORDER.reduce(
    (sum, id) => sum + (matchCounts[id] ?? 0),
    0,
  );

  return (
    <div
      role="group"
      aria-label="Kategoriye göre filtrele"
      className="overflow-x-auto"
    >
      <div className="flex gap-2 pb-1 min-w-max">
        {/* "Tümü" butonu */}
        <button
          type="button"
          aria-pressed={isAllActive}
          onClick={() => onCategoryChange(null)}
          className={`
            inline-flex items-center whitespace-nowrap rounded-full px-4 text-sm font-medium
            min-h-[44px] transition-colors duration-150
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
            ${
              isAllActive
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }
          `}
        >
          Tümü ({totalCount})
        </button>

        {/* Kategori butonları */}
        {CATEGORY_ORDER.map((id) => {
          const config = CATEGORIES[id];
          const isActive = activeCategory === id;
          const count = matchCounts[id] ?? 0;

          return (
            <button
              key={id}
              type="button"
              aria-pressed={isActive}
              onClick={() => onCategoryChange(id)}
              className={`
                inline-flex items-center whitespace-nowrap rounded-full px-4 text-sm font-medium
                min-h-[44px] transition-colors duration-150
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }
              `}
            >
              {config.name} ({count})
            </button>
          );
        })}
      </div>
    </div>
  );
}
