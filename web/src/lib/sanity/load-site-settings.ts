import { getSanityClient } from '@/lib/sanity/client';
import { getBootstrapSiteSettings } from '@/lib/sanity/bootstrap/local-bootstrap';
import {
  allowBootstrapWithoutSanityClient,
  shouldStrictRequireSiteSettings,
} from '@/lib/sanity/bootstrap/sanity-mode';
import type { SiteSettingsResolved, TrackingSettings } from '@/types/site-settings';

type SanityDoc = Record<string, unknown>;

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function asString(v: unknown): string | null {
  return typeof v === 'string' && v.trim() ? v : null;
}

function normalizeTracking(raw: unknown): TrackingSettings {
  const t = isRecord(raw) ? raw : {};
  return {
    gtmEnabled: t.gtmEnabled === true,
    gtmContainerId: asString(t.gtmContainerId),
    ga4Enabled: t.ga4Enabled === true,
    ga4MeasurementId: asString(t.ga4MeasurementId),
    googleAdsEnabled: t.googleAdsEnabled === true,
    googleAdsConversionId: asString(t.googleAdsConversionId),
    googleAdsConversionLabel: asString(t.googleAdsConversionLabel),
    metaPixelEnabled: t.metaPixelEnabled === true,
    metaPixelId: asString(t.metaPixelId),
    linkedinEnabled: t.linkedinEnabled === true,
    linkedinPartnerId: asString(t.linkedinPartnerId),
    headScripts: asString(t.headScripts),
    bodyEndScripts: asString(t.bodyEndScripts),
  };
}

function normalizeSeo(
  seo: unknown,
  base: SiteSettingsResolved
): Pick<
  SiteSettingsResolved,
  | 'defaultMetaTitle'
  | 'defaultMetaDescription'
  | 'defaultOgTitle'
  | 'defaultOgDescription'
  | 'defaultRobotsIndex'
> {
  if (!isRecord(seo)) {
    return {
      defaultMetaTitle: base.defaultMetaTitle,
      defaultMetaDescription: base.defaultMetaDescription,
      defaultOgTitle: base.defaultOgTitle,
      defaultOgDescription: base.defaultOgDescription,
      defaultRobotsIndex: base.defaultRobotsIndex,
    };
  }
  const mt = asString(seo.metaTitle);
  const md = asString(seo.metaDescription);
  const ogT = asString(seo.ogTitle);
  const ogD = asString(seo.ogDescription);
  return {
    defaultMetaTitle: mt ?? base.defaultMetaTitle,
    defaultMetaDescription: md ?? base.defaultMetaDescription,
    defaultOgTitle: ogT ?? mt ?? base.defaultOgTitle,
    defaultOgDescription: ogD ?? md ?? base.defaultOgDescription,
    defaultRobotsIndex:
      typeof seo.robotsIndex === 'boolean' ? seo.robotsIndex : base.defaultRobotsIndex,
  };
}

const QUERY = `*[_type == "siteSettings" && locale == $locale][0]`;

export async function loadSiteSettings(
  locale: string
): Promise<SiteSettingsResolved> {
  const bootstrap = getBootstrapSiteSettings(locale);
  const client = getSanityClient();

  if (!client) {
    if (!allowBootstrapWithoutSanityClient()) {
      throw new Error(
        'ORYEN: NEXT_PUBLIC_SANITY_PROJECT_ID is required in this environment. ' +
          'For a temporary exception set ORYEN_ALLOW_OFFLINE_CMS=true (not for public production).'
      );
    }
    return bootstrap;
  }

  try {
    const doc = (await client.fetch(QUERY, { locale })) as SanityDoc | null;
    if (!doc) {
      if (shouldStrictRequireSiteSettings()) {
        throw new Error(
          `ORYEN: Missing siteSettings document for locale "${locale}". Run: npm run seed:cms (from web/) with SANITY_API_WRITE_TOKEN set.`
        );
      }
      console.warn(
        `[ORYEN] siteSettings missing for locale "${locale}"; using bootstrap shell until published.`
      );
      return bootstrap;
    }

    const seoMerged = normalizeSeo(doc.defaultSeo, bootstrap);

    const legalRaw = doc.legalLinks;
    const legalLinks = Array.isArray(legalRaw)
      ? legalRaw
          .map((row) => {
            if (!isRecord(row)) return null;
            const label = asString(row.label);
            const href = asString(row.href);
            if (!label || !href) return null;
            return { label, href };
          })
          .filter((x): x is { label: string; href: string } => x !== null)
      : bootstrap.legalLinks;

    const socialRaw = doc.socialLinks;
    const socialLinks = Array.isArray(socialRaw)
      ? socialRaw
          .map((row) => {
            if (!isRecord(row)) return null;
            const label = asString(row.label);
            const url = asString(row.url);
            if (!label || !url) return null;
            return { label, url };
          })
          .filter((x): x is { label: string; url: string } => x !== null)
      : bootstrap.socialLinks;

    return {
      ...bootstrap,
      ...seoMerged,
      siteTitle: asString(doc.siteTitle) ?? bootstrap.siteTitle,
      headerBrandWordmark:
        asString(doc.headerBrandWordmark) ?? bootstrap.headerBrandWordmark,
      headerTagline: asString(doc.headerTagline) ?? bootstrap.headerTagline,
      headerCtaLabel: asString(doc.headerCtaLabel) ?? bootstrap.headerCtaLabel,
      footerBrandShort: asString(doc.footerBrandShort) ?? bootstrap.footerBrandShort,
      footerTagline: asString(doc.footerTagline) ?? bootstrap.footerTagline,
      footerDomain: asString(doc.footerDomain) ?? bootstrap.footerDomain,
      contactEmail: asString(doc.contactEmail) ?? bootstrap.contactEmail,
      contactPhone: asString(doc.contactPhone) ?? bootstrap.contactPhone,
      legalLinks: legalLinks.length ? legalLinks : bootstrap.legalLinks,
      socialLinks: socialLinks.length ? socialLinks : bootstrap.socialLinks,
      tracking: normalizeTracking(doc.tracking),
    };
  } catch (e) {
    if (shouldStrictRequireSiteSettings()) throw e;
    console.warn('[ORYEN] siteSettings fetch failed; using bootstrap.', e);
    return bootstrap;
  }
}
