import { cache } from 'react';

import { loadAanbod } from '@/lib/sanity/load-aanbod';
import { loadAanpak } from '@/lib/sanity/load-aanpak';
import { loadCaseStudyList } from '@/lib/sanity/load-case-studies';
import { loadCasesOverview } from '@/lib/sanity/load-cases-overview';
import { loadContactPage } from '@/lib/sanity/load-contact';
import { loadHomepage } from '@/lib/sanity/load-homepage';
import { loadInsightArticleList } from '@/lib/sanity/load-insights';
import { loadInsightsOverview } from '@/lib/sanity/load-insights-overview';
import { loadLegalPage } from '@/lib/sanity/load-legal';
import { loadOverOnsPage } from '@/lib/sanity/load-over-ons';
import { loadSiteSettings } from '@/lib/sanity/load-site-settings';
import { loadThankYouPage } from '@/lib/sanity/load-thank-you';

/** One fetch per request per locale (layout + metadata + page). */
export const getCachedSiteSettings = cache(loadSiteSettings);
export const getCachedHomepage = cache(loadHomepage);
export const getCachedAanbod = cache(loadAanbod);
export const getCachedAanpak = cache(loadAanpak);
export const getCachedContactPage = cache(loadContactPage);
export const getCachedThankYouPage = cache(loadThankYouPage);
export const getCachedLegalPage = cache(
  (locale: string, legalKey: 'privacy' | 'cookies') =>
    loadLegalPage(locale, legalKey)
);
export const getCachedInsightsOverview = cache(loadInsightsOverview);
export const getCachedCasesOverview = cache(loadCasesOverview);
export const getCachedInsightArticleList = cache(loadInsightArticleList);
export const getCachedCaseStudyList = cache(loadCaseStudyList);
export const getCachedOverOnsPage = cache(loadOverOnsPage);
