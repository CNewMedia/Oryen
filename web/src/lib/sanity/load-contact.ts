import { getBootstrapContactPage } from '@/lib/sanity/bootstrap/local-bootstrap';
import { getSanityClient } from '@/lib/sanity/client';
import { loadSiteSettings } from '@/lib/sanity/load-site-settings';
import { resolvePageSeo } from '@/lib/sanity/resolve-page-seo';
import type { ContactPageContent } from '@/types/cms-page';

function str(v: unknown, fallback: string): string {
  return typeof v === 'string' && v.trim() ? v : fallback;
}

const QUERY = `*[_type == "contactPage" && locale == $locale][0]`;

export async function loadContactPage(locale: string): Promise<ContactPageContent> {
  const settings = await loadSiteSettings(locale);
  const base = getBootstrapContactPage(locale);
  const client = getSanityClient();
  if (!client) return base;

  const doc = (await client.fetch(QUERY, { locale })) as Record<
    string,
    unknown
  > | null;
  if (!doc) return base;

  const eyebrow = str(doc.eyebrow, base.eyebrow);
  const title = str(doc.title, base.title);
  const intro = str(doc.intro, base.intro);
  const seo = resolvePageSeo(doc.seo, settings, title, intro);

  return { eyebrow, title, intro, seo };
}
