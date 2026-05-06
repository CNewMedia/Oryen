'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import {
  COOKIE_CONSENT_CHANGED_EVENT,
  readCookieConsent,
  writeCookieConsent,
} from '@/lib/consent/cookie-consent';

export function CookieBanner() {
  const t = useTranslations('CookieBanner');
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sync = () => {
      const stored = readCookieConsent();
      setVisible(stored === null);
      setReady(true);
    };
    sync();
    window.addEventListener(COOKIE_CONSENT_CHANGED_EVENT, sync);
    return () => window.removeEventListener(COOKIE_CONSENT_CHANGED_EVENT, sync);
  }, []);

  if (!ready || !visible) return null;

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-label={t('ariaTitle')}
    >
      <div className="cookie-banner-inner">
        <div className="cookie-banner-text">
          <p className="cookie-banner-body">{t('body')}</p>
        </div>
        <div className="cookie-banner-aside">
          <div className="cookie-banner-buttons">
            <button
              type="button"
              className="cookie-banner-btn cookie-banner-btn-primary"
              onClick={() => {
                writeCookieConsent('accepted');
                setVisible(false);
              }}
            >
              {t('accept')}
            </button>
            <button
              type="button"
              className="cookie-banner-btn cookie-banner-btn-secondary"
              onClick={() => {
                writeCookieConsent('declined');
                setVisible(false);
              }}
            >
              {t('decline')}
            </button>
          </div>
          <Link href="/cookies" className="cookie-banner-policy">
            {t('policyLink')}
          </Link>
        </div>
      </div>
    </div>
  );
}
