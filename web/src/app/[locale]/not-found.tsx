import { getTranslations } from 'next-intl/server';

import { Link } from '@/i18n/navigation';

export default async function NotFound() {
  const t = await getTranslations('Errors');

  return (
      <section className="min-h-[70vh] bg-[var(--cream)] px-[var(--P)] pb-24 pt-[120px]">
        <h1 className="stelling-hl mb-6">404</h1>
        <p className="stelling-p mb-10 max-w-prose">{t('notFound')}</p>
        <Link className="btn-primary" href="/">
          <span>{t('homeLink')}</span>
          <span className="btn-arrow" />
        </Link>
      </section>
  );
}
