import { getRelatedTrends } from '@/lib/trends';
import { TrendCard } from '@/components/TrendCard';
import type { CategoryId, Trend } from '@/types/trend';

interface RelatedTrendsProps {
  currentSlug: string;
  currentCategory: CategoryId;
  allTrends: Trend[];
}

export function RelatedTrends({ currentSlug, currentCategory, allTrends }: RelatedTrendsProps) {
  const related = getRelatedTrends(currentSlug, currentCategory, allTrends, 2);
  if (related.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {related.map(trend => (
        <TrendCard key={trend.slug} trend={trend} />
      ))}
    </div>
  );
}
