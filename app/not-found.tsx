import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      {/* Büyük numara */}
      <p
        className="text-[120px] sm:text-[160px] font-black leading-none select-none mb-2"
        style={{ color: 'var(--bdr)' }}
      >
        404
      </p>

      {/* Başlık */}
      <h1 className="text-xl font-semibold text-[#111110] dark:text-[#EDEDE8] mb-3">
        Sayfa bulunamadı
      </h1>

      {/* Açıklama */}
      <p className="text-[14px] text-[#6B6860] dark:text-[#9B9890] max-w-xs mb-8 leading-relaxed">
        Bu URL'de bir sayfa yok. Yanlış bir adres girmiş olabilirsiniz.
      </p>

      {/* CTA */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5
                   text-[13px] font-medium
                   bg-[#111110] dark:bg-[#EDEDE8]
                   text-white dark:text-[#111110]
                   rounded-lg
                   hover:opacity-80 transition-opacity
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111110] dark:focus-visible:ring-[#EDEDE8] focus-visible:ring-offset-2"
      >
        ← Tüm akımlara dön
      </Link>
    </div>
  );
}
