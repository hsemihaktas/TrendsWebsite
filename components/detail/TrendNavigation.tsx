import Link from "next/link";
import { getTrendNavigation } from "@/lib/trends";
import type { Trend } from "@/types/trend";

interface TrendNavigationProps {
  currentSlug: string;
  allTrends: Trend[];
}

/**
 * Anasayfadaki sıralama esas alınarak önceki / sonraki trend bağlantılarını
 * render eder. Liste başında prev=null, sonunda next=null olduğunda ilgili
 * düğme aria-disabled="true" ile devre dışı görünür.
 * Requirements: 12.4, 12.5, 15.4
 */
export function TrendNavigation({
  currentSlug,
  allTrends,
}: TrendNavigationProps) {
  const { prev, next } = getTrendNavigation(currentSlug, allTrends);

  return (
    <nav
      aria-label="Trend navigasyonu"
      className="flex justify-between items-center gap-4"
    >
      {/* Önceki trend */}
      {prev ? (
        <Link
          href={`/trends/${prev.slug}`}
          className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors min-h-[44px] py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded"
        >
          <span aria-hidden="true">←</span>
          <span className="max-w-[160px] sm:max-w-[220px] truncate">
            {prev.title}
          </span>
        </Link>
      ) : (
        <span
          role="link"
          aria-disabled="true"
          className="flex items-center gap-2 text-sm text-gray-400 cursor-not-allowed select-none min-h-[44px] py-2"
        >
          <span aria-hidden="true">←</span>
          <span>Önceki Trend</span>
        </span>
      )}

      {/* Sonraki trend */}
      {next ? (
        <Link
          href={`/trends/${next.slug}`}
          className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors min-h-[44px] py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded text-right"
        >
          <span className="max-w-[160px] sm:max-w-[220px] truncate">
            {next.title}
          </span>
          <span aria-hidden="true">→</span>
        </Link>
      ) : (
        <span
          role="link"
          aria-disabled="true"
          className="flex items-center gap-2 text-sm text-gray-400 cursor-not-allowed select-none min-h-[44px] py-2"
        >
          <span>Sonraki Trend</span>
          <span aria-hidden="true">→</span>
        </span>
      )}
    </nav>
  );
}
