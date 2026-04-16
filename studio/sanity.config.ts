import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { schemaTypes } from './schemas';
import { structure } from './structure';

/**
 * Embedded Studio (Next) only inlines NEXT_PUBLIC_* into the client bundle.
 * Use `||` so empty NEXT_PUBLIC_* values still fall back to SANITY_STUDIO_* (?? does not).
 */
const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() ||
  process.env.SANITY_STUDIO_PROJECT_ID?.trim() ||
  '';
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() ||
  process.env.SANITY_STUDIO_DATASET?.trim() ||
  'production';

export default defineConfig({
  name: 'oryen',
  title: 'ORYEN',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
  },
});
