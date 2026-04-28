'use client';

import { useLocale } from 'next-intl';

import { usePathname } from '@/i18n/navigation';
import { getFooterLanguageUrls } from '@/i18n/language-switch';

export function FooterLanguageSwitch() {
  const pathname = usePathname();
  const locale = useLocale();
  const { nl, en } = getFooterLanguageUrls(pathname ?? '/');

  return (
    <nav className="footer-lang" aria-label="Language">
      <span className="footer-lang-inner">
        <a
          href={nl}
          hrefLang="nl"
          aria-current={locale === 'nl' ? 'true' : undefined}
        >
          NLD
        </a>
        <span className="footer-lang-sep" aria-hidden="true">
          {' '}
          /{' '}
        </span>
        <a
          href={en}
          hrefLang="en"
          aria-current={locale === 'en' ? 'true' : undefined}
        >
          ENG
        </a>
      </span>
    </nav>
  );
}
