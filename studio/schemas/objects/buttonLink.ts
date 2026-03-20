import { defineField, defineType } from 'sanity';

export const buttonLink = defineType({
  name: 'buttonLink',
  title: 'Button / link',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({
      name: 'href',
      title: 'URL or path',
      type: 'string',
      description: 'Internal path (e.g. /contact) or full URL',
    }),
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Ghost', value: 'ghost' },
        ],
        layout: 'radio',
      },
    }),
  ],
});
