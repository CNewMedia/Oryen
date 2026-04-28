/** Resolved site settings — Sanity when configured, else dev defaults (no JSON merge in loaders). */

export type TrackingSettings = {
  gtmEnabled: boolean;
  gtmContainerId: string | null;
  ga4Enabled: boolean;
  ga4MeasurementId: string | null;
  googleAdsEnabled: boolean;
  googleAdsConversionId: string | null;
  googleAdsConversionLabel: string | null;
  metaPixelEnabled: boolean;
  metaPixelId: string | null;
  linkedinEnabled: boolean;
  linkedinPartnerId: string | null;
  headScripts: string | null;
  bodyEndScripts: string | null;
};

export type SiteSettingsResolved = {
  locale: string;
  siteTitle: string;
  defaultMetaTitle: string;
  defaultMetaDescription: string;
  defaultOgTitle: string | null;
  defaultOgDescription: string | null;
  defaultRobotsIndex: boolean;
  headerBrandWordmark: string;
  headerTagline: string;
  headerCtaLabel: string;
  footerBrandShort: string;
  footerTagline: string;
  footerDomain: string;
  contactEmail: string | null;
  contactPhone: string | null;
  contactAddress: string | null;
  legalLinks: { label: string; href: string }[];
  socialLinks: { label: string; url: string }[];
  tracking: TrackingSettings;
};
