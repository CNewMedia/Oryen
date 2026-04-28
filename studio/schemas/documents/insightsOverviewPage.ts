import { defineField, defineType } from 'sanity';

export const insightsOverviewPage = defineType({
  name: 'insightsOverviewPage',
  title: 'Insights (overview)',
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
      initialValue: 'Insights',
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'intro', title: 'Intro', type: 'text', rows: 4 }),
  ],
  preview: {
    select: { title: 'internalTitle', locale: 'locale' },
    prepare({ title, locale }) {
      return { title: title || 'Insights', subtitle: locale?.toUpperCase() };
    },
  },
});
