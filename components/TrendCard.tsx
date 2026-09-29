import Link from 'next/link';
import { truncateDescription } from '@/lib/filter';
import HeroPreview from '@/components/hero/HeroPreview';
import CategoryBadge from '@/components/CategoryBadge';
import type { Trend } from '@/types/trend';

interface TrendCardProps { trend: Trend; }

export function TrendCard({ trend }: TrendCardProps): JSX.Element {
  return (
    <Link
      href={`/trends/${trend.slug}`}
      className="group block rounded-lg overflow-hidden
                 bg-white dark:bg-[#1C1B19]
                 border border-[#E6E3DC] dark:border-[#2C2A27]
                 hover:border-[#C4BFB4] dark:hover:border-[#3D3A36]
                 hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_2px_12px_rgba(0,0,0,0.3)]
                 transition-all duration-200
                 motion-reduce:transition-none
                 focus-visible:outline-none focus-visible:ring-2
                 focus-visible:ring-[#111110] dark:focus-visible:ring-[#EDEDE8]
                 focus-visible:ring-offset-2"
    >
      {/* Hero — responsive: mobile biraz daha küçük */}
      <HeroPreview
        slug={trend.slug}
        label={`${trend.title} Hero Önizleme`}
        height="h-[180px] sm:h-[200px]"
      />

      <div className="px-3 sm:px-4 pt-3 pb-3 sm:pb-4">
        <div className="mb-1.5">
          <CategoryBadge category={trend.category} />
        </div>
        <h3 className="text-[13px] sm:text-[14px] font-semibold text-[#111110] dark:text-[#EDEDE8]
                       leading-snug truncate mb-1.5
                       group-hover:opacity-70 transition-opacity">
          {trend.title}
        </h3>
        <p className="text-[12px] text-[#6B6860] dark:text-[#9B9890] leading-relaxed line-clamp-2">
          {truncateDescription(trend.description, 100)}
        </p>
      </div>
    </Link>
  );
}
