import { defineArrayMember, defineField, defineType } from 'sanity';

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal title',
      type: 'string',
      initialValue: 'Footer',
    }),
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'footerColumn',
          fields: [
            defineField({ name: 'heading', title: 'Heading', type: 'string' }),
            defineField({
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [defineArrayMember({ type: 'link' })],
            }),
          ],
        }),
      ],
    }),
  ],
});
