import { defineField, defineType } from 'sanity';

export const statBlock = defineType({
  name: 'statBlock',
  title: 'Stat block',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({ name: 'value', title: 'Value', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
  ],
});
