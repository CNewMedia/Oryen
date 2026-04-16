import { defineField, defineType } from 'sanity';

export const thankYouPage = defineType({
  name: 'thankYouPage',
  title: 'Thank you (after contact)',
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
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'intro', title: 'Intro', type: 'text', rows: 4 }),
    defineField({
      name: 'supportingText',
      title: 'Supporting paragraph',
      type: 'text',
      rows: 3,
    }),
    defineField({ name: 'secondaryCtaLabel', title: 'Secondary CTA label', type: 'string' }),
    defineField({
      name: 'secondaryCtaPath',
      title: 'Secondary CTA path',
      type: 'string',
      description: 'e.g. /cases',
    }),
    defineField({ name: 'primaryCtaLabel', title: 'Primary CTA label', type: 'string' }),
    defineField({
      name: 'primaryCtaPath',
      title: 'Primary CTA path',
      type: 'string',
      description: 'e.g. /',
    }),
  ],
  preview: {
    select: { title: 'title', locale: 'locale' },
    prepare({ title, locale }) {
      return { title: title || 'Thank you', subtitle: locale?.toUpperCase() };
    },
  },
});
