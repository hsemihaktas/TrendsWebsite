import Link from 'next/link';
import { truncateDescription } from '@/lib/filter';
import HeroPreview from '@/components/hero/HeroPreview';
import CategoryBadge from '@/components/CategoryBadge';
import type { Trend } from '@/types/trend';

interface TrendCardProps {
  trend: Trend;
}

export function TrendCard({ trend }: TrendCardProps): JSX.Element {
  return (
    <Link
      href={`/trends/${trend.slug}`}
      className="group block bg-white border border-[#E6E3DC] rounded-lg overflow-hidden
                 hover:border-[#C4BFB4] hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)]
                 transition-all duration-200
                 motion-reduce:hover:transform-none
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111110] focus-visible:ring-offset-2"
    >
      {/* Hero preview — takes ~55% of card height */}
      <div className="relative">
        <HeroPreview
          slug={trend.slug}
          label={`${trend.title} Hero Önizleme`}
          minHeight="min-h-[180px]"
        />
      </div>

      {/* Card info */}
      <div className="px-4 py-4">
        {/* Category */}
        <div className="mb-2">
          <CategoryBadge category={trend.category} />
        </div>

        {/* Title */}
        <h3 className="text-[15px] font-semibold text-[#111110] leading-snug truncate mb-1.5 group-hover:opacity-80 transition-opacity">
          {trend.title}
        </h3>

        {/* Description */}
        <p className="text-[13px] text-[#6B6860] leading-relaxed line-clamp-2">
          {truncateDescription(trend.description, 120)}
        </p>
      </div>
    </Link>
  );
}
