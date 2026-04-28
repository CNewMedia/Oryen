import type { Metadata } from 'next';

import { TeamPageView } from '@/components/team/team-page-view';
import {
  alternatesForPath,
  documentTitleAbsolute,
  ogImagesForPage,
} from '@/lib/metadata/defaults';
import { getCachedSiteSettings } from '@/lib/sanity/cached-loaders';
import { getTeamContent } from '@/lib/team/content';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const [team, settings] = await Promise.all([
    Promise.resolve(getTeamContent(locale)),
    getCachedSiteSettings(locale),
  ]);
  const images = ogImagesForPage(undefined);
  return {
    title: documentTitleAbsolute(team.meta.title),
    description: team.meta.description,
    alternates: alternatesForPath(locale, '/team'),
    openGraph: {
      title: team.meta.title,
      description: team.meta.description,
      locale,
      type: 'website',
      siteName: settings.siteTitle,
      ...(images ? { images } : {}),
    },
  };
}

export default async function TeamPage({ params }: Props) {
  const { locale } = await params;
  const content = getTeamContent(locale);
  return <TeamPageView content={content} locale={locale} />;
}
