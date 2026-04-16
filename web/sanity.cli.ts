import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId:
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() ??
      process.env.SANITY_STUDIO_PROJECT_ID?.trim(),
    dataset:
      process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() ??
      process.env.SANITY_STUDIO_DATASET?.trim() ??
      'production',
  },
});
