import Link from 'next/link';
import { getTrendNavigation } from '@/lib/trends';
import type { Trend } from '@/types/trend';

interface TrendNavigationProps {
  currentSlug: string;
  allTrends: Trend[];
}

export function TrendNavigation({ currentSlug, allTrends }: TrendNavigationProps) {
  const { prev, next } = getTrendNavigation(currentSlug, allTrends);

  return (
    <nav aria-label="Trend navigasyonu" className="flex items-center justify-between">
      <div>
        {prev ? (
          <Link href={`/trends/${prev.slug}`} className="group flex flex-col gap-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111110] dark:focus-visible:ring-[#EDEDE8] focus-visible:ring-offset-2 rounded">
            <span className="text-[11px] uppercase tracking-wide text-[#A8A49C] dark:text-[#5C5A57] group-hover:text-[#6B6860] dark:group-hover:text-[#9B9890] transition-colors">← Önceki</span>
            <span className="text-[14px] font-medium text-[#6B6860] dark:text-[#9B9890] group-hover:text-[#111110] dark:group-hover:text-[#EDEDE8] transition-colors max-w-[200px] truncate">{prev.title}</span>
          </Link>
        ) : (
          <span aria-disabled="true" className="flex flex-col gap-0.5 opacity-30 cursor-not-allowed">
            <span className="text-[11px] uppercase tracking-wide text-[#A8A49C] dark:text-[#5C5A57]">← Önceki</span>
            <span className="text-[14px] font-medium text-[#6B6860] dark:text-[#9B9890]">—</span>
          </span>
        )}
      </div>

      <div className="text-right">
        {next ? (
          <Link href={`/trends/${next.slug}`} className="group flex flex-col gap-0.5 items-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111110] dark:focus-visible:ring-[#EDEDE8] focus-visible:ring-offset-2 rounded">
            <span className="text-[11px] uppercase tracking-wide text-[#A8A49C] dark:text-[#5C5A57] group-hover:text-[#6B6860] dark:group-hover:text-[#9B9890] transition-colors">Sonraki →</span>
            <span className="text-[14px] font-medium text-[#6B6860] dark:text-[#9B9890] group-hover:text-[#111110] dark:group-hover:text-[#EDEDE8] transition-colors max-w-[200px] truncate">{next.title}</span>
          </Link>
        ) : (
          <span aria-disabled="true" className="flex flex-col gap-0.5 items-end opacity-30 cursor-not-allowed">
            <span className="text-[11px] uppercase tracking-wide text-[#A8A49C] dark:text-[#5C5A57]">Sonraki →</span>
            <span className="text-[14px] font-medium text-[#6B6860] dark:text-[#9B9890]">—</span>
          </span>
        )}
      </div>
    </nav>
  );
}
