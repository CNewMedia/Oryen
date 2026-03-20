import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PageSection } from '@/components/sections/page-section';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { insightArticleBySlugQuery, insightArticleIndexQuery } from '@/lib/sanity/queries';
import { sanityFetchIfConfigured } from '@/lib/sanity/fetch';
import type { SlugDoc } from '@/lib/sanity/types';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const list = await sanityFetchIfConfigured<Array<{ slug: string }>>({
    query: insightArticleIndexQuery,
    tags: ['insightArticle'],
  });
  return (list ?? []).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = await sanityFetchIfConfigured<SlugDoc>({
    query: insightArticleBySlugQuery,
    params: { slug },
    tags: ['insightArticle', slug],
  });
  const label = doc?.title ?? 'Insight';
  return {
    title: label,
    ...buildPageMetadata({
      path: `/insights/${slug}`,
      seo: doc?.seo,
      pageTitle: label,
    }),
  };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const configured = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
  const doc = await sanityFetchIfConfigured<SlugDoc>({
    query: insightArticleBySlugQuery,
    params: { slug },
    tags: ['insightArticle', slug],
  });

  if (configured && !doc) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <PageSection>
        <article>
          <h1 className="text-2xl font-medium tracking-tight">
            {doc?.title ?? 'Insight'}
          </h1>
          {doc?.publishedAt ? (
            <p className="mt-2 text-sm text-neutral-500">{doc.publishedAt}</p>
          ) : null}
        </article>
      </PageSection>
    </main>
  );
}
