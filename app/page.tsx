import { Suspense } from "react";
import { getAllTrends } from "@/lib/trends";
import { TrendFilters } from "@/components/TrendFilters";

/**
 * Homepage — Server Component.
 *
 * Fetches the full sorted trend list at build time (SSG) and passes it to the
 * client-side TrendFilters coordinator. TrendFilters is wrapped in a Suspense
 * boundary because it calls useSearchParams(), which requires a Suspense
 * fallback during static generation in Next.js 14.
 *
 * Requirements: 1.1, 1.2, 1.6, 14.1, 15.2
 */
export default async function HomePage() {
  const allTrends = await getAllTrends();

  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Tasarım Akımları
      </h1>

      <Suspense
        fallback={<div className="text-gray-500 text-sm">Yükleniyor...</div>}
      >
        <TrendFilters allTrends={allTrends} />
      </Suspense>
    </>
  );
}
