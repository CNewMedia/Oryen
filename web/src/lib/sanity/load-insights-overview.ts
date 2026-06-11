import { getBootstrapInsightsOverview } from '@/lib/sanity/bootstrap/local-bootstrap';
import { loadSiteSettings } from '@/lib/sanity/load-site-settings';
import { resolvePageSeo } from '@/lib/sanity/resolve-page-seo';
import type { OverviewHeaderContent } from '@/types/cms-page';
import type { ResolvedPageSeo } from '@/lib/sanity/resolve-page-seo';

export type InsightsOverviewData = {
  header: OverviewHeaderContent;
  seo: ResolvedPageSeo;
};

/** Insights hub intro — in-repo only (Sanity outage must not break the page). */
export async function loadInsightsOverview(
  locale: string
): Promise<InsightsOverviewData> {
  const settings = await loadSiteSettings(locale);
  const header = getBootstrapInsightsOverview(locale);
  return {
    header,
    seo: resolvePageSeo(null, settings, header.title, header.intro),
  };
}
