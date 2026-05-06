/** GDPR cookie consent for Leadinfo; persisted in localStorage. */
export const COOKIE_CONSENT_STORAGE_KEY = 'oryen-cookie-consent';

export type CookieConsentValue = 'accepted' | 'declined';

export const COOKIE_CONSENT_CHANGED_EVENT = 'oryen:cookie-consent-changed';

export function readCookieConsent(): CookieConsentValue | null {
  if (typeof window === 'undefined') return null;
  const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  if (raw === 'accepted' || raw === 'declined') return raw;
  return null;
}

export function writeCookieConsent(value: CookieConsentValue) {
  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
  window.dispatchEvent(new Event(COOKIE_CONSENT_CHANGED_EVENT));
}

export function clearCookieConsent() {
  window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
  window.dispatchEvent(new Event(COOKIE_CONSENT_CHANGED_EVENT));
}
