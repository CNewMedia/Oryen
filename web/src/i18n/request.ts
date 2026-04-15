import { getRequestConfig } from 'next-intl/server';
import type { AbstractIntlMessages } from 'next-intl';

import en from '../messages/en.json';
import nl from '../messages/nl.json';

import { locales, routing } from './routing';

const messagesByLocale: Record<(typeof locales)[number], AbstractIntlMessages> = {
  nl: nl as unknown as AbstractIntlMessages,
  en: en as unknown as AbstractIntlMessages,
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !locales.includes(locale as (typeof locales)[number])) {
    locale = routing.defaultLocale;
  }

  const safe = locale as (typeof locales)[number];

  return {
    locale: safe,
    messages: messagesByLocale[safe],
  };
});
