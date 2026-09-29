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

  const base = [
    'whitespace-nowrap text-[13px] font-medium',
    'pb-2.5 pt-1 px-0',
    'border-b-2 transition-all duration-150',
    'focus-visible:outline-none',
  ].join(' ');

  const active   = 'border-[#111110] dark:border-[#EDEDE8] text-[#111110] dark:text-[#EDEDE8]';
  const inactive = [
    'border-transparent text-[#A8A49C] dark:text-[#5C5A57]',
    'hover:text-[#6B6860] dark:hover:text-[#9B9890]',
    'hover:border-[#E6E3DC] dark:hover:border-[#2C2A27]',
  ].join(' ');

  return (
    <div
      role="group"
      aria-label="Kategoriye göre filtrele"
      /* scrollbar-none: Webkit için kaydırma çubuğunu gizler */
      className="overflow-x-auto -mb-px [&::-webkit-scrollbar]:hidden"
      style={{ scrollbarWidth: 'none' }}
    >
      <div className="flex gap-5 min-w-max border-b border-[#E6E3DC] dark:border-[#2C2A27]">
        <button
          type="button"
          aria-pressed={isAll}
          onClick={() => onCategoryChange(null)}
          className={`${base} ${isAll ? active : inactive}`}
        >
          Tümü
          <span className="ml-1 text-[11px] opacity-50">({totalCount})</span>
        </button>

        {CATEGORY_ORDER.map((id) => {
          const isActive = activeCategory === id;
          return (
            <button
              key={id}
              type="button"
              aria-pressed={isActive}
              onClick={() => onCategoryChange(id)}
              className={`${base} ${isActive ? active : inactive}`}
            >
              {CATEGORIES[id].name}
              <span className="ml-1 text-[11px] opacity-50">({matchCounts[id] ?? 0})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
