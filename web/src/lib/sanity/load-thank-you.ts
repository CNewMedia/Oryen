import { getBootstrapThankYouPage } from '@/lib/sanity/bootstrap/local-bootstrap';
import { getSanityClient } from '@/lib/sanity/client';
import { loadSiteSettings } from '@/lib/sanity/load-site-settings';
import { resolvePageSeo } from '@/lib/sanity/resolve-page-seo';
import type { ThankYouPageContent } from '@/types/cms-page';

function str(v: unknown, fallback: string): string {
  return typeof v === 'string' && v.trim() ? v : fallback;
}

const QUERY = `*[_type == "thankYouPage" && (locale == $locale || _id == $id)][0]`;

export async function loadThankYouPage(locale: string): Promise<ThankYouPageContent> {
  const settings = await loadSiteSettings(locale);
  const base = getBootstrapThankYouPage(locale);
  const client = getSanityClient();
  if (!client) return base;

  const id = `oryen.thankYou.${locale}`;
  const doc = (await client.fetch(QUERY, { locale, id })) as Record<
    string,
    unknown
  > | null;
  if (!doc) return base;

  const eyebrow = str(doc.eyebrow, base.eyebrow);
  const title = str(doc.title, base.title);
  const intro = str(doc.intro, base.intro);
  const supportingText = str(doc.supportingText, base.supportingText);
  const secondaryCtaLabel = str(doc.secondaryCtaLabel, base.secondaryCtaLabel);
  const secondaryCtaPath = str(doc.secondaryCtaPath, base.secondaryCtaPath);
  const primaryCtaLabel = str(doc.primaryCtaLabel, base.primaryCtaLabel);
  const primaryCtaPath = str(doc.primaryCtaPath, base.primaryCtaPath);
  // Form confirmation page — never indexable regardless of Sanity/global setting.
  const seo = { ...resolvePageSeo(doc.seo, settings, title, intro), robotsIndex: false };

  return {
    eyebrow,
    title,
    intro,
    supportingText,
    secondaryCtaLabel,
    secondaryCtaPath,
    primaryCtaLabel,
    primaryCtaPath,
    seo,
  };
}
