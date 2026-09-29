import Link from "next/link";
import { truncateDescription } from "@/lib/filter";
import HeroPreview from "@/components/hero/HeroPreview";
import CategoryBadge from "@/components/CategoryBadge";
import type { Trend } from "@/types/trend";

interface TrendCardProps {
  trend: Trend;
}

/**
 * TrendCard — Bir tasarım akımını temsil eden kart bileşeni.
 *
 * - Tüm kart `/trends/[slug]` bağlantısıyla sarmalanır (Req 2.5)
 * - HeroPreview kart yüksekliğinin en az %50'sini kaplar (Req 2.2)
 * - Başlık `truncate` ile görsel 60 karakter sınırı (Req 2.1)
 * - Açıklama en fazla 120 karakter, fazlası '...' ile kırpılır (Req 2.3)
 * - CategoryBadge ile kategori etiketi (Req 2.6)
 * - 200ms `transition-transform` ile `hover:-translate-y-1` efekti (Req 2.4)
 * - `motion-reduce:hover:transform-none`: azaltılmış hareket tercihini destekler (Req 14.4)
 * - `focus-visible:ring-2`: klavye odağı görünür hale getirilir (Req 15.4)
 *
 * Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 14.4, 15.4
 */
export function TrendCard({ trend }: TrendCardProps): JSX.Element {
  return (
    <Link
      href={`/trends/${trend.slug}`}
      className="
        block rounded-xl border border-gray-200 bg-white overflow-hidden
        shadow-sm hover:shadow-md
        transition-transform duration-200
        hover:-translate-y-1 motion-reduce:hover:transform-none
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-indigo-500 focus-visible:ring-offset-2
      "
    >
      {/* Hero Preview — kart yüksekliğinin ≥%50'si (Req 2.2) */}
      <HeroPreview
        slug={trend.slug}
        label={`${trend.title} Hero Önizleme`}
        minHeight="min-h-[180px]"
      />

      {/* Kart alt bilgi alanı */}
      <div className="p-4">
        {/* Başlık — truncate ile görsel sınır (Req 2.1) */}
        <h3 className="font-semibold text-gray-900 truncate mb-1 text-base">
          {trend.title}
        </h3>

        {/* Açıklama — en fazla 120 karakter (Req 2.3) */}
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          {truncateDescription(trend.description, 120)}
        </p>

        {/* Kategori etiketi (Req 2.6) */}
        <CategoryBadge category={trend.category} />
      </div>
    </Link>
  );
}
