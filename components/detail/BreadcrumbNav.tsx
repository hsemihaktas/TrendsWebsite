import Link from "next/link";

interface BreadcrumbNavProps {
  /** Kategori adı, örn. "Modern & Popüler" */
  categoryName: string;
  /** Trendin görüntülenen başlığı */
  trendTitle: string;
}

/**
 * Detay sayfası breadcrumb navigasyonu.
 * Render çıktısı: Ana Sayfa › {categoryName} › {trendTitle}
 * Requirements: 9.7, 12.3, 15.2
 */
export function BreadcrumbNav({
  categoryName,
  trendTitle,
}: BreadcrumbNavProps) {
  return (
    <nav aria-label="Sayfa konumu">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600">
        <li>
          <Link
            href="/"
            className="hover:text-gray-900 transition-colors underline-offset-2 hover:underline"
          >
            Ana Sayfa
          </Link>
        </li>
        <li aria-hidden="true" className="text-gray-400 select-none">
          ›
        </li>
        <li className="text-gray-700">{categoryName}</li>
        <li aria-hidden="true" className="text-gray-400 select-none">
          ›
        </li>
        <li
          aria-current="page"
          className="text-gray-900 font-medium max-w-[240px] sm:max-w-none truncate"
        >
          {trendTitle}
        </li>
      </ol>
    </nav>
  );
}
