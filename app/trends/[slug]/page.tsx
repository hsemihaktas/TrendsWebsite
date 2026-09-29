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
import { CodeBlock } from '@/components/mdx/CodeBlock';

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
      <div className="flex items-center justify-between mb-5 sm:mb-6">
        <BreadcrumbNav categoryName={categoryName} trendTitle={trend.title} />
        <Link href="/"
          className="text-[12px] text-[#A8A49C] dark:text-[#5C5A57] hover:text-[#6B6860] dark:hover:text-[#9B9890] transition-colors flex-shrink-0 ml-3">
          ← Geri
        </Link>
      </div>

      {/* Hero — responsive height: mobile 200px, desktop 300px */}
      <div className="rounded-xl overflow-hidden border border-[#E6E3DC] dark:border-[#2C2A27] mb-6 sm:mb-8">
        <HeroPreview
          slug={slug}
          label={`${trend.title} Hero Önizleme`}
          height="h-[200px] sm:h-[280px]"
        />
      </div>

      {/* Title block */}
      <div className="mb-7 sm:mb-8">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
          <CategoryBadge category={trend.category} />
          <time dateTime={trend.publishedAt} className="text-[11px] text-[#A8A49C] dark:text-[#5C5A57]">
            {new Date(trend.publishedAt + 'T00:00:00').toLocaleDateString('tr-TR', { year: 'numeric', month: 'long' })}
          </time>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#111110] dark:text-[#EDEDE8] tracking-tight leading-snug mb-3">
          {trend.title}
        </h1>
        <p className="text-[14px] sm:text-[15px] text-[#6B6860] dark:text-[#9B9890] leading-relaxed">
          {trend.description}
        </p>
      </div>

      <div className="border-t border-[#E6E3DC] dark:border-[#2C2A27] mb-7 sm:mb-8" />

      {/* MDX */}
      <div className="mdx-content mb-10 sm:mb-12">
        <MDXRemote
          source={trend.rawContent}
          components={{ pre: CodeBlock }}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  {
                    theme: { light: 'github-light', dark: 'github-dark' },
                    keepBackground: false,
                  },
                ],
              ],
            },
          }}
        />
      </div>

      {/* Related */}
      <section aria-labelledby="related-heading"
               className="border-t border-[#E6E3DC] dark:border-[#2C2A27] pt-7 sm:pt-8 mb-7 sm:mb-8">
        <h2 id="related-heading"
            className="text-[12px] font-semibold uppercase tracking-widest text-[#A8A49C] dark:text-[#5C5A57] mb-4 sm:mb-5">
          İlişkili Akımlar
        </h2>
        <RelatedTrends currentSlug={trend.slug} currentCategory={trend.category} allTrends={allTrends} />
      </section>

      <div className="border-t border-[#E6E3DC] dark:border-[#2C2A27] pt-5 sm:pt-6">
        <TrendNavigation currentSlug={trend.slug} allTrends={allTrends} />
      </div>

    </article>
  );
}
