import { CATEGORIES } from '@/lib/categories';
import type { CategoryId } from '@/types/trend';

const TEXT_COLORS: Record<CategoryId, string> = {
  'modern-populer':    'text-indigo-500',
  'clean-professional':'text-sky-500',
  'bold-expressive':   'text-orange-500',
  'dark-atmospheric':  'text-violet-500',
  'retro-nostalgic':   'text-pink-500',
  'artistic-creative': 'text-emerald-500',
  'yeni-guncel':       'text-cyan-500',
  'kulturel-estetik':  'text-rose-500',
};

export default function CategoryBadge({ category }: { category: CategoryId }) {
  const config = CATEGORIES[category];
  const colorClass = TEXT_COLORS[category] ?? 'text-[#A8A49C]';
  return (
    <span className={`inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-wide ${colorClass}`}>
      <span aria-hidden="true" className="w-1 h-1 rounded-full bg-current opacity-60 inline-block flex-shrink-0" />
      {config?.name ?? category}
    </span>
  );
}
