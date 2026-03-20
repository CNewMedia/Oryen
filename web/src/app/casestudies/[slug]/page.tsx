import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PageSection } from '@/components/sections/page-section';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { caseStudyBySlugQuery, caseStudyIndexQuery } from '@/lib/sanity/queries';
import { sanityFetchIfConfigured } from '@/lib/sanity/fetch';
import type { SlugDoc } from '@/lib/sanity/types';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const list = await sanityFetchIfConfigured<Array<{ slug: string }>>({
    query: caseStudyIndexQuery,
    tags: ['caseStudy'],
  });
  return (list ?? []).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = await sanityFetchIfConfigured<SlugDoc>({
    query: caseStudyBySlugQuery,
    params: { slug },
    tags: ['caseStudy', slug],
  });
  const label = doc?.title ?? 'Casestudy';
  return {
    title: label,
    ...buildPageMetadata({
      path: `/casestudies/${slug}`,
      seo: doc?.seo,
      pageTitle: label,
    }),
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const configured = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
  const doc = await sanityFetchIfConfigured<SlugDoc>({
    query: caseStudyBySlugQuery,
    params: { slug },
    tags: ['caseStudy', slug],
  });

  if (configured && !doc) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <PageSection>
        <h1 className="text-2xl font-medium tracking-tight">
          {doc?.title ?? 'Casestudy'}
        </h1>
      </PageSection>
    </main>
  );
}
