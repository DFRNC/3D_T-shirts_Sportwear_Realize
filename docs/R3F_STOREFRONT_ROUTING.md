# R3F Storefront — контракт маршрутизації

## Загальне про потоки

**pupupu** містить React Three Fiber конфігуратор разом з Shopify Admin API. **realize-test** — это Shopify Theme, де конфігуратор має працювати на storefront, без доступу до Admin API.

Створюємо **окремий storefront entry** у pupupu, який буде скомпільований у стабільні assets і вбудований в Liquid-контейнер теми.

---

## Маршрутизація и контейнери

### 1. Product Configurator (основний флоу)

| Контекст | Маршрут | Тема | Опис |
|----------|--------|------|------|
| **pupupu App** | `/app/configurator/:slug` | — | Вихідний розробницький маршрут; використовується для тесту логіки до видалення |
| **realize-test Storefront** | `/products/:handle` → product template | `templates/product.json` | Product page; якщо продукт має `custom.model` метаполе, вмонтований R3F конфігуратор займає місце у секції `product-information` |

**Данні:** На storefront дані беруться з:
- `product` object (Shopify Storefront API)
- `selected_or_first_available_variant`
- Метаполя: `custom.id` (model id), `custom.bonus*`, `custom.minimum*` тощо

---

### 2. Page / Landing Configurator (факультативно)

| Контекст | Маршрут | Тема | Опис |
|----------|--------|------|------|
| **pupupu App** | `/app` | — | Список доступних моделей |
| **realize-test Storefront** | `/pages/configurator` (або інша) | `templates/page.json` + custom section | Landing/configurator page для вибору та швидкого конфіга без привязки до product variant |

**Данні:** JSON з моделями (має бути в Shopify metaobject або локально)

---

### 3. Cart & Checkout

| Контекст | Маршрут | Поточна логіка |
|----------|--------|-----------------|
| **Обидва** | `/cart` → `/checkout` | Нативний Shopify; R3F не був у цій частині раніше |

**Передача даних:** При "Add to Cart" зі сконфігурованого R3F:
- **Line item properties**: колір, стиль, текст, preview URL, параметри конфіга
- Ці properties мають бути видні в cart UI та у checkout (якщо Shopify їх дозволяє)

---

## Контракт Liquid ↔ R3F Entry

### Контейнер на storefront

```liquid
<!-- В product-information.liquid або custom секції -->
<div 
  id="r3f-root"
  data-model-id="{{ product.metafields.custom.id }}"
  data-product-handle="{{ product.handle }}"
  data-product-title="{{ product.title }}"
  data-variant-id="{{ selected_or_first_available_variant.id }}"
  data-variant-title="{{ selected_or_first_available_variant.title }}"
  data-price="{{ selected_or_first_available_variant.price }}"
  data-currency="{{ shop.currency }}"
  data-product-json="{{ product | json | escape }}"
  data-variant-json="{{ selected_or_first_available_variant | json | escape }}"
>
  <!-- Fallback или loader -->
  <p>Loading 3D Configurator...</p>
</div>

<script type="module">
  import { initR3FConfigurator } from '/cdn/assets/r3f-configurator.js';
  
  const container = document.getElementById('r3f-root');
  initR3FConfigurator(container);
</script>

<link rel="stylesheet" href="/cdn/assets/r3f-configurator.css">
```

### Props передачі

```typescript
interface R3FStorefrontProps {
  // Модель
  modelId: string;  // data-model-id
  
  // Продукт
  productHandle: string;        // data-product-handle
  productTitle: string;         // data-product-title
  product: ShopifyProduct;      // data-product-json (parsed)
  
  // Варіант
  variantId: string | number;   // data-variant-id
  variantTitle: string;         // data-variant-title
  variant: ShopifyVariant;      // data-variant-json (parsed)
  
  // Інтеграція зCart
  onAddToCart: (config: ConfiguratorState, variantId: string) => Promise<void>;
  
  // Fallback
  onError?: (error: Error) => void;
}
```

---

## Послідовність даних при Add to Cart

1. **R3F App** складає `ConfiguratorState`:
   - `modelId`
   - `color`, `textColor`, etc. (appearance)
   - `text` (personalization)
   - `texturePresets` або custom textures
   - `preview3dUrl` (썸네일)

2. **R3F App** викликає `onAddToCart(config, variantId)`

3. **Storefront handler** (в JS або через Shopify Cart API):
   - Обирає варіант за `variantId`
   - Складає line item properties:
     ```json
     {
       "Color": "navy",
       "Text": "JOHN DOE",
       "Custom Model": "federer_calcio",
       "Preview URL": "https://...",
       "Config JSON": "{...}" // full state for order notes
     }
     ```
   - Посилає в Shopify Cart API або форму Add to Cart

4. **Cart page** відображає properties

5. **Checkout** принімає properties як customer notes / line attributes

---

## Припинити legacy routes

Після переходу на storefront:
- **pupupu /app routes** залишаються як admin app (вгорі сторінки в Shopify Admin)
- **realize-test /products/:handle** стає єдиним точком входу для клієнтів
- Product template автоматично шукає `custom.model` та мантує R3F, якщо присутній

---

## Файлові шляхи інтеграції

| Файл | Призначення |
|------|-------------|
| `pupupu/src/storefront-entry.tsx` | Точка входу для storefront; експортує `initR3FConfigurator()` |
| `pupupu/vite.storefront.config.ts` | Vite config для бандлу без hash |
| `realize-test/sections/product-information.liquid` | Вбудовування R3F контейнера; посилання на assets |
| `realize-test/assets/r3f-configurator.js` | Скомпільований бандл (output від Vite) |
| `realize-test/assets/r3f-configurator.css` | Стилі (output від Vite) |

---

## Резюме

- ✅ **pupupu** = розробка + admin app routes (не видимі клієнтам)
- ✅ **realize-test** = storefront theme з вбудованим R3F у product page
- ✅ **Дані** беруться з Shopify Product + метаполів через data-атрибути
- ✅ **Cart** = line item properties з конфіга; checkout = нативний Shopify
