const DEDUPLICATION_TTL_MS = 60 * 60 * 1000;
const MAX_TRACKED_WEBHOOKS = 5_000;

const handledAt = new Map<string, number>();

const prune = (now: number): void => {
  for (const [id, timestamp] of handledAt) {
    if (now - timestamp > DEDUPLICATION_TTL_MS) {
      handledAt.delete(id);
    }
  }

  // Hard ceiling so a burst cannot grow the map without bound; Map iterates in insertion order,
  // so this drops the oldest entries first.
  while (handledAt.size > MAX_TRACKED_WEBHOOKS) {
    const oldest = handledAt.keys().next();
    if (oldest.done) break;
    handledAt.delete(oldest.value);
  }
};

/**
 * Claims a webhook delivery, returning false when this instance has already taken it.
 *
 * Shopify keeps `X-Shopify-Webhook-Id` stable across retries of the same event, so claiming on that
 * id stops a redelivery from generating and uploading a second set of PDFs for one order.
 *
 * In-process only — deliberately: it is exactly as durable as the `after()` callback it guards, and
 * both reset on restart. It is correct for a single app container. Scaling past one instance, or
 * wanting redelivery to survive a restart, means moving both this claim and the PDF work to a shared
 * store (Redis/Postgres) and a real queue. See DEPLOYMENT-AUDIT.md § 2.1.
 */
const markWebhookHandled = (webhookId: string | null): boolean => {
  if (!webhookId) {
    // No id to deduplicate on — process it rather than silently dropping the order.
    return true;
  }

  const now = Date.now();
  prune(now);

  if (handledAt.has(webhookId)) {
    return false;
  }

  handledAt.set(webhookId, now);
  return true;
};

export { markWebhookHandled };
