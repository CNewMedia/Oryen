'use client';

import { useTranslations } from 'next-intl';

import { clearCookieConsent } from '@/lib/consent/cookie-consent';

export function FooterCookiePreferences() {
  const t = useTranslations('CookieBanner');

  return (
    <p className="footer-cookie-pref">
      <button
        type="button"
        className="footer-cookie-pref-btn"
        onClick={() => {
          clearCookieConsent();
        }}
      >
        {t('footerPreferences')}
      </button>
    </p>
  );
}
