import Link from 'next/link';

interface BreadcrumbNavProps {
  categoryName: string;
  trendTitle: string;
}

export function BreadcrumbNav({ categoryName, trendTitle }: BreadcrumbNavProps) {
  return (
    <nav aria-label="Sayfa konumu">
      <ol className="flex flex-wrap items-center gap-1.5 text-[12px] text-[#A8A49C] dark:text-[#5C5A57]">
        <li>
          <Link href="/" className="hover:text-[#6B6860] dark:hover:text-[#9B9890] transition-colors">
            Tüm Akımlar
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li>{categoryName}</li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="text-[#6B6860] dark:text-[#9B9890] truncate max-w-[180px]">
          {trendTitle}
        </li>
      </ol>
    </nav>
  );
}
