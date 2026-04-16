import { getBootstrapLegalPage } from '@/lib/sanity/bootstrap/local-bootstrap';
import { getSanityClient } from '@/lib/sanity/client';
import { loadSiteSettings } from '@/lib/sanity/load-site-settings';
import { resolvePageSeo } from '@/lib/sanity/resolve-page-seo';
import type { LegalPageContent } from '@/types/cms-page';

function str(v: unknown, fallback: string): string {
  return typeof v === 'string' && v.trim() ? v : fallback;
}

const QUERY = `*[_type == "legalPage" && locale == $locale && legalKey == $legalKey][0]`;

export async function loadLegalPage(
  locale: string,
  legalKey: 'privacy' | 'cookies'
): Promise<LegalPageContent> {
  const settings = await loadSiteSettings(locale);
  const base = getBootstrapLegalPage(locale, legalKey);
  const client = getSanityClient();
  if (!client) return base;

  const doc = (await client.fetch(QUERY, {
    locale,
    legalKey,
  } as Record<string, string>)) as Record<string, unknown> | null;
  if (!doc) return base;

  const eyebrow = str(doc.eyebrow, base.eyebrow);
  const title = str(doc.title, base.title);
  const body = Array.isArray(doc.body) ? (doc.body as unknown[]) : null;
  const seo = resolvePageSeo(
    doc.seo,
    settings,
    title,
    base.seo.description
  );

  return { eyebrow, title, body, seo };
}
