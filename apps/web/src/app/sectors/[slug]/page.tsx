import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { buildPageMetadata } from '@/lib/seo/metadata';
import { sectorBySlugQuery, sectorsIndexQuery } from '@/lib/sanity/queries';
import { sanityFetchIfConfigured } from '@/lib/sanity/fetch';
import type { SlugDoc } from '@/lib/sanity/types';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const list = await sanityFetchIfConfigured<Array<{ slug: string }>>({
    query: sectorsIndexQuery,
    tags: ['sector'],
  });
  return (list ?? []).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = await sanityFetchIfConfigured<SlugDoc>({
    query: sectorBySlugQuery,
    params: { slug },
    tags: ['sector', slug],
  });
  const label = doc?.title ?? 'Sector';
  return {
    title: label,
    ...buildPageMetadata({
      path: `/sectors/${slug}`,
      seo: doc?.seo,
      pageTitle: label,
    }),
  };
}

export default async function SectorPage({ params }: Props) {
  const { slug } = await params;
  const configured = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
  const doc = await sanityFetchIfConfigured<SlugDoc>({
    query: sectorBySlugQuery,
    params: { slug },
    tags: ['sector', slug],
  });

  if (configured && !doc) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-2xl font-medium tracking-tight">
        {doc?.title ?? 'Sector'}
      </h1>
      <p className="mt-4 text-sm text-neutral-500">{slug}</p>
    </main>
  );
}
