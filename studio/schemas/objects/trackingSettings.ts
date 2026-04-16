import { defineField, defineType } from 'sanity';

/** Centralized marketing tags — toggles + IDs; injected in Next.js with consent-ready structure. */
export const trackingSettings = defineType({
  name: 'trackingSettings',
  title: 'Tracking & marketing',
  type: 'object',
  fields: [
    defineField({
      name: 'gtmEnabled',
      title: 'Google Tag Manager enabled',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'gtmContainerId',
      title: 'GTM container ID',
      type: 'string',
      description: 'e.g. GTM-XXXX',
    }),
    defineField({
      name: 'ga4Enabled',
      title: 'Google Analytics 4 enabled',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'ga4MeasurementId',
      title: 'GA4 measurement ID',
      type: 'string',
      description: 'e.g. G-XXXXXXXXXX',
    }),
    defineField({
      name: 'googleAdsEnabled',
      title: 'Google Ads conversion enabled',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'googleAdsConversionId',
      title: 'Google Ads conversion ID',
      type: 'string',
    }),
    defineField({
      name: 'googleAdsConversionLabel',
      title: 'Google Ads conversion label',
      type: 'string',
    }),
    defineField({
      name: 'metaPixelEnabled',
      title: 'Meta Pixel enabled',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'metaPixelId',
      title: 'Meta Pixel ID',
      type: 'string',
    }),
    defineField({
      name: 'linkedinEnabled',
      title: 'LinkedIn Insight Tag enabled',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'linkedinPartnerId',
      title: 'LinkedIn partner ID',
      type: 'string',
    }),
    defineField({
      name: 'headScripts',
      title: 'Custom head scripts (advanced)',
      type: 'text',
      rows: 4,
      description: 'Use only when required; prefer toggles above.',
    }),
    defineField({
      name: 'bodyEndScripts',
      title: 'Custom body-end scripts (advanced)',
      type: 'text',
      rows: 4,
    }),
  ],
});
