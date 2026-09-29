// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <p className="text-6xl font-black text-gray-200 mb-4">404</p>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Sayfa Bulunamadı</h1>
      <p className="text-gray-500 mb-8 max-w-md">
        Aradığınız sayfa mevcut değil ya da kaldırılmış olabilir.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-colors"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
