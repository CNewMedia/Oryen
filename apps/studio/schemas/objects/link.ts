import { defineField, defineType } from 'sanity';

export const link = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({
      name: 'href',
      title: 'URL or path',
      type: 'string',
      description: 'Internal path (e.g. /contact) or absolute URL',
    }),
  ],
});
