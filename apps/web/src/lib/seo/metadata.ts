import type { Metadata } from 'next';

import type { SeoFields, SiteSettings } from '@/lib/sanity/types';

const defaultSiteName = 'ORYEN';

export function siteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  return url.replace(/\/$/, '');
}

type BuildMetadataInput = {
  path?: string;
  seo?: SeoFields | null;
  site?: Pick<SiteSettings, 'title' | 'defaultSeo' | 'ogImageUrl'> | null;
  /** Visible + OG title when no `seo.metaTitle` */
  pageTitle: string;
};

/**
 * Canonical URL, description, Open Graph, Twitter. Does not set `metadata.title`
 * so the root layout can own `{ default, template }` and leaf routes can pass a string `title`.
 */
export function buildPageMetadata({
  path = '/',
  seo,
  site,
  pageTitle,
}: BuildMetadataInput): Omit<Metadata, 'title'> {
  const base = siteUrl();
  const url = new URL(path.startsWith('/') ? path : `/${path}`, base).toString();

  const metaTitle = seo?.metaTitle ?? site?.defaultSeo?.metaTitle;
  const metaDescription =
    seo?.metaDescription ?? site?.defaultSeo?.metaDescription;
  const ogTitle = metaTitle ?? pageTitle;

  const images =
    site?.ogImageUrl != null
      ? [{ url: site.ogImageUrl }]
      : seo?.ogImage?.asset
        ? []
        : undefined;

  return {
    metadataBase: new URL(base),
    description: metaDescription ?? undefined,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: ogTitle,
      description: metaDescription ?? undefined,
      type: 'website',
      ...(images && images.length ? { images } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: metaDescription ?? undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function rootTitleMetadata(
  site: Pick<SiteSettings, 'title'> | null
): Pick<Metadata, 'title'> {
  return {
    title: {
      default: site?.title ?? defaultSiteName,
      template: `%s · ${defaultSiteName}`,
    },
  };
}
