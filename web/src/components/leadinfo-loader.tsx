'use client';

import { useEffect } from 'react';

import {
  COOKIE_CONSENT_CHANGED_EVENT,
  readCookieConsent,
} from '@/lib/consent/cookie-consent';

const LEADINFO_PING = 'https://cdn.leadinfo.net/ping.js';
const GLOBAL_NAME = 'leadinfo';

function defaultLeadinfoId() {
  return (
    process.env.NEXT_PUBLIC_LEADINFO_ID?.trim() || 'LI-637252A28346A'
  );
}

function injectLeadinfoScript(siteId: string) {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  // Leadinfo bootstrap — must match vendor snippet; site id is parameter `n`.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (function (l: any, e: Document, a: string, d: string, i: string, n: string) {
    if (!l[i]) {
      l.GlobalLeadinfoNamespace = l.GlobalLeadinfoNamespace || [];
      l.GlobalLeadinfoNamespace.push(i);
      l[i] = function () {
        // Leadinfo queue stores call-time `arguments` objects (vendor contract).
        // eslint-disable-next-line prefer-rest-params -- vendor snippet
        (l[i].q = l[i].q || []).push(arguments);
      };
      l[i].t = l[i].t || n;
      l[i].q = l[i].q || [];
      const o = e.createElement(a) as HTMLScriptElement;
      const f = e.getElementsByTagName(a)[0];
      o.async = true;
      o.src = d;
      f.parentNode?.insertBefore(o, f);
    }
  })(
    window,
    document,
    'script',
    LEADINFO_PING,
    GLOBAL_NAME,
    siteId,
  );
}

function maybeLoadLeadinfo() {
  if (readCookieConsent() !== 'accepted') return;
  injectLeadinfoScript(defaultLeadinfoId());
}

export function LeadinfoLoader() {
  useEffect(() => {
    maybeLoadLeadinfo();
    const onChange = () => maybeLoadLeadinfo();
    window.addEventListener(COOKIE_CONSENT_CHANGED_EVENT, onChange);
    return () => window.removeEventListener(COOKIE_CONSENT_CHANGED_EVENT, onChange);
  }, []);

  return null;
}
