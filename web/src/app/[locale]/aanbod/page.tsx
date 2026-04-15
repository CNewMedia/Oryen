import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { AanbodPageView } from '@/components/aanbod/aanbod-page-view';
import { loadAanbodFromSanity } from '@/lib/sanity/load-aanbod';
import type { AanbodContent } from '@/types/aanbod';

type Props = { params: Promise<{ locale: string }> };

async function getBaseAanbod(locale: string): Promise<AanbodContent> {
  const t = await getTranslations({ locale, namespace: 'Aanbod' });
  return {
    meta: t.raw('meta'),
    hero: t.raw('hero'),
    whatItIs: t.raw('whatItIs'),
    whatYouGet: t.raw('whatYouGet'),
    forWho: t.raw('forWho'),
    howItWorks: t.raw('howItWorks'),
    pricing: t.raw('pricing'),
    reassurance: t.raw('reassurance'),
    closing: t.raw('closing'),
  } as AanbodContent;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const base = await getBaseAanbod(locale);
  const content = await loadAanbodFromSanity(locale, base);
  return {
    title: content.meta.title,
    description: content.meta.description,
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      locale,
      type: 'website',
    },
  };
}

export default async function AanbodPage({ params }: Props) {
  const { locale } = await params;
  const base = await getBaseAanbod(locale);
  const content = await loadAanbodFromSanity(locale, base);

  return <AanbodPageView content={content} />;
}
