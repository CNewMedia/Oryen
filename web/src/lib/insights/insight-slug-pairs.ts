/** Cross-locale slug pairs for file-based insight articles (hreflang + sitemap). */
export const INSIGHT_SLUG_PAIRS = [
  {
    nl: 'waarom-marketing-sales-niet-rendeert',
    en: 'why-marketing-and-sales-dont-deliver',
  },
  {
    nl: 'marketingbureau-versus-strategische-doorlichting',
    en: 'marketing-agency-versus-strategic-diagnosis',
  },
] as const;

export function getInsightSlugPair(
  locale: string,
  slug: string
): { nl: string; en: string } | null {
  for (const pair of INSIGHT_SLUG_PAIRS) {
    if (locale === 'nl' && pair.nl === slug) return pair;
    if (locale === 'en' && pair.en === slug) return pair;
  }
  return null;
}
