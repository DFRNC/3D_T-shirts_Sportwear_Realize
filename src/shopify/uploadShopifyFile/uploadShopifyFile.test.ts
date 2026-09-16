import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const createTargetsMock = vi.hoisted(() => vi.fn());
const registerMock = vi.hoisted(() => vi.fn());
const uploadBlobMock = vi.hoisted(() => vi.fn());

vi.mock('@shopify/createStagedUploadTargets', () => ({ createStagedUploadTargets: createTargetsMock }));
vi.mock('@shopify/registerShopifyFiles', () => ({ registerShopifyFiles: registerMock }));
vi.mock('@utils/uploadBlobToStagedTarget', () => ({ uploadBlobToStagedTarget: uploadBlobMock }));

import { uploadShopifyFile } from '@shopify/uploadShopifyFile/uploadShopifyFile';

beforeEach(() => {
  createTargetsMock.mockReset().mockResolvedValue([{ resourceUrl: 'https://staged/r', url: 'https://staged', parameters: [] }]);
  registerMock.mockReset().mockResolvedValue(['https://cdn/out.pdf']);
  uploadBlobMock.mockReset().mockResolvedValue(undefined);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('uploadShopifyFile', () => {
  it('forwards an explicit poll timeout to registerShopifyFiles', async () => {
    await uploadShopifyFile(new Blob(['x'], { type: 'application/pdf' }), 'a.pdf', 'application/pdf', { fileStatusPollTimeoutMs: 90_000 });

    expect(registerMock).toHaveBeenCalledWith([{ resourceUrl: 'https://staged/r', contentType: 'FILE' }], { fileStatusPollTimeoutMs: 90_000 });
  });

  it('passes undefined when no timeout is given so the default applies', async () => {
    await uploadShopifyFile(new Blob(['x'], { type: 'application/pdf' }), 'a.pdf', 'application/pdf');

    expect(registerMock).toHaveBeenCalledWith(expect.anything(), { fileStatusPollTimeoutMs: undefined });
  });

  it('maps image mime types to the IMAGE content type', async () => {
    await uploadShopifyFile(new Blob(['x'], { type: 'image/png' }), 'a.png', 'image/png');

    expect(registerMock).toHaveBeenCalledWith([{ resourceUrl: 'https://staged/r', contentType: 'IMAGE' }], expect.anything());
  });

  it('reuses an existing url instead of uploading again (idempotent retry)', async () => {
    const existing = 'https://cdn/already-there.pdf';
    const isHttpUrl = (value: string | null | undefined): value is string => !!value && /^https?:/i.test(value);

    const upload = async (existingUrl: string | null | undefined) => {
      if (isHttpUrl(existingUrl)) return existingUrl;
      return uploadShopifyFile(new Blob(['x'], { type: 'application/pdf' }), 'a.pdf', 'application/pdf');
    };

    await expect(upload(existing)).resolves.toBe(existing);
    expect(registerMock).not.toHaveBeenCalled();

    await expect(upload(null)).resolves.toBe('https://cdn/out.pdf');
    expect(registerMock).toHaveBeenCalledTimes(1);
  });
});
