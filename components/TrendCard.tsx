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
      {/* Hero — sabit 200px, tüm kartlarda aynı yükseklik */}
      <HeroPreview
        slug={trend.slug}
        label={`${trend.title} Hero Önizleme`}
        height="h-[200px]"
      />

      {/* Card info */}
      <div className="px-4 pt-3 pb-4">
        <div className="mb-1.5">
          <CategoryBadge category={trend.category} />
        </div>
        <h3 className="text-[14px] font-semibold text-[#111110] leading-snug truncate mb-1.5 group-hover:opacity-70 transition-opacity">
          {trend.title}
        </h3>
        <p className="text-[12px] text-[#6B6860] leading-relaxed line-clamp-2">
          {truncateDescription(trend.description, 110)}
        </p>
      </div>
    </Link>
  );
}
