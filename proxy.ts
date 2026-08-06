import { NextResponse } from 'next/server';

import { buildShopifyFrameAncestorsHeader } from '@shopify';

export function proxy() {
  const response = NextResponse.next();

  // Built from environment configuration only — never from the request's own query parameters.
  // See @shopify/frameAncestors for why.
  response.headers.set('Content-Security-Policy', buildShopifyFrameAncestorsHeader());

  return response;
}

export const config = {
  matcher: '/:path*',
};
