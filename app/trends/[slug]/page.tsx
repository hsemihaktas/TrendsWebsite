import type { Metadata } from 'next';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';

import { getAllTrends, getTrendBySlug } from '@/lib/trends';
import { CATEGORIES } from '@/lib/categories';
import HeroPreview from '@/components/hero/HeroPreview';
import CategoryBadge from '@/components/CategoryBadge';
import { BreadcrumbNav } from '@/components/detail/BreadcrumbNav';
import { RelatedTrends } from '@/components/detail/RelatedTrends';
import { TrendNavigation } from '@/components/detail/TrendNavigation';

/**
 * SSG: tüm 33 trend slug'ı build zamanında üretilir.
 * Requirements: 10.3, 14.1
 */
export async function generateStaticParams() {
  const trends = await getAllTrends();
  return trends.map((trend) => ({ slug: trend.slug }));
}

/**
 * Her detay sayfası için dinamik metadata üretir.
 */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const trend = await getTrendBySlug(params.slug);
  return {
    title: `${trend.title} | Design Trends Showcase`,
    description: trend.description,
  };
}

/**
 * Detay sayfası — Server Component, SSG ile statik olarak üretilir.
 *
 * - getTrendBySlug: dosya yoksa otomatik olarak notFound() tetikler (Req 9.9)
 * - HeroPreview: min 240px yükseklikte sayfa üstünde (Req 9.6)
 * - MDXRemote + rehype-pretty-code: syntax highlighting (Req 9.4, 10.4, 10.5)
 * - BreadcrumbNav + geri bağlantı (Req 9.7, 12.3)
 * - RelatedTrends: en az 2 ilişkili trend (Req 9.8)
 * - TrendNavigation: önceki/sonraki bağlantılar (Req 12.4, 12.5)
 *
 * Requirements: 9.1–9.9, 10.3–10.5, 12.3–12.5, 14.1, 15.2
 */
export default async function TrendDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // getTrendBySlug calls notFound() on ENOENT — no manual 404 handling needed
  const [trend, allTrends] = await Promise.all([
    getTrendBySlug(slug),
    getAllTrends(),
  ]);

  const categoryConfig = CATEGORIES[trend.category];
  const categoryName = categoryConfig?.name ?? trend.category;

  // Publish date formatted for display
  const publishedDate = new Date(trend.publishedAt + 'T00:00:00').toLocaleDateString(
    'tr-TR',
    { year: 'numeric', month: 'long', day: 'numeric' },
  );

  return (
    <article className="max-w-4xl mx-auto">
      {/* ────────────────────────────────────────────────────────────
          Hero Önizleme — min-h-[240px], sayfanın üst bölümü (Req 9.6)
      ──────────────────────────────────────────────────────────── */}
      <HeroPreview
        slug={slug}
        label={`${trend.title} Hero Önizleme`}
        minHeight="min-h-[240px]"
      />

      {/* ────────────────────────────────────────────────────────────
          Breadcrumb + Ana sayfaya dönüş bağlantısı (Req 9.7, 12.3)
      ──────────────────────────────────────────────────────────── */}
      <div className="mt-6 mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <BreadcrumbNav categoryName={categoryName} trendTitle={trend.title} />
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded min-h-[44px] sm:min-h-0"
        >
          <span aria-hidden="true">←</span>
          Ana Sayfaya Dön
        </Link>
      </div>

      {/* ────────────────────────────────────────────────────────────
          Trend başlığı, kategori rozeti ve yayın tarihi (Req 9.2)
      ──────────────────────────────────────────────────────────── */}
      <section aria-labelledby="trend-title" className="mt-6 mb-8">
        <h1
          id="trend-title"
          className="text-4xl font-bold text-gray-900 leading-tight mb-4"
        >
          {trend.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <CategoryBadge category={trend.category} />
          <time
            dateTime={trend.publishedAt}
            className="text-sm text-gray-500"
          >
            {publishedDate}
          </time>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed">
          {trend.description}
        </p>
      </section>

      {/* ────────────────────────────────────────────────────────────
          MDX içeriği — rehype-pretty-code ile syntax highlighting
          (Req 9.3, 9.4, 10.4, 10.5)
      ──────────────────────────────────────────────────────────── */}
      <section aria-label="Trend içeriği" className="mt-8 mb-12">
        <div className="mdx-content">
          <MDXRemote
            source={trend.rawContent}
            options={{
              mdxOptions: {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark' }]] as any,
              },
            }}
          />
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          İlişkili trendler (Req 9.8)
      ──────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="related-trends-heading"
        className="mt-4 pt-8 border-t border-gray-200"
      >
        <h2
          id="related-trends-heading"
          className="text-2xl font-bold text-gray-900 mb-6"
        >
          İlişkili Trendler
        </h2>
        <RelatedTrends
          currentSlug={trend.slug}
          currentCategory={trend.category}
          allTrends={allTrends}
        />
      </section>

      {/* ────────────────────────────────────────────────────────────
          Önceki / Sonraki navigasyon (Req 12.4, 12.5)
      ──────────────────────────────────────────────────────────── */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <TrendNavigation currentSlug={trend.slug} allTrends={allTrends} />
      </div>
    </article>
  );
}
