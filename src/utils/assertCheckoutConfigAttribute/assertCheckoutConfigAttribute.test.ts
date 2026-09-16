import { describe, expect, it } from 'vitest';

import { CONFIG_URL_ATTRIBUTE_KEY, hasCheckoutConfigAttribute } from '@utils/assertCheckoutConfigAttribute/assertCheckoutConfigAttribute';

describe('hasCheckoutConfigAttribute', () => {
  it('accepts a populated _config_url attribute', () => {
    expect(hasCheckoutConfigAttribute([{ key: CONFIG_URL_ATTRIBUTE_KEY, value: 'https://cdn/config.json' }])).toBe(true);
  });

  it('rejects the empty attribute list that used to create orders like #1049 and #1051', () => {
    expect(hasCheckoutConfigAttribute([])).toBe(false);
  });

  it('rejects a missing attributes field', () => {
    expect(hasCheckoutConfigAttribute(undefined)).toBe(false);
    expect(hasCheckoutConfigAttribute(null)).toBe(false);
  });

  it('rejects an empty or whitespace-only value', () => {
    expect(hasCheckoutConfigAttribute([{ key: CONFIG_URL_ATTRIBUTE_KEY, value: '' }])).toBe(false);
    expect(hasCheckoutConfigAttribute([{ key: CONFIG_URL_ATTRIBUTE_KEY, value: '   ' }])).toBe(false);
    expect(hasCheckoutConfigAttribute([{ key: CONFIG_URL_ATTRIBUTE_KEY, value: null }])).toBe(false);
  });

  it('rejects when only _uv_image_urls made it through', () => {
    expect(hasCheckoutConfigAttribute([{ key: '_uv_image_urls', value: '[]' }])).toBe(false);
  });
});
