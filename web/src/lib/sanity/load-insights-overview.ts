import { getBootstrapInsightsOverview } from '@/lib/sanity/bootstrap/local-bootstrap';
import { getSanityClient } from '@/lib/sanity/client';
import { loadSiteSettings } from '@/lib/sanity/load-site-settings';
import { resolvePageSeo } from '@/lib/sanity/resolve-page-seo';
import type { OverviewHeaderContent } from '@/types/cms-page';
import type { ResolvedPageSeo } from '@/lib/sanity/resolve-page-seo';

function str(v: unknown, fallback: string): string {
  return typeof v === 'string' && v.trim() ? v : fallback;
}

const QUERY = `*[_type == "insightsOverviewPage" && (locale == $locale || _id == $id)][0]`;

export type InsightsOverviewData = {
  header: OverviewHeaderContent;
  seo: ResolvedPageSeo;
};

export async function loadInsightsOverview(
  locale: string
): Promise<InsightsOverviewData> {
  const settings = await loadSiteSettings(locale);
  const base = getBootstrapInsightsOverview(locale);
  const client = getSanityClient();
  if (!client) {
    return {
      header: base,
      seo: resolvePageSeo(null, settings, base.title, base.intro),
    };
  }

  const id = `oryen.insightsOverview.${locale}`;
  const doc = (await client.fetch(QUERY, { locale, id })) as Record<
    string,
    unknown
  > | null;
  if (!doc) {
    return {
      header: base,
      seo: resolvePageSeo(null, settings, base.title, base.intro),
    };
  }

  const header: OverviewHeaderContent = {
    eyebrow: str(doc.eyebrow, base.eyebrow),
    title: str(doc.title, base.title),
    intro: str(doc.intro, base.intro),
  };
  const seo = resolvePageSeo(doc.seo, settings, header.title, header.intro);

  return { header, seo };
}
