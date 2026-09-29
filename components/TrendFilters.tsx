'use client';

import { useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import FilterBar from '@/components/FilterBar';
import SearchBox from '@/components/SearchBox';
import { TrendGrid } from '@/components/TrendGrid';
import { filterBySearch, filterTrends, parseUrlCategory } from '@/lib/filter';
import { CATEGORY_ORDER } from '@/lib/categories';
import type { CategoryId, Trend } from '@/types/trend';

interface TrendFiltersProps {
  allTrends: Trend[];
}

export function TrendFilters({ allTrends }: TrendFiltersProps): JSX.Element {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const searchTerm = searchParams.get('q') ?? '';
  const activeCategory = parseUrlCategory(searchParams.get('category'));

  const filteredTrends = filterTrends(allTrends, searchTerm, activeCategory);

  const searchFiltered = filterBySearch(allTrends, searchTerm);
  const matchCounts: Record<string, number> = {};
  for (const id of CATEGORY_ORDER) {
    matchCounts[id] = searchFiltered.filter(t => t.category === id).length;
  }

  const updateUrl = useCallback(
    (q: string, cat: CategoryId | null) => {
      const p = new URLSearchParams();
      if (q) p.set('q', q);
      if (cat) p.set('category', cat);
      const qs = p.toString();
      router.replace(pathname + (qs ? '?' + qs : ''));
    },
    [router, pathname],
  );

  const handleSearch = useCallback((v: string) => updateUrl(v, activeCategory), [updateUrl, activeCategory]);
  const handleCategory = useCallback((c: CategoryId | null) => updateUrl(searchTerm, c), [updateUrl, searchTerm]);
  const handleReset = useCallback(() => router.replace(pathname), [router, pathname]);

  return (
    <div className="space-y-6">
      {/* Controls row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <FilterBar
          activeCategory={activeCategory}
          onCategoryChange={handleCategory}
          matchCounts={matchCounts}
        />
        <SearchBox value={searchTerm} onChange={handleSearch} />
      </div>

      {/* Result count — screen reader */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {filteredTrends.length} trend bulundu
      </div>

      <TrendGrid trends={filteredTrends} onResetFilters={handleReset} />
    </div>
  );
}
