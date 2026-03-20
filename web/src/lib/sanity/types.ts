/** Narrow shapes for GROQ results; extend as schemas evolve. */
export type SeoFields = {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: { asset?: { _ref?: string } };
};

export type SiteSettings = {
  _id: string;
  siteTitle?: string;
  defaultSeo?: SeoFields;
  ogImageUrl?: string | null;
};

export type SlugDoc = {
  _id: string;
  title?: string;
  slug?: { current?: string };
  seo?: SeoFields;
  publishedAt?: string;
  body?: unknown;
};
