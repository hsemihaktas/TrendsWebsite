import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center">
      <p className="text-[72px] font-semibold text-[#E6E3DC] leading-none mb-4 select-none">404</p>
      <h1 className="text-lg font-semibold text-[#111110] mb-2">Sayfa bulunamadı</h1>
      <p className="text-[14px] text-[#6B6860] mb-6">
        Aradığınız sayfa mevcut değil.
      </p>
      <Link
        href="/"
        className="text-[13px] font-medium text-[#111110] underline underline-offset-2 decoration-[#C4BFB4] hover:decoration-[#111110] transition-colors"
      >
        Ana sayfaya dön
      </Link>
    </div>
  );
}
