'use client';

import type { CategoryId, Trend } from '@/types/trend';
import { CATEGORIES, CATEGORY_ORDER } from '@/lib/categories';
import { TrendCard } from '@/components/TrendCard';

interface TrendGridProps {
  trends: Trend[];
  onResetFilters: () => void;
}

export function TrendGrid({ trends, onResetFilters }: TrendGridProps): JSX.Element {
  if (trends.length === 0) {
    return (
      <div role="status" className="flex flex-col items-center justify-center py-24 text-center">
        <p className="text-[15px] text-[#6B6860] dark:text-[#9B9890] mb-4">Sonuç bulunamadı.</p>
        <button
          type="button"
          onClick={onResetFilters}
          className="text-[13px] font-medium text-[#111110] dark:text-[#EDEDE8] underline underline-offset-2 hover:opacity-60 transition-opacity"
        >
          Filtreleri sıfırla
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-14">
      {CATEGORY_ORDER.map((categoryId: CategoryId) => {
        const cat = trends.filter(t => t.category === categoryId);
        if (cat.length === 0) return null;
        const headingId = `cat-${categoryId}`;

        return (
          <section key={categoryId} aria-labelledby={headingId}>
            <div className="flex items-baseline gap-3 mb-6">
              <h2 id={headingId} className="text-[12px] font-semibold uppercase tracking-widest text-[#A8A49C] dark:text-[#5C5A57]">
                {CATEGORIES[categoryId].name}
              </h2>
              <span className="text-[11px] text-[#C4BFB4] dark:text-[#3D3A36]">{cat.length}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.map(trend => (
                <TrendCard key={trend.slug} trend={trend} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
