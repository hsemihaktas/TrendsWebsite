import { Suspense } from 'react';
import { getAllTrends } from '@/lib/trends';
import { TrendFilters } from '@/components/TrendFilters';

export default async function HomePage() {
  const allTrends = await getAllTrends();

  return (
    <>
      {/* Page header */}
      <header className="mb-10 pb-8 border-b border-[#E6E3DC]">
        <h1 className="text-2xl font-semibold text-[#111110] mb-2 tracking-tight">
          UI/UX Tasarım Akımları
        </h1>
        <p className="text-[14px] text-[#6B6860] max-w-xl leading-relaxed">
          {allTrends.length} farklı tasarım akımı — her biri için görsel önizleme,
          tarihsel bağlam ve projelerinizde nasıl uygulayacağınıza dair rehber.
        </p>
      </header>

      {/* Filters + grid */}
      <Suspense fallback={
        <div className="text-[13px] text-[#A8A49C]">Yükleniyor…</div>
      }>
        <TrendFilters allTrends={allTrends} />
      </Suspense>
    </>
  );
}
