import { CATEGORIES } from '@/lib/categories';
import type { CategoryId } from '@/types/trend';

interface CategoryBadgeProps {
  category: CategoryId;
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const config = CATEGORIES[category];
  const badgeClass = config
    ? config.badgeClass
    : 'bg-gray-100 text-gray-800'; // fallback for unknown categories

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeClass}`}
    >
      {config ? config.name : category}
    </span>
  );
}
