import { getSanityClient } from '@/lib/sanity/client';
import { getBootstrapSiteSettings } from '@/lib/sanity/bootstrap/local-bootstrap';
import { allowBootstrapWithoutSanityClient } from '@/lib/sanity/bootstrap/sanity-mode';
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

/** Matches `web/scripts/seed-cms.ts` ids (`oryen.siteSettings.nl` / `oryen.siteSettings.en`). */
const QUERY = `*[_type == "siteSettings" && (locale == $locale || _id == $id)][0]`;

export async function loadSiteSettings(
  locale: string
): Promise<SiteSettingsResolved> {
  const bootstrap = getBootstrapSiteSettings(locale);
  const client = getSanityClient();

  if (!client) {
    if (!allowBootstrapWithoutSanityClient()) {
      console.error(
        '[ORYEN] NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Serving bootstrap site settings. ' +
          'Add NEXT_PUBLIC_SANITY_PROJECT_ID (and optional SANITY_API_READ_TOKEN for private datasets) in Vercel, or set ORYEN_ALLOW_OFFLINE_CMS=true for local production testing.'
      );
    }
    return bootstrap;
  }

  const id = `oryen.siteSettings.${locale}`;

  try {
    const doc = (await client.fetch(QUERY, { locale, id })) as SanityDoc | null;
    if (!doc) {
      console.warn(
        `[ORYEN] siteSettings missing for locale "${locale}" (expected id ${id} or locale match); using bootstrap shell. Run: npm run seed:cms (from web/) with SANITY_API_WRITE_TOKEN set.`
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
      contactAddress: asString(doc.contactAddress) ?? bootstrap.contactAddress,
      legalLinks: legalLinks.length ? legalLinks : bootstrap.legalLinks,
      socialLinks: socialLinks.length ? socialLinks : bootstrap.socialLinks,
      tracking: normalizeTracking(doc.tracking),
    };
  } catch (e) {
    console.warn('[ORYEN] siteSettings fetch failed; using bootstrap.', e);
    return bootstrap;
  }
}
