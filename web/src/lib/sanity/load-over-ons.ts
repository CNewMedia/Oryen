import { getBootstrapOverOnsPage } from '@/lib/sanity/bootstrap/local-bootstrap';
import { getSanityClient } from '@/lib/sanity/client';
import { loadSiteSettings } from '@/lib/sanity/load-site-settings';
import { resolvePageSeo } from '@/lib/sanity/resolve-page-seo';
import type { OverOnsPageContent } from '@/types/cms-page';

function str(v: unknown, fallback: string): string {
  return typeof v === 'string' && v.trim() ? v : fallback;
}

/** Matches seed singleton ids `oryen.overOns.nl` / `oryen.overOns.en`. */
const QUERY = `*[_type == "overOnsPage" && (locale == $locale || _id == $id)][0]`;

export async function loadOverOnsPage(locale: string): Promise<OverOnsPageContent> {
  const settings = await loadSiteSettings(locale);
  const base = getBootstrapOverOnsPage(locale);
  const client = getSanityClient();
  if (!client) return base;

  const id = `oryen.overOns.${locale}`;
  const doc = (await client.fetch(QUERY, { locale, id })) as Record<
    string,
    unknown
  > | null;
  if (!doc) return base;

  const eyebrow = str(doc.eyebrow, base.eyebrow);
  const title = str(doc.title, base.title);
  const intro = str(doc.intro, base.intro);
  const body = Array.isArray(doc.body) ? (doc.body as unknown[]) : null;
  const seo = resolvePageSeo(doc.seo, settings, title, intro);

  return { eyebrow, title, intro, body, seo };
}
