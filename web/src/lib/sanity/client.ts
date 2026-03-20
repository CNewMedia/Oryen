import { createClient, type SanityClient } from 'next-sanity';

import { sanityConfig } from './config';

export function getSanityClient(): SanityClient {
  return createClient({
    projectId: sanityConfig.projectId,
    dataset: sanityConfig.dataset,
    apiVersion: sanityConfig.apiVersion,
    useCdn: true,
    perspective: 'published',
  });
}

export function getSanityPreviewClient(): SanityClient {
  const token = process.env.SANITY_API_READ_TOKEN;
  if (!token) {
    throw new Error('SANITY_API_READ_TOKEN is required for preview');
  }
  return createClient({
    projectId: sanityConfig.projectId,
    dataset: sanityConfig.dataset,
    apiVersion: sanityConfig.apiVersion,
    useCdn: false,
    token,
    perspective: 'previewDrafts',
  });
}
