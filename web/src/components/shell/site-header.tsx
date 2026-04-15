'use client';

import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

/** Teksten: `messages/<locale>.json` → `Global.header` + `Nav` */
export function SiteHeader() {
  const tNav = useTranslations('Nav');
  const g = useTranslations('Global');

  return (
    <nav className="nav" id="mainNav">
      <Link className="nav-logo" href="/">
        <span className="nav-logo-name">{g('header.brandWordmark')}</span>
        <span className="nav-logo-line" />
        <span className="nav-logo-sub">{g('header.tagline')}</span>
      </Link>
      <Link className="nav-cta" href="/contact">
        {tNav('cta')}
      </Link>
    </nav>
  );
}
