import {
  getFileInsightArticleListItems,
} from '@/lib/insights/articles';
import { loadInsightArticleList } from '@/lib/sanity/load-insights';
import type { InsightListItem } from '@/types/insight';

/** File-based articles first (newest), then Sanity — file slug wins on collision. */
export async function loadMergedInsightArticleList(
  locale: string
): Promise<InsightListItem[]> {
  const fileItems = getFileInsightArticleListItems(locale);
  const fileSlugs = new Set(fileItems.map((a) => a.slug));
  const sanityItems = await loadInsightArticleList(locale);
  const sanityFiltered = sanityItems.filter((a) => a.slug && !fileSlugs.has(a.slug));
  return [...fileItems, ...sanityFiltered];
}
