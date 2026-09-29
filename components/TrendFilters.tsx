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
  /** Full sorted trend list passed down from the Server Component. */
  allTrends: Trend[];
}

/**
 * Client-side coordinator for URL-based filter state.
 *
 * Reads `?q=` (search term) and `?category=` (category filter) from the URL,
 * computes the filtered list, and keeps URL in sync via `router.replace` (not
 * push, so individual keystrokes don't pollute browser history).
 *
 * Requirements: 11.1–11.10, 15.7
 */
export function TrendFilters({ allTrends }: TrendFiltersProps): JSX.Element {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // ── Derive filter state from URL ────────────────────────────────────────
  const searchTerm = searchParams.get('q') ?? '';
  const activeCategory = parseUrlCategory(searchParams.get('category'));

  // ── Compute displayed trends (AND logic) ────────────────────────────────
  const filteredTrends = filterTrends(allTrends, searchTerm, activeCategory);

  // Per-category match counts based on search term only (ignores active category),
  // so FilterBar always shows how many items exist in each category for the
  // current search query — even when a category is already selected.
  const searchFilteredTrends = filterBySearch(allTrends, searchTerm);
  const matchCounts: Record<string, number> = {};
  for (const id of CATEGORY_ORDER) {
    matchCounts[id] = searchFilteredTrends.filter(
      (t) => t.category === id,
    ).length;
  }

  // ── URL mutation helper ─────────────────────────────────────────────────
  const updateUrl = useCallback(
    (newSearchTerm: string, newCategory: CategoryId | null) => {
      const params = new URLSearchParams();
      if (newSearchTerm) params.set('q', newSearchTerm);
      if (newCategory) params.set('category', newCategory);
      const query = params.toString();
      // replace instead of push — avoids polluting the history stack
      router.replace(pathname + (query ? '?' + query : ''));
    },
    [router, pathname],
  );

  // ── Filter change handlers ──────────────────────────────────────────────
  const handleSearchChange = useCallback(
    (value: string) => {
      updateUrl(value, activeCategory);
    },
    [updateUrl, activeCategory],
  );

  const handleCategoryChange = useCallback(
    (category: CategoryId | null) => {
      updateUrl(searchTerm, category);
    },
    [updateUrl, searchTerm],
  );

  // Clears both ?q and ?category from the URL (Requirement 11.7)
  const handleResetFilters = useCallback(() => {
    router.replace(pathname);
  }, [router, pathname]);

  return (
    <div>
      {/* Search box + category filter bar */}
      <div className="flex flex-col gap-4 mb-6">
        <SearchBox value={searchTerm} onChange={handleSearchChange} />
        <FilterBar
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          matchCounts={matchCounts}
        />
      </div>

      {/*
       * aria-live region — announces result count to screen readers when
       * filters change. sr-only keeps it invisible visually. (Req 15.7)
       */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {filteredTrends.length} trend bulundu
      </div>

      {/* Responsive trend grid */}
      <TrendGrid trends={filteredTrends} onResetFilters={handleResetFilters} />
    </div>
  );
}
