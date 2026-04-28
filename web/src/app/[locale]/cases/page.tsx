import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { CaseStudyList } from '@/components/cases/case-study-list';
import { InnerPage } from '@/components/ui/inner-page';
import {
  alternatesForPath,
  documentTitleAbsolute,
  ogImagesForPage,
} from '@/lib/metadata/defaults';
import {
  getCachedCaseStudyList,
  getCachedCasesOverview,
  getCachedSiteSettings,
} from '@/lib/sanity/cached-loaders';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const [{ seo }, settings] = await Promise.all([
    getCachedCasesOverview(locale),
    getCachedSiteSettings(locale),
  ]);
  const images = ogImagesForPage(undefined);
  return {
    title: documentTitleAbsolute(seo.title),
    description: seo.description,
    robots: seo.robotsIndex ? undefined : { index: false, follow: false },
    alternates: alternatesForPath(locale, '/cases'),
    openGraph: {
      title: seo.ogTitle ?? seo.title,
      description: seo.ogDescription ?? seo.description,
      locale,
      type: 'website',
      siteName: settings.siteTitle,
      ...(images ? { images } : {}),
    },
  };
}

export default async function CasesPage({ params }: Props) {
  const { locale } = await params;
  const [{ header }, cases, t] = await Promise.all([
    getCachedCasesOverview(locale),
    getCachedCaseStudyList(locale),
    getTranslations({ locale, namespace: 'Cases' }),
  ]);

  return (
    <InnerPage eyebrow={header.eyebrow} title={header.title} intro={header.intro}>
      <CaseStudyList cases={cases} emptyLabel={t('empty')} />
    </InnerPage>
  );
}
