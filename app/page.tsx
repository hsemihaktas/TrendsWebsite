import { Suspense } from 'react';
import { getAllTrends } from '@/lib/trends';
import { TrendFilters } from '@/components/TrendFilters';

export default async function HomePage() {
  const allTrends = await getAllTrends();

  return (
    <>
      <header className="mb-8 sm:mb-10 pb-7 sm:pb-8 border-b border-[#E6E3DC] dark:border-[#2C2A27]">
        <h1 className="text-xl sm:text-2xl font-semibold text-[#111110] dark:text-[#EDEDE8] mb-2 tracking-tight">
          UI/UX Tasarım Akımları
        </h1>
        <p className="text-[13px] sm:text-[14px] text-[#6B6860] dark:text-[#9B9890] max-w-lg leading-relaxed">
          {allTrends.length} farklı tasarım akımı — görsel önizleme,
          tarihsel bağlam ve projeye uygulama rehberiyle.
        </p>
      </header>

      <Suspense fallback={<div className="text-[13px] text-[#A8A49C] dark:text-[#5C5A57]">Yükleniyor…</div>}>
        <TrendFilters allTrends={allTrends} />
      </Suspense>
    </>
  );
}
