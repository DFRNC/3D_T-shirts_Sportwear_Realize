import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const graphqlMock = vi.hoisted(() => vi.fn());

vi.mock('@shopify/adminClient', () => ({
  shopifyAdminGraphql: graphqlMock,
}));

import { DEFAULT_FILE_STATUS_POLL_TIMEOUT_MS, registerShopifyFiles } from '@shopify/registerShopifyFiles/registerShopifyFiles';

const FILE_ID = 'gid://shopify/GenericFile/1';
const RESOURCE = [{ resourceUrl: 'https://staged.example/x', contentType: 'FILE' as const }];

const fileCreateResult = (file: Record<string, unknown>) => ({ fileCreate: { files: [file], userErrors: [] } });

beforeEach(() => {
  graphqlMock.mockReset();
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

/** Runs a promise to completion while auto-advancing fake timers past every sleep(). */
const runWithTimers = async <T>(operation: () => Promise<T>): Promise<T> => {
  const promise = operation();
  const settled = promise.then(
    (value) => ({ ok: true, value }) as const,
    (error) => ({ ok: false, error }) as const,
  );

  let done = false;
  void settled.then(() => {
    done = true;
  });

  while (!done) {
    await vi.advanceTimersByTimeAsync(1_000);
  }

  const result = await settled;
  if (!result.ok) throw result.error;
  return result.value;
};

describe('registerShopifyFiles', () => {
  it('returns the url immediately when fileCreate already resolved it', async () => {
    graphqlMock.mockResolvedValueOnce(fileCreateResult({ id: FILE_ID, fileStatus: 'READY', url: 'https://cdn/a.pdf' }));

    const urls = await runWithTimers(() => registerShopifyFiles(RESOURCE));

    expect(urls).toEqual(['https://cdn/a.pdf']);
    expect(graphqlMock).toHaveBeenCalledTimes(1);
  });

  it('polls until the url appears (the 10MB-PDF case that used to time out)', async () => {
    graphqlMock
      .mockResolvedValueOnce(fileCreateResult({ id: FILE_ID, fileStatus: 'UPLOADED', url: null }))
      .mockResolvedValueOnce({ node: { id: FILE_ID, fileStatus: 'UPLOADED', url: null } })
      .mockResolvedValueOnce({ node: { id: FILE_ID, fileStatus: 'UPLOADED', url: null } })
      .mockResolvedValueOnce({ node: { id: FILE_ID, fileStatus: 'UPLOADED', url: null } })
      .mockResolvedValueOnce({ node: { id: FILE_ID, fileStatus: 'READY', url: 'https://cdn/slow.pdf' } });

    const urls = await runWithTimers(() => registerShopifyFiles(RESOURCE, { fileStatusPollTimeoutMs: 90_000 }));

    expect(urls).toEqual(['https://cdn/slow.pdf']);
  });

  it('would have failed under the old 4.5s budget but succeeds with the 90s budget', async () => {
    // url only appears ~20s in — beyond the previous 3 x 1.5s ceiling.
    const readyAt = Date.now() + 20_000;
    graphqlMock.mockImplementation((query: string) => {
      if (query.includes('mutation FileCreate')) {
        return Promise.resolve(fileCreateResult({ id: FILE_ID, fileStatus: 'UPLOADED', url: null }));
      }
      const ready = Date.now() >= readyAt;
      return Promise.resolve({ node: { id: FILE_ID, fileStatus: ready ? 'READY' : 'UPLOADED', url: ready ? 'https://cdn/big.pdf' : null } });
    });

    await expect(runWithTimers(() => registerShopifyFiles(RESOURCE, { fileStatusPollTimeoutMs: 4_500 }))).rejects.toThrow(
      /did not finish processing within 4500ms/,
    );

    graphqlMock.mockClear();
    const urls = await runWithTimers(() => registerShopifyFiles(RESOURCE, { fileStatusPollTimeoutMs: 90_000 }));
    expect(urls).toEqual(['https://cdn/big.pdf']);
  });

  it('fails fast on FAILED status instead of polling to the deadline', async () => {
    graphqlMock.mockResolvedValueOnce(fileCreateResult({ id: FILE_ID, fileStatus: 'UPLOADED', url: null })).mockResolvedValueOnce({
      node: { id: FILE_ID, fileStatus: 'FAILED', url: null, fileErrors: [{ code: 'IMAGE_PROCESSING_FAILURE', message: 'bad file' }] },
    });

    await expect(runWithTimers(() => registerShopifyFiles(RESOURCE, { fileStatusPollTimeoutMs: 90_000 }))).rejects.toThrow(
      /failed processing \(fileStatus: FAILED\)\. Errors: IMAGE_PROCESSING_FAILURE: bad file\./,
    );

    // 1 mutation + 1 poll only — it did not keep polling for 90s.
    expect(graphqlMock).toHaveBeenCalledTimes(2);
  });

  it('detects FAILED already present in the fileCreate response without polling', async () => {
    graphqlMock.mockResolvedValueOnce(fileCreateResult({ id: FILE_ID, fileStatus: 'FAILED', url: null, fileErrors: [{ code: 'X', message: 'y' }] }));

    await expect(runWithTimers(() => registerShopifyFiles(RESOURCE))).rejects.toThrow(/failed processing/);
    expect(graphqlMock).toHaveBeenCalledTimes(1);
  });

  it('reports poll count and last status in the timeout error', async () => {
    graphqlMock.mockImplementation((query: string) =>
      query.includes('mutation FileCreate')
        ? Promise.resolve(fileCreateResult({ id: FILE_ID, fileStatus: 'UPLOADED', url: null }))
        : Promise.resolve({ node: { id: FILE_ID, fileStatus: 'UPLOADED', url: null } }),
    );

    await expect(runWithTimers(() => registerShopifyFiles(RESOURCE, { fileStatusPollTimeoutMs: 10_000 }))).rejects.toThrow(
      /did not finish processing within 10000ms \(\d+ polls, last fileStatus: UPLOADED\)/,
    );
  });

  it('defaults to the short budget so the checkout path stays responsive', async () => {
    expect(DEFAULT_FILE_STATUS_POLL_TIMEOUT_MS).toBe(5_000);

    graphqlMock.mockImplementation((query: string) =>
      query.includes('mutation FileCreate')
        ? Promise.resolve(fileCreateResult({ id: FILE_ID, fileStatus: 'UPLOADED', url: null }))
        : Promise.resolve({ node: { id: FILE_ID, fileStatus: 'UPLOADED', url: null } }),
    );

    const started = Date.now();
    await expect(runWithTimers(() => registerShopifyFiles(RESOURCE))).rejects.toThrow(/within 5000ms/);
    expect(Date.now() - started).toBeLessThanOrEqual(6_000);
  });

  it('resolves MediaImage urls from the nested image field', async () => {
    graphqlMock
      .mockResolvedValueOnce(fileCreateResult({ id: FILE_ID, fileStatus: 'UPLOADED', image: null }))
      .mockResolvedValueOnce({ node: { id: FILE_ID, fileStatus: 'READY', image: { url: 'https://cdn/img.png' } } });

    const urls = await runWithTimers(() => registerShopifyFiles([{ resourceUrl: 'https://staged/i', contentType: 'IMAGE' }]));
    expect(urls).toEqual(['https://cdn/img.png']);
  });

  it('returns [] without calling the API for an empty input', async () => {
    await expect(registerShopifyFiles([])).resolves.toEqual([]);
    expect(graphqlMock).not.toHaveBeenCalled();
  });

  it('throws on fileCreate userErrors', async () => {
    graphqlMock.mockResolvedValueOnce({ fileCreate: { files: [], userErrors: [{ message: 'nope' }] } });
    await expect(runWithTimers(() => registerShopifyFiles(RESOURCE))).rejects.toThrow(/fileCreate failed: nope/);
  });
});
