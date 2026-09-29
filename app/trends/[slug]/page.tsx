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

export async function generateStaticParams() {
  const trends = await getAllTrends();
  return trends.map(t => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const trend = await getTrendBySlug(params.slug);
  return {
    title: `${trend.title} — Design Trends`,
    description: trend.description,
  };
}

export default async function TrendDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [trend, allTrends] = await Promise.all([getTrendBySlug(slug), getAllTrends()]);

  const categoryConfig = CATEGORIES[trend.category];
  const categoryName = categoryConfig?.name ?? trend.category;

  return (
    <article className="max-w-3xl mx-auto">

      {/* Breadcrumb + back */}
      <div className="flex items-center justify-between mb-6">
        <BreadcrumbNav categoryName={categoryName} trendTitle={trend.title} />
        <Link
          href="/"
          className="text-[12px] text-[#A8A49C] hover:text-[#6B6860] transition-colors"
        >
          ← Geri
        </Link>
      </div>

      {/* Hero preview */}
      <div className="rounded-xl overflow-hidden border border-[#E6E3DC] mb-8">
        <HeroPreview
          slug={slug}
          label={`${trend.title} Hero Önizleme`}
          minHeight="min-h-[280px]"
        />
      </div>

      {/* Title block */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <CategoryBadge category={trend.category} />
          <time dateTime={trend.publishedAt} className="text-[11px] text-[#A8A49C]">
            {new Date(trend.publishedAt + 'T00:00:00').toLocaleDateString('tr-TR', {
              year: 'numeric', month: 'long',
            })}
          </time>
        </div>
        <h1 className="text-3xl font-semibold text-[#111110] tracking-tight leading-snug mb-3">
          {trend.title}
        </h1>
        <p className="text-[15px] text-[#6B6860] leading-relaxed">
          {trend.description}
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E6E3DC] mb-8" />

      {/* MDX content */}
      <div className="mdx-content mb-12">
        <MDXRemote
          source={trend.rawContent}
          options={{
            mdxOptions: {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              rehypePlugins: [[rehypePrettyCode, { theme: 'github-light' }]] as any,
            },
          }}
        />
      </div>

      {/* Related trends */}
      <section aria-labelledby="related-heading" className="border-t border-[#E6E3DC] pt-8 mb-8">
        <h2 id="related-heading" className="text-[12px] font-semibold uppercase tracking-widest text-[#A8A49C] mb-5">
          İlişkili Akımlar
        </h2>
        <RelatedTrends
          currentSlug={trend.slug}
          currentCategory={trend.category}
          allTrends={allTrends}
        />
      </section>

      {/* Prev / next */}
      <div className="border-t border-[#E6E3DC] pt-6">
        <TrendNavigation currentSlug={trend.slug} allTrends={allTrends} />
      </div>
    </article>
  );
}
