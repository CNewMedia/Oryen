import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { Link } from '@/i18n/navigation';

import { InnerPage } from '@/components/ui/inner-page';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Pages' });
  return {
    title: `${t('thankYou.title')} | ORYEN`,
    description: t('thankYou.intro'),
  };
}

export default async function ThankYouPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations('Pages');

  return (
      <InnerPage
        eyebrow={t('thankYou.eyebrow')}
        title={t('thankYou.title')}
        intro={t('thankYou.intro')}
      >
        <p className="stelling-p mb-8 max-w-prose">
          {locale === 'nl'
            ? 'We lezen elk bericht zelf. Geen automatisering — wel oprechte opvolging.'
            : 'We read every message ourselves. No automation — genuine follow-up.'}
        </p>
        <div className="flex flex-wrap gap-6">
          <Link className="btn-ghost !text-[var(--ink3)]" href="/cases">
            {locale === 'nl' ? 'Naar cases' : 'View cases'}
          </Link>
          <Link className="btn-primary !text-[var(--ink)]" href="/">
            <span>{locale === 'nl' ? 'Naar home' : 'Home'}</span>
            <span className="btn-arrow" />
          </Link>
        </div>
      </InnerPage>
  );
}
