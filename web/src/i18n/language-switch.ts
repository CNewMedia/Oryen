import {
  getLocalizedPathname,
  localizedPathnames,
  type PathnameHref,
} from '@/i18n/routing';

/** Path from `usePathname()` (no locale prefix), normalized. */
function normalizePath(pathname: string): string {
  let p = pathname.trim();
  if (!p || p === '/') return '/';
  if (!p.startsWith('/')) p = `/${p}`;
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  return p;
}

export function pathnameToStaticHref(pathname: string): PathnameHref | null {
  const p = normalizePath(pathname);
  if (p === '/') return '/';

  for (const [key, def] of Object.entries(localizedPathnames)) {
    const href = key as PathnameHref;
    if (typeof def === 'string') {
      if (def === p) return href;
    } else {
      if (def.nl === p || def.en === p) return href;
    }
  }
  return null;
}

function buildLocalizedUrl(locale: 'nl' | 'en', href: PathnameHref): string {
  const seg = getLocalizedPathname(locale, href);
  return seg === '/' ? `/${locale}` : `/${locale}${seg}`;
}

/**
 * Absolute paths for NL and EN — same logical page when possible; unknown routes
 * fall back to each locale’s homepage (see static route map + dynamic patterns).
 */
export function getFooterLanguageUrls(pathnameWithoutLocale: string): {
  nl: string;
  en: string;
} {
  const p = normalizePath(pathnameWithoutLocale);

  const caseDetail = p.match(/^\/cases\/([^/]+)$/);
  if (caseDetail) {
    const slug = encodeURIComponent(decodeURIComponent(caseDetail[1]));
    return {
      nl: `/nl/cases/${slug}`,
      en: `/en/cases/${slug}`,
    };
  }

  const tagNl = p.match(/^\/inzichten\/tag\/([^/]+)$/);
  const tagEn = p.match(/^\/insights\/tag\/([^/]+)$/);
  const tagSeg = tagNl?.[1] ?? tagEn?.[1];
  if (tagSeg !== undefined) {
    const tag = encodeURIComponent(decodeURIComponent(tagSeg));
    return {
      nl: `/nl/inzichten/tag/${tag}`,
      en: `/en/insights/tag/${tag}`,
    };
  }

  const artNl = p.match(/^\/inzichten\/([^/]+)$/);
  if (artNl && artNl[1] !== 'tag') {
    const slug = encodeURIComponent(decodeURIComponent(artNl[1]));
    return {
      nl: `/nl/inzichten/${slug}`,
      en: `/en/insights/${slug}`,
    };
  }

  const artEn = p.match(/^\/insights\/([^/]+)$/);
  if (artEn && artEn[1] !== 'tag') {
    const slug = encodeURIComponent(decodeURIComponent(artEn[1]));
    return {
      nl: `/nl/inzichten/${slug}`,
      en: `/en/insights/${slug}`,
    };
  }

  const staticHref = pathnameToStaticHref(p);
  if (staticHref) {
    return {
      nl: buildLocalizedUrl('nl', staticHref),
      en: buildLocalizedUrl('en', staticHref),
    };
  }

  return { nl: '/nl', en: '/en' };
}
