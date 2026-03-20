/**
 * Canonical pathnames — keep in sync with `app/` routes and `sitemap.ts`.
 */
export const routes = {
  home: '/',
  realityCheck: '/reality-check',
  aanbod: '/aanbod',
  casestudies: '/casestudies',
  overOns: '/over-ons',
  contact: '/contact',
  insights: '/insights',
} as const;

export function casestudyPath(slug: string) {
  return `${routes.casestudies}/${slug}` as const;
}

export function insightPath(slug: string) {
  return `${routes.insights}/${slug}` as const;
}
