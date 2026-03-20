/** Narrow shapes for GROQ results; extend as schemas evolve. */
export type SeoFields = {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: { asset?: { _ref?: string } };
};

export type SiteSettings = {
  _id: string;
  title?: string;
  defaultSeo?: SeoFields;
  ogImageUrl?: string | null;
};

export type NavItem = {
  label?: string;
  href?: string;
  children?: NavItem[];
};

export type NavigationDoc = {
  _id: string;
  items?: NavItem[];
};

export type SlugDoc = {
  _id: string;
  title?: string;
  slug?: { current?: string };
  seo?: SeoFields;
  publishedAt?: string;
  /** Portable Text — typed precisely when PT schema stabilizes */
  body?: unknown;
};
