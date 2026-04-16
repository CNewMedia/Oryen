/**
 * Offline / no-project-id bootstrap copy for ORYEN pages.
 * Source: `content/oryen-*.json` (extracted from legacy messages; not imported from `messages/` at runtime).
 * Remove this module once all environments use Sanity + seed only.
 */
import type { AanbodContent } from '@/types/aanbod';
import type {
  ContactPageContent,
  LegalPageContent,
  OverviewHeaderContent,
  ThankYouPageContent,
} from '@/types/cms-page';
import type { HomeContent } from '@/types/home-content';
import type { SiteSettingsResolved } from '@/types/site-settings';

import oryEn from './content/oryen-en.json';
import oryNl from './content/oryen-nl.json';

type Ory = typeof oryNl;

function pickOry(locale: string): Ory {
  return locale === 'en' ? (oryEn as unknown as Ory) : oryNl;
}

export function getBootstrapHomeContent(locale: string): HomeContent {
  return pickOry(locale).Home as unknown as HomeContent;
}

export function getBootstrapAanbodContent(locale: string): AanbodContent {
  const m = pickOry(locale);
  return {
    meta: m.Aanbod.meta,
    hero: m.Aanbod.hero,
    offerClarity: m.Aanbod.offerClarity,
    whatYouGet: m.Aanbod.whatYouGet,
    howItWorks: m.Aanbod.howItWorks,
    pricing: m.Aanbod.pricing,
    reassurance: m.Aanbod.reassurance,
    closing: m.Aanbod.closing,
  } as AanbodContent;
}

export function getBootstrapSiteSettings(locale: string): SiteSettingsResolved {
  const m = pickOry(locale);
  return {
    locale,
    siteTitle: m.Meta.siteName,
    defaultMetaTitle: m.Meta.siteName,
    defaultMetaDescription: m.Meta.defaultDescription,
    defaultOgTitle: null,
    defaultOgDescription: null,
    defaultRobotsIndex: true,
    headerBrandWordmark: m.Global.header.brandWordmark,
    headerTagline: m.Global.header.tagline,
    headerCtaLabel: m.Nav.cta,
    footerBrandShort: m.Global.footer.brandShort,
    footerTagline: m.Global.footer.tagline,
    footerDomain: m.Global.footer.domain,
    contactEmail: 'hello@oryen.be',
    contactPhone: null,
    legalLinks: [],
    socialLinks: [],
    tracking: {
      gtmEnabled: false,
      gtmContainerId: null,
      ga4Enabled: false,
      ga4MeasurementId: null,
      googleAdsEnabled: false,
      googleAdsConversionId: null,
      googleAdsConversionLabel: null,
      metaPixelEnabled: false,
      metaPixelId: null,
      linkedinEnabled: false,
      linkedinPartnerId: null,
      headScripts: null,
      bodyEndScripts: null,
    },
  };
}

export function getBootstrapContactPage(locale: string): ContactPageContent {
  const m = pickOry(locale);
  const p = m.Pages.contact;
  const title = `${p.title} | ${m.Meta.siteName}`;
  return {
    eyebrow: p.eyebrow,
    title: p.title,
    intro: p.intro,
    seo: {
      title,
      description: p.intro,
      ogTitle: title,
      ogDescription: p.intro,
      robotsIndex: true,
    },
  };
}

export function getBootstrapThankYouPage(locale: string): ThankYouPageContent {
  const m = pickOry(locale);
  const p = m.Pages.thankYou;
  const supportingNl =
    'We lezen elk bericht zelf. Geen automatisering — wel oprechte opvolging.';
  const supportingEn =
    'We read every message ourselves. No automation — genuine follow-up.';
  const title = `${p.title} | ${m.Meta.siteName}`;
  return {
    eyebrow: p.eyebrow,
    title: p.title,
    intro: p.intro,
    supportingText: locale === 'nl' ? supportingNl : supportingEn,
    secondaryCtaLabel: locale === 'nl' ? 'Naar cases' : 'View cases',
    secondaryCtaPath: '/cases',
    primaryCtaLabel: locale === 'nl' ? 'Naar home' : 'Home',
    primaryCtaPath: '/',
    seo: {
      title,
      description: p.intro,
      ogTitle: title,
      ogDescription: p.intro,
      robotsIndex: true,
    },
  };
}

export function getBootstrapLegalPage(
  locale: string,
  key: 'privacy' | 'cookies'
): LegalPageContent {
  const m = pickOry(locale);
  const p = m.Pages[key];
  const title = `${p.title} | ${m.Meta.siteName}`;
  const placeholder =
    locale === 'nl'
      ? 'Definitieve juridische tekst volgt in Sanity.'
      : 'Final legal copy will be managed in Sanity.';
  return {
    eyebrow: p.eyebrow,
    title: p.title,
    body: null,
    seo: {
      title,
      description: placeholder,
      ogTitle: title,
      ogDescription: placeholder,
      robotsIndex: true,
    },
  };
}

export function getBootstrapInsightsOverview(locale: string): OverviewHeaderContent {
  const p = pickOry(locale).Pages.insights;
  return {
    eyebrow: p.eyebrow,
    title: p.title,
    intro: p.intro,
  };
}

export function getBootstrapCasesOverview(locale: string): OverviewHeaderContent {
  const p = pickOry(locale).Pages.cases;
  return {
    eyebrow: p.eyebrow,
    title: p.title,
    intro: p.intro,
  };
}
