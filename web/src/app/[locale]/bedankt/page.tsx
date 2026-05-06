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

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ error?: string | string[] }>;
};

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

function errorMessage(locale: string, kind: 'send_failed' | 'rate_limited'): {
  title: string;
  body: string;
  cta: string;
} {
  const en = locale === 'en';
  if (kind === 'rate_limited') {
    return {
      title: en ? 'Too many requests' : 'Te veel aanvragen',
      body: en
        ? 'You have submitted several messages in a short time. Please try again in an hour.'
        : 'U heeft kort na elkaar meerdere berichten verstuurd. Probeer het binnen een uur opnieuw.',
      cta: en ? 'Back to contact' : 'Terug naar contact',
    };
  }
  return {
    title: en ? 'Could not send your message' : 'Bericht niet verstuurd',
    body: en
      ? 'Something went wrong while sending. Please try again in a moment or email info@oryen.be directly.'
      : 'Er ging iets mis bij het versturen. Probeer het zo opnieuw of mail rechtstreeks naar info@oryen.be.',
    cta: en ? 'Try again' : 'Opnieuw proberen',
  };
}

export default async function ThankYouPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const sp = await searchParams;
  const errRaw = sp?.error;
  const errorKey = typeof errRaw === 'string' ? errRaw : Array.isArray(errRaw) ? errRaw[0] : undefined;
  const errorKind =
    errorKey === 'send_failed' || errorKey === 'rate_limited' ? errorKey : undefined;

  const p = await getCachedThankYouPage(locale);
  const err = errorKind ? errorMessage(locale, errorKind) : null;

  return (
    <InnerPage eyebrow={p.eyebrow} title={err ? err.title : p.title} intro={err ? err.body : p.intro}>
      {err ? (
        <div className="mt-2 flex flex-wrap gap-6">
          <Link className="btn-primary !text-[var(--ink)]" href="/contact">
            <span>{err.cta}</span>
            <span className="btn-arrow" />
          </Link>
        </div>
      ) : (
        <>
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
        </>
      )}
    </InnerPage>
  );
}
