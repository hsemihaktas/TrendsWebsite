import { CATEGORIES } from '@/lib/categories';
import type { CategoryId } from '@/types/trend';

// Subtle monochrome color per category — text only, no heavy backgrounds
const TEXT_COLORS: Record<CategoryId, string> = {
  'modern-populer':    'text-indigo-500',
  'clean-professional':'text-sky-500',
  'bold-expressive':   'text-orange-500',
  'dark-atmospheric':  'text-violet-500',
  'retro-nostalgic':   'text-pink-500',
  'artistic-creative': 'text-emerald-500',
};

interface CategoryBadgeProps {
  category: CategoryId;
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const config = CATEGORIES[category];
  const colorClass = TEXT_COLORS[category] ?? 'text-[#A8A49C]';
  const name = config?.name ?? category;

  return (
    <span className={`inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-wide ${colorClass}`}>
      <span aria-hidden="true" className="w-1 h-1 rounded-full bg-current opacity-60 inline-block flex-shrink-0" />
      {name}
    </span>
  );
}
