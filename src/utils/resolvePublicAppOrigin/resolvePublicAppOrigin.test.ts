import { afterEach, describe, expect, it } from 'vitest';

import { parsePublicAppOrigin, resolvePublicAppOrigin } from './resolvePublicAppOrigin';

const originalAppOrigin = process.env.APP_ORIGIN;
const originalAppUrl = process.env.APP_URL;

afterEach(() => {
  if (originalAppOrigin === undefined) delete process.env.APP_ORIGIN;
  else process.env.APP_ORIGIN = originalAppOrigin;

  if (originalAppUrl === undefined) delete process.env.APP_URL;
  else process.env.APP_URL = originalAppUrl;
});

describe('parsePublicAppOrigin', () => {
  it('accepts a public https origin', () => {
    expect(parsePublicAppOrigin('https://configurator.example.com')).toBe('https://configurator.example.com');
  });

  it('rejects Docker bind addresses', () => {
    expect(parsePublicAppOrigin('https://0.0.0.0:80')).toBeNull();
    expect(parsePublicAppOrigin('http://127.0.0.1:3000')).toBeNull();
    expect(parsePublicAppOrigin('http://localhost:3000')).toBeNull();
  });
});

describe('resolvePublicAppOrigin', () => {
  it('prefers APP_ORIGIN over request url', () => {
    process.env.APP_ORIGIN = 'https://configurator.example.com';

    const request = new Request('https://0.0.0.0:80/api/webhooks/orders-create');

    expect(resolvePublicAppOrigin(request)).toBe('https://configurator.example.com');
  });

  it('uses forwarded host instead of 0.0.0.0 request origin', () => {
    delete process.env.APP_ORIGIN;
    delete process.env.APP_URL;

    const request = new Request('https://0.0.0.0:80/api/webhooks/orders-create', {
      headers: {
        'x-forwarded-host': 'configurator.example.com',
        'x-forwarded-proto': 'https',
      },
    });

    expect(resolvePublicAppOrigin(request)).toBe('https://configurator.example.com');
  });

  it('returns null when only the Docker bind address is available', () => {
    delete process.env.APP_ORIGIN;
    delete process.env.APP_URL;

    const request = new Request('https://0.0.0.0:80/api/webhooks/orders-create', {
      headers: { host: '0.0.0.0:80' },
    });

    expect(resolvePublicAppOrigin(request)).toBeNull();
  });
});
