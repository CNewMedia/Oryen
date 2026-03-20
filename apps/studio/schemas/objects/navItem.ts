import { defineArrayMember, defineField, defineType } from 'sanity';

export const navItem = defineType({
  name: 'navItem',
  title: 'Navigation item',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({
      name: 'href',
      title: 'URL or path',
      type: 'string',
    }),
    defineField({
      name: 'children',
      title: 'Child links',
      type: 'array',
      of: [defineArrayMember({ type: 'navItem' })],
    }),
  ],
});
