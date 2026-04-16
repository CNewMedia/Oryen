import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { SanityRichText } from '@/components/sanity/sanity-rich-text';
import { InnerPage } from '@/components/ui/inner-page';
import { getCachedLegalPage } from '@/lib/sanity/cached-loaders';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const { seo } = await getCachedLegalPage(locale, 'privacy');
  return {
    title: seo.title,
    description: seo.description,
    robots: seo.robotsIndex ? undefined : { index: false, follow: false },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const page = await getCachedLegalPage(locale, 'privacy');
  const t = await getTranslations({ locale, namespace: 'Pages' });

  return (
    <InnerPage eyebrow={page.eyebrow} title={page.title}>
      {page.body && page.body.length > 0 ? (
        <SanityRichText value={page.body} />
      ) : (
        <p className="stelling-p max-w-prose text-[var(--ink2)]">
          {t('privacy.intro')}
        </p>
      )}
    </InnerPage>
  );
}
