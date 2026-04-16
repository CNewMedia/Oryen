import type { SiteSettingsResolved } from '@/types/site-settings';

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

export type ResolvedPageSeo = {
  title: string;
  description: string;
  ogTitle: string | null;
  ogDescription: string | null;
  robotsIndex: boolean;
};

export function resolvePageSeo(
  seo: unknown,
  settings: SiteSettingsResolved,
  fallbackTitle: string,
  fallbackDescription: string
): ResolvedPageSeo {
  if (!isRecord(seo)) {
    return {
      title: fallbackTitle || settings.defaultMetaTitle,
      description: fallbackDescription || settings.defaultMetaDescription,
      ogTitle: settings.defaultOgTitle ?? settings.defaultMetaTitle,
      ogDescription:
        settings.defaultOgDescription ?? settings.defaultMetaDescription,
      robotsIndex: settings.defaultRobotsIndex,
    };
  }
  const mt =
    typeof seo.metaTitle === 'string' && seo.metaTitle.trim()
      ? seo.metaTitle
      : fallbackTitle || settings.defaultMetaTitle;
  const md =
    typeof seo.metaDescription === 'string' && seo.metaDescription.trim()
      ? seo.metaDescription
      : fallbackDescription || settings.defaultMetaDescription;
  const ogT =
    typeof seo.ogTitle === 'string' && seo.ogTitle.trim() ? seo.ogTitle : mt;
  const ogD =
    typeof seo.ogDescription === 'string' && seo.ogDescription.trim()
      ? seo.ogDescription
      : md;
  return {
    title: mt,
    description: md,
    ogTitle: ogT,
    ogDescription: ogD,
    robotsIndex:
      typeof seo.robotsIndex === 'boolean' ? seo.robotsIndex : settings.defaultRobotsIndex,
  };
}
