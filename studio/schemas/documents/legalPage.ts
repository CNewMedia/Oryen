import { defineField, defineType } from 'sanity';

/** Privacy, cookies — one document per locale + key. */
export const legalPage = defineType({
  name: 'legalPage',
  title: 'Legal page',
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
      name: 'legalKey',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          { title: 'Privacy', value: 'privacy' },
          { title: 'Cookies', value: 'cookies' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
    defineField({ name: 'body', title: 'Body', type: 'richText' }),
  ],
  preview: {
    select: { title: 'title', locale: 'locale', key: 'legalKey' },
    prepare({ title, locale, key }) {
      return { title: title || 'Legal', subtitle: `${locale?.toUpperCase()} · ${key}` };
    },
  },
});
