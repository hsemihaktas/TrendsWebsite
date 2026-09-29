import { getRelatedTrends } from "@/lib/trends";
import { TrendCard } from "@/components/TrendCard";
import type { CategoryId, Trend } from "@/types/trend";

interface RelatedTrendsProps {
  currentSlug: string;
  currentCategory: CategoryId;
  allTrends: Trend[];
}

/**
 * Aynı kategoriden (eksik kalırsa farklı kategoriden tamamlayarak)
 * en fazla 2 ilişkili trend kartını render eder.
 * Requirements: 9.8, 15.2
 */
export function RelatedTrends({
  currentSlug,
  currentCategory,
  allTrends,
}: RelatedTrendsProps) {
  const relatedTrends = getRelatedTrends(
    currentSlug,
    currentCategory,
    allTrends,
  );

  if (relatedTrends.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {relatedTrends.map((trend) => (
        <TrendCard key={trend.slug} trend={trend} />
      ))}
    </div>
  );
}
