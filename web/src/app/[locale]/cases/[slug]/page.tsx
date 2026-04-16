import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { CaseStudyDetailView } from '@/components/cases/case-study-detail';
import { InnerPage } from '@/components/ui/inner-page';
import { requireCaseStudyBySlug } from '@/lib/sanity/load-case-studies';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const data = await requireCaseStudyBySlug(locale, slug);
  const { seo } = data;
  return {
    title: seo.title,
    description: seo.description,
    robots: seo.robotsIndex ? undefined : { index: false, follow: false },
    openGraph: {
      title: seo.ogTitle ?? seo.title,
      description: seo.ogDescription ?? seo.description,
      locale,
      type: 'article',
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
