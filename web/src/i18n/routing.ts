import { defineRouting } from 'next-intl/routing';

export const locales = ['nl', 'en'] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: 'nl',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/aanbod': { nl: '/aanbod', en: '/offer' },
    '/aanpak': { nl: '/aanpak', en: '/approach' },
    '/cases': '/cases',
    '/over-oryen': { nl: '/over-oryen', en: '/about' },
    '/contact': '/contact',
    '/reality-check': '/reality-check',
    '/bedankt': { nl: '/bedankt', en: '/thank-you' },
    '/privacy': '/privacy',
    '/cookies': '/cookies',
  },
});
