import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { routing } from './i18n/routing';
import { PRODUCTION_SITE_URL } from '@/lib/site-url';

/** Vercel default hostname — must not be indexed; 301 to production domain. */
const VERCEL_APP_HOST = 'oryen-web.vercel.app';
const CANONICAL_HOST = new URL(PRODUCTION_SITE_URL).host;

const intlMiddleware = createMiddleware(routing);

function redirectVercelHostToCanonical(request: NextRequest): NextResponse | null {
  const host = request.headers.get('host')?.split(':')[0]?.toLowerCase();
  if (host !== VERCEL_APP_HOST) return null;

  const url = request.nextUrl.clone();
  url.host = CANONICAL_HOST;
  url.protocol = 'https';
  url.port = '';
  return NextResponse.redirect(url, 301);
}

export default function middleware(request: NextRequest) {
  const redirect = redirectVercelHostToCanonical(request);
  if (redirect) return redirect;

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/',
    '/(nl|en)/:path*',
    '/studio/:path*',
    /*
     * Catch-all for legacy paths on the Vercel hostname (redirect before 404).
     * Excludes API, Next assets, and static files with extensions.
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
