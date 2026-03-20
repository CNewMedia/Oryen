import { draftMode } from 'next/headers';

import { getSanityClient, getSanityPreviewClient } from './client';
import { assertSanityConfig, sanityConfig } from './config';

type FetchOptions = {
  /** Next.js cache tags for `revalidateTag` (on-demand revalidation). */
  tags?: string[];
  /** `next.revalidate` in seconds; omit for default caching. */
  revalidate?: number | false;
};

export async function sanityFetch<T>({
  query,
  params = {},
  tags,
  revalidate = 60,
}: {
  query: string;
  params?: Record<string, unknown>;
} & FetchOptions): Promise<T> {
  assertSanityConfig();
  const { isEnabled } = await draftMode();
  const usePreview =
    isEnabled && Boolean(process.env.SANITY_API_READ_TOKEN);
  const client = usePreview ? getSanityPreviewClient() : getSanityClient();

  return client.fetch<T>(query, params, {
    next: {
      tags,
      revalidate: isEnabled ? 0 : revalidate,
    },
  });
}

/** Same as `sanityFetch`, but returns `null` when Sanity env is not configured (local boot without `.env`). */
export async function sanityFetchIfConfigured<T>(
  args: {
    query: string;
    params?: Record<string, unknown>;
  } & FetchOptions
): Promise<T | null> {
  if (!sanityConfig.projectId) return null;
  return sanityFetch<T>(args);
}
