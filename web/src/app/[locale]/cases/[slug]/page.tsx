import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { CaseStudyDetailView } from '@/components/cases/case-study-detail';
import { InnerPage } from '@/components/ui/inner-page';
import {
  alternatesCaseDetail,
  documentTitleAbsolute,
  ogImagesForPage,
} from '@/lib/metadata/defaults';
import { getCachedSiteSettings } from '@/lib/sanity/cached-loaders';
import { requireCaseStudyBySlug } from '@/lib/sanity/load-case-studies';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const [data, settings] = await Promise.all([
    requireCaseStudyBySlug(locale, slug),
    getCachedSiteSettings(locale),
  ]);
  const { seo } = data;
  const images = ogImagesForPage(data.heroImageUrl);
  return {
    title: documentTitleAbsolute(seo.title),
    description: seo.description,
    robots: seo.robotsIndex ? undefined : { index: false, follow: false },
    alternates: alternatesCaseDetail(locale, slug),
    openGraph: {
      title: seo.ogTitle ?? seo.title,
      description: seo.ogDescription ?? seo.description,
      locale,
      type: 'article',
      siteName: settings.siteTitle,
      ...(images ? { images } : {}),
    },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const [data, t] = await Promise.all([
    requireCaseStudyBySlug(locale, slug),
    getTranslations({ locale, namespace: 'Cases' }),
  ]);

  return (
    <InnerPage eyebrow={t('detailEyebrow')} title={data.title}>
      <CaseStudyDetailView data={data} locale={locale} />
    </InnerPage>
  );
}
