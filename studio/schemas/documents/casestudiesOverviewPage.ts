import { defineField, defineType } from 'sanity';

export const casestudiesOverviewPage = defineType({
  name: 'casestudiesOverviewPage',
  title: 'Casestudies (overview)',
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
      initialValue: 'Casestudies',
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({ name: 'spine', title: 'Spine label', type: 'string' }),
        defineField({
          name: 'eyebrow',
          title: 'Small caps label',
          type: 'string',
        }),
        defineField({
          name: 'headlineBefore',
          title: 'Headline (before italic)',
          type: 'string',
        }),
        defineField({
          name: 'headlineEm',
          title: 'Headline (italic, amber)',
          type: 'string',
        }),
        defineField({ name: 'sub', title: 'Subtitle', type: 'text', rows: 4 }),
      ],
    }),
    defineField({
      name: 'disclaimer',
      title: 'Disclaimer + CTA',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'body', title: 'Body', type: 'text', rows: 6 }),
        defineField({
          name: 'ctaLabel',
          title: 'CTA label',
          description:
            'Shown with PrimaryRcCtaLabel on mobile (short label may apply).',
          type: 'string',
        }),
      ],
    }),
  ],
  preview: {
    select: { title: 'internalTitle', locale: 'locale' },
    prepare({ title, locale }) {
      return { title: title || 'Casestudies', subtitle: locale?.toUpperCase() };
    },
  },
});
