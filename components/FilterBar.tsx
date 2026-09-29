'use client';

import { CATEGORIES, CATEGORY_ORDER } from '@/lib/categories';
import type { CategoryId } from '@/types/trend';

interface FilterBarProps {
  activeCategory: CategoryId | null;
  onCategoryChange: (category: CategoryId | null) => void;
  matchCounts: Record<string, number>;
}

export default function FilterBar({ activeCategory, onCategoryChange, matchCounts }: FilterBarProps) {
  const totalCount = CATEGORY_ORDER.reduce((s, id) => s + (matchCounts[id] ?? 0), 0);
  const isAll = activeCategory === null;

  const btnBase = `
    whitespace-nowrap text-[13px] font-medium pb-2.5 pt-1 px-0
    border-b-2 transition-all duration-150
    focus-visible:outline-none
  `;
  const active = `border-[#111110] text-[#111110]`;
  const inactive = `border-transparent text-[#A8A49C] hover:text-[#6B6860] hover:border-[#E6E3DC]`;

  return (
    <div
      role="group"
      aria-label="Kategoriye göre filtrele"
      className="overflow-x-auto -mb-px"
    >
      <div className="flex gap-6 min-w-max border-b border-[#E6E3DC]">
        <button
          type="button"
          aria-pressed={isAll}
          onClick={() => onCategoryChange(null)}
          className={`${btnBase} ${isAll ? active : inactive}`}
        >
          Tümü
          <span className="ml-1.5 text-[11px] opacity-60">({totalCount})</span>
        </button>

        {CATEGORY_ORDER.map((id) => {
          const isActive = activeCategory === id;
          const count = matchCounts[id] ?? 0;
          return (
            <button
              key={id}
              type="button"
              aria-pressed={isActive}
              onClick={() => onCategoryChange(id)}
              className={`${btnBase} ${isActive ? active : inactive}`}
            >
              {CATEGORIES[id].name}
              <span className="ml-1.5 text-[11px] opacity-60">({count})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
