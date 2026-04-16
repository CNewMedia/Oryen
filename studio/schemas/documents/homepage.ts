import { defineField, defineType } from 'sanity';

/**
 * ORYEN homepage — structured sections (not a generic page builder).
 * One document per locale.
 */
export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'locale',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'Nederlands', value: 'nl' },
          { title: 'English', value: 'en' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'internalTitle',
      title: 'Internal title',
      type: 'string',
      initialValue: 'Homepage',
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
    defineField({ name: 'hero', title: 'Hero', type: 'homeHeroSection' }),
    defineField({ name: 'diagnosis', title: 'Diagnosis', type: 'homeDiagnosisSection' }),
    defineField({ name: 'approach', title: 'Approach', type: 'homeApproachSection' }),
    defineField({ name: 'proof', title: 'Proof', type: 'homeProofSection' }),
    defineField({ name: 'selection', title: 'Selection', type: 'homeSelectionSection' }),
    defineField({ name: 'about', title: 'About', type: 'homeAboutSection' }),
    defineField({ name: 'offer', title: 'Offer', type: 'homeOfferSection' }),
    defineField({
      name: 'heroBgImage',
      title: 'Hero background image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'featuredCaseImage',
      title: 'Featured case image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'portraitImage',
      title: 'Portrait / about image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { locale: 'locale', title: 'internalTitle' },
    prepare({ locale, title }) {
      return { title: title || 'Homepage', subtitle: locale?.toUpperCase() };
    },
  },
});
