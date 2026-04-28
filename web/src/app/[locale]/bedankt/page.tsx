import type { Metadata } from 'next';

import { Link } from '@/i18n/navigation';

import { InnerPage } from '@/components/ui/inner-page';
import {
  alternatesForPath,
  documentTitleAbsolute,
  ogImagesForPage,
} from '@/lib/metadata/defaults';
import {
  getCachedSiteSettings,
  getCachedThankYouPage,
} from '@/lib/sanity/cached-loaders';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const [{ seo }, settings] = await Promise.all([
    getCachedThankYouPage(locale),
    getCachedSiteSettings(locale),
  ]);
  const images = ogImagesForPage(undefined);
  return {
    title: documentTitleAbsolute(seo.title),
    description: seo.description,
    robots: seo.robotsIndex ? undefined : { index: false, follow: false },
    alternates: alternatesForPath(locale, '/bedankt'),
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

export default async function ThankYouPage({ params }: Props) {
  const { locale } = await params;
  const p = await getCachedThankYouPage(locale);

  return (
    <InnerPage eyebrow={p.eyebrow} title={p.title} intro={p.intro}>
      <p className="stelling-p mb-8 max-w-prose">{p.supportingText}</p>
      <div className="flex flex-wrap gap-6">
        <Link
          className="btn-ghost !text-[var(--ink3)]"
          href={p.secondaryCtaPath as never}
        >
          {p.secondaryCtaLabel}
        </Link>
        <Link
          className="btn-primary !text-[var(--ink)]"
          href={p.primaryCtaPath as never}
        >
          <span>{p.primaryCtaLabel}</span>
          <span className="btn-arrow" />
        </Link>
      </div>
    </InnerPage>
  );
}
