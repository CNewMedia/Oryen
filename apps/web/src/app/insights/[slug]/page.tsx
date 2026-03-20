import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { buildPageMetadata } from '@/lib/seo/metadata';
import { insightBySlugQuery, insightsIndexQuery } from '@/lib/sanity/queries';
import { sanityFetchIfConfigured } from '@/lib/sanity/fetch';
import type { SlugDoc } from '@/lib/sanity/types';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const list = await sanityFetchIfConfigured<Array<{ slug: string }>>({
    query: insightsIndexQuery,
    tags: ['insight'],
  });
  return (list ?? []).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = await sanityFetchIfConfigured<SlugDoc>({
    query: insightBySlugQuery,
    params: { slug },
    tags: ['insight', slug],
  });
  const label = doc?.title ?? 'Article';
  return {
    title: label,
    ...buildPageMetadata({
      path: `/insights/${slug}`,
      seo: doc?.seo,
      pageTitle: label,
    }),
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const configured = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
  const doc = await sanityFetchIfConfigured<SlugDoc>({
    query: insightBySlugQuery,
    params: { slug },
    tags: ['insight', slug],
  });

  if (configured && !doc) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <article>
        <h1 className="text-2xl font-medium tracking-tight">
          {doc?.title ?? 'Article'}
        </h1>
        {doc?.publishedAt ? (
          <p className="mt-2 text-sm text-neutral-500">{doc.publishedAt}</p>
        ) : null}
      </article>
    </main>
  );
}
