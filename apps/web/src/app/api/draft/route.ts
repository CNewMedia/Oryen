import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

/**
 * Enable Next.js Draft Mode for Sanity preview.
 * Configure Studio Presentation tool to open: `/api/draft?secret=…&slug=/path`
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug') ?? '/';

  if (!process.env.SANITY_PREVIEW_SECRET || secret !== process.env.SANITY_PREVIEW_SECRET) {
    return new Response('Invalid secret', { status: 401 });
  }

  (await draftMode()).enable();
  const path = slug.startsWith('/') ? slug : `/${slug}`;
  redirect(path);
}
