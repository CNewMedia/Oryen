import { defineArrayMember, defineField, defineType } from 'sanity';

export const homeApproachStep = defineType({
  name: 'homeApproachStep',
  title: 'Approach step',
  type: 'object',
  fields: [
    defineField({ name: 'n', title: 'Number', type: 'string' }),
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'q', title: 'Question', type: 'text', rows: 3 }),
  ],
});

export const homeMiniCase = defineType({
  name: 'homeMiniCase',
  title: 'Mini case',
  type: 'object',
  fields: [
    defineField({ name: 'client', title: 'Client', type: 'string' }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({ name: 'body', title: 'Body', type: 'text', rows: 4 }),
    defineField({ name: 'result', title: 'Result', type: 'text', rows: 2 }),
  ],
});

export const homeHeroSection = defineType({
  name: 'homeHeroSection',
  title: 'Home — Hero',
  type: 'object',
  fields: [
    defineField({ name: 'titleLine1', title: 'Title line 1', type: 'string' }),
    defineField({ name: 'titleLine2', title: 'Title line 2', type: 'string' }),
    defineField({
      name: 'titleEm',
      title: 'Title (accent / italic)',
      type: 'text',
      rows: 2,
      description: 'Use line breaks for multi-line accent.',
    }),
    defineField({ name: 'claim', title: 'Claim', type: 'text', rows: 3 }),
    defineField({ name: 'sub', title: 'Sub line', type: 'text', rows: 2 }),
    defineField({ name: 'primaryCta', title: 'Primary CTA', type: 'string' }),
    defineField({ name: 'secondaryCta', title: 'Secondary CTA', type: 'string' }),
  ],
});

export const homeDiagnosisSection = defineType({
  name: 'homeDiagnosisSection',
  title: 'Home — Diagnosis',
  type: 'object',
  fields: [
    defineField({ name: 'spine', title: 'Spine label', type: 'string' }),
    defineField({ name: 'headlineEm', title: 'Headline (emphasis)', type: 'text', rows: 2 }),
    defineField({ name: 'p1', title: 'Paragraph', type: 'text', rows: 4 }),
    defineField({ name: 'focus', title: 'Focus line', type: 'text', rows: 2 }),
  ],
});

export const homeApproachSection = defineType({
  name: 'homeApproachSection',
  title: 'Home — Approach',
  type: 'object',
  fields: [
    defineField({ name: 'spine', title: 'Spine label', type: 'string' }),
    defineField({ name: 'headline', title: 'Headline', type: 'string' }),
    defineField({ name: 'headlineEm', title: 'Headline (emphasis)', type: 'string' }),
    defineField({ name: 'note1', title: 'Note', type: 'text', rows: 4 }),
    defineField({ name: 'introHl', title: 'Intro line', type: 'string' }),
    defineField({ name: 'stepPrefix', title: 'Step prefix', type: 'string' }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [defineArrayMember({ type: 'homeApproachStep' })],
    }),
  ],
});

export const homeFeaturedCase = defineType({
  name: 'homeFeaturedCase',
  title: 'Featured case',
  type: 'object',
  fields: [
    defineField({ name: 'client', title: 'Client', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'text', rows: 2 }),
    defineField({ name: 'line1', title: 'Line 1', type: 'text', rows: 2 }),
    defineField({ name: 'line2', title: 'Line 2', type: 'text', rows: 2 }),
    defineField({ name: 'line3', title: 'Line 3', type: 'text', rows: 2 }),
  ],
});

export const homeProofSection = defineType({
  name: 'homeProofSection',
  title: 'Home — Proof',
  type: 'object',
  fields: [
    defineField({ name: 'spine', title: 'Spine label', type: 'string' }),
    defineField({ name: 'headline', title: 'Headline', type: 'string' }),
    defineField({ name: 'headlineEm', title: 'Headline (emphasis)', type: 'string' }),
    defineField({ name: 'featured', title: 'Featured case', type: 'homeFeaturedCase' }),
    defineField({
      name: 'minis',
      title: 'Mini cases',
      type: 'array',
      of: [defineArrayMember({ type: 'homeMiniCase' })],
    }),
  ],
});

export const homeSelectionSection = defineType({
  name: 'homeSelectionSection',
  title: 'Home — Selection',
  type: 'object',
  fields: [
    defineField({ name: 'spine', title: 'Spine label', type: 'string' }),
    defineField({ name: 'headline', title: 'Headline', type: 'string' }),
    defineField({ name: 'headlineEm', title: 'Headline (emphasis)', type: 'text', rows: 2 }),
    defineField({
      name: 'forItems',
      title: 'For whom (items)',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({ name: 'notForLabel', title: 'Not for label', type: 'string' }),
    defineField({
      name: 'notFor',
      title: 'Not for (items)',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
  ],
});

export const homeAboutSection = defineType({
  name: 'homeAboutSection',
  title: 'Home — About',
  type: 'object',
  fields: [
    defineField({ name: 'spine', title: 'Spine label', type: 'string' }),
    defineField({ name: 'headline', title: 'Headline', type: 'string' }),
    defineField({ name: 'headlineEm', title: 'Headline (emphasis)', type: 'text', rows: 2 }),
    defineField({ name: 'statement', title: 'Statement', type: 'text', rows: 4 }),
    defineField({ name: 'creds', title: 'Credentials line', type: 'string' }),
    defineField({ name: 'signature', title: 'Signature', type: 'string' }),
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 2 }),
  ],
});

export const homeOfferSection = defineType({
  name: 'homeOfferSection',
  title: 'Home — Offer',
  type: 'object',
  fields: [
    defineField({ name: 'spine', title: 'Spine label', type: 'string' }),
    defineField({ name: 'name', title: 'Offer name', type: 'string' }),
    defineField({ name: 'body', title: 'Body', type: 'text', rows: 5 }),
    defineField({ name: 'ctaPrimary', title: 'Primary CTA', type: 'string' }),
    defineField({
      name: 'secondaryHlBeforeEm',
      title: 'Secondary headline (before emphasis)',
      type: 'text',
      rows: 2,
      description: 'Use line breaks where needed.',
    }),
    defineField({
      name: 'secondaryHlEm',
      title: 'Secondary headline (emphasis)',
      type: 'text',
      rows: 2,
    }),
    defineField({ name: 'secondaryBody', title: 'Secondary body', type: 'text', rows: 4 }),
    defineField({ name: 'secondaryNote', title: 'Secondary note', type: 'string' }),
  ],
});
