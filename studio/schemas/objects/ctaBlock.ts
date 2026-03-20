import { defineField, defineType } from 'sanity';

export const ctaBlock = defineType({
  name: 'ctaBlock',
  title: 'CTA block',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'body', title: 'Body', type: 'text', rows: 4 }),
    defineField({ name: 'primary', title: 'Primary', type: 'buttonLink' }),
    defineField({ name: 'secondary', title: 'Secondary', type: 'buttonLink' }),
  ],
});
