import { beforeEach, describe, expect, it, vi } from 'vitest';

const graphqlMock = vi.hoisted(() => vi.fn());
vi.mock('@shopify/adminClient', () => ({ shopifyAdminGraphql: graphqlMock }));

import { fetchOrderMetafields } from '@shopify/fetchOrderMetafields/fetchOrderMetafields';

const ORDER_GID = 'gid://shopify/Order/1';
const edges = (entries: [string, string][]) => ({ node: { metafields: { edges: entries.map(([key, value]) => ({ node: { key, value } })) } } });

beforeEach(() => {
  graphqlMock.mockReset();
});

describe('fetchOrderMetafields', () => {
  it('maps metafields by key', async () => {
    graphqlMock.mockResolvedValueOnce(
      edges([
        ['config_url', 'https://cdn/config.json'],
        ['order_pdf_url', 'https://cdn/order.pdf'],
      ]),
    );

    const result = await fetchOrderMetafields(ORDER_GID);

    expect(result.get('config_url')).toBe('https://cdn/config.json');
    expect(result.get('order_pdf_url')).toBe('https://cdn/order.pdf');
    expect(graphqlMock).toHaveBeenCalledWith(expect.stringContaining('OrderMetafields'), { id: ORDER_GID });
  });

  it('drops empty values so they are never treated as completed work', async () => {
    graphqlMock.mockResolvedValueOnce(
      edges([
        ['order_pdf_url', ''],
        ['cutting_pdf_url', 'https://cdn/cut.pdf'],
      ]),
    );

    const result = await fetchOrderMetafields(ORDER_GID);

    expect(result.has('order_pdf_url')).toBe(false);
    expect(result.get('cutting_pdf_url')).toBe('https://cdn/cut.pdf');
  });

  it('returns an empty map for an order with no metafields', async () => {
    graphqlMock.mockResolvedValueOnce(edges([]));
    await expect(fetchOrderMetafields(ORDER_GID)).resolves.toEqual(new Map());
  });

  it('returns an empty map when the node is missing', async () => {
    graphqlMock.mockResolvedValueOnce({ node: null });
    await expect(fetchOrderMetafields(ORDER_GID)).resolves.toEqual(new Map());
  });

  it('queries only the configurator namespace', async () => {
    graphqlMock.mockResolvedValueOnce(edges([]));
    await fetchOrderMetafields(ORDER_GID);
    expect(graphqlMock.mock.calls[0][0]).toContain('namespace: "configurator"');
  });
});
