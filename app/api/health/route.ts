export const dynamic = 'force-dynamic';

/**
 * Liveness probe for the container orchestrator.
 *
 * Deliberately does not touch Shopify: a health check that calls the Storefront API would restart a
 * perfectly healthy container every time Shopify has a bad minute.
 */
export function GET(): Response {
  return Response.json({ status: 'ok', uptime: Math.round(process.uptime()) });
}
