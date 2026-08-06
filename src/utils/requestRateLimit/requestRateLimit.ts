type bucketType = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, bucketType>();
const MAX_TRACKED_CLIENTS = 10_000;

/**
 * Reads the caller's address from the proxy chain.
 *
 * Behind nginx/Coolify every request arrives from the proxy, so the socket address is useless and
 * `X-Forwarded-For` is what identifies the client. That header is caller-supplied and trivially
 * spoofed unless the proxy overwrites it — this limiter is a brake on casual abuse, not an access
 * control. Anything stronger belongs at the edge (nginx `limit_req`, Cloudflare).
 */
const resolveClientKey = (request: Request): string => {
  const forwardedFor = request.headers.get('X-Forwarded-For');
  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || 'unknown';
  }

  return request.headers.get('X-Real-IP')?.trim() || 'unknown';
};

const prune = (now: number): void => {
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) {
      buckets.delete(key);
    }
  }

  while (buckets.size > MAX_TRACKED_CLIENTS) {
    const oldest = buckets.keys().next();
    if (oldest.done) break;
    buckets.delete(oldest.value);
  }
};

type rateLimitOptionsType = {
  /** Bucket namespace, so two endpoints do not share one budget. */
  scope: string;
  limit: number;
  windowMs: number;
};

/** Returns true when the request fits inside the caller's budget. In-process, per instance. */
const allowRequest = (request: Request, { scope, limit, windowMs }: rateLimitOptionsType): boolean => {
  const now = Date.now();
  prune(now);

  const key = `${scope}:${resolveClientKey(request)}`;
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (bucket.count >= limit) {
    return false;
  }

  bucket.count += 1;
  return true;
};

export { allowRequest };
