import { defineField, defineType } from 'sanity';

export const quoteBlock = defineType({
  name: 'quoteBlock',
  title: 'Quote block',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'attribution', title: 'Attribution', type: 'string' }),
    defineField({ name: 'role', title: 'Role / company', type: 'string' }),
  ],
});
