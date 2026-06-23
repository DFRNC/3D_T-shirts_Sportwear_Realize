# Локальний розвиток R3F Storefront

## Паралельний дев-режим

### Terminal 1: pupupu storefront бандл (watch mode)

```bash
cd D:\work\configurators\pupupu
npm install  # якщо потрібно оновити залежності
npm run build:theme:watch
```

Це компілює `src/storefront-entry.tsx` в реальному часі до:
- `realize-test/assets/r3f-configurator.js`
- `realize-test/assets/r3f-configurator.css`

### Terminal 2: realize-test theme (dev mode)

```bash
cd D:\work\configurators\realize-test
shopify theme dev --store <your-store-name>
```

або з localtunnel:

```bash
shopify theme dev --store <your-store-name> --poll
```

Браузер відкриється на `http://localhost:9000` (або інший порт що буде виведений).

---

## Тест-кейси (золота доріжка)

### 1. Завантаження конфігуратора

1. Убедитись що в storefront existe product з:
   - `product.metafields.custom.id` = `federer_calcio` (або інший model ID)
   - Щонайменше один variant

2. Перейти на product page (e.g., `/products/calcio-jersey`)

3. Очекування:
   - ✅ R3F контейнер з 3D моделлю завантажується
   - ✅ Loader spinner зникає після ~3-5 сек
   - ✅ Canvas відображає гармент

### 2. Зміна варіантів / опцій

1. На product page вибрати інший variant (розмір, колір)

2. Очекування:
   - ✅ Конфігуратор обновляється з новим variant ID
   - ✅ Ціна у data-атрибутах змінюється
   - ✅ 3D модель відповідає обраному варіанту (якщо має кольорні варіанти)

### 3. Персоналізація у конфігураторі

1. У R3F UI:
   - Вибрати колір (через color picker)
   - Додати текст (name, number, тощо)
   - Змінити позицію / розмір елемента

2. Очекування:
   - ✅ 3D модель оновляється в реальному часі
   - ✅ Preview генерується

### 4. Add to Cart з конфіга

1. Після персоналізації натиснути "Add to Cart"

2. Очекування:
   - ✅ Запит до `/cart/add.js` з line item properties
   - ✅ Redirect на `/cart`
   - ✅ Cart page показує item з properties:
     ```
     Color: navy
     Text Customization: JOHN DOE
     Model ID: federer_calcio
     Configuration JSON: {...}
     ```

### 5. Checkout

1. На cart page натиснути "Checkout"

2. Очекування:
   - ✅ Proceedung to Shopify checkout
   - ✅ Line item properties видимі в order summary
   - ✅ Можливо завершити заказ

### 6. Order Verification

1. Зайти в Shopify Admin → Orders → створений order

2. Очекування:
   - ✅ Line Items section показує properties
   - ✅ Preview URL та Configuration JSON доступні

---

## Debugging

### Console errors

Якщо R3F контейнер показує помилку:

1. Відкрити **Browser DevTools** (F12)
2. Перевірити **Console** tab для помилок
3. Перевірити **Network** tab:
   - `/assets/r3f-configurator.js` — статус 200?
   - `/assets/r3f-configurator.css` — статус 200?

### Common issues

#### ❌ "r3f-configurator.js not found (404)"
- Проверить що `npm run build:theme:watch` запущено
- Перевірити що файли скомпільовані в `realize-test/assets/`
- Очистити браузер кеш (Ctrl+Shift+Delete)

#### ❌ "Canvas is not visible / black"
- Перевірити що model ID існує в `src/data/` folder
- Перевірити browser console для WASM / Three.js ошибок
- Спробувати інший model ID (e.g., `crewneck`)

#### ❌ "Add to Cart failed"
- Перевірити Network запит в DevTools
- Переконатись що Shopify store is в development/preview mode
- Перевірити що variant ID коректний

#### ❌ "Module not found / import error"
- Переконатись що `@vitejs/plugin-react` встановлена
- Перевірити tsconfig paths у `vite.storefront.config.ts`
- Рестартануть `npm run build:theme:watch`

---

## Tips & Tricks

### 1. Перевірити data-атрибути контейнера

У DevTools Inspector:

```html
<div id="r3f-root"
  data-model-id="federer_calcio"
  data-product-handle="calcio-jersey"
  data-product-title="Calcio Jersey"
  data-variant-id="49857012234856"
  data-price="79.99"
  data-currency="USD"
  ...
>
```

Якщо дані не збігаються з очікуванням, перевірити Liquid шаблон.

### 2. Forcefully reload конфігуратора

```javascript
// В console
const container = document.getElementById('r3f-root');
const { initR3FConfigurator } = await import('/assets/r3f-configurator.js');
await initR3FConfigurator(container);
```

### 3. Inspect 3D scene

Якщо Three.js scene доступна глобально:

```javascript
// Деякі налаштування R3F поточної scene
window.R3F_SCENE  // if exposed
```

---

## Завершення локальної сесії

1. Зупинити `npm run build:theme:watch` (Terminal 1)
2. Зупинити `shopify theme dev` (Terminal 2)
3. Опціонально: видалити draft theme з Shopify (admin → Themes)

---

## Наступний крок: CI/CD

Після успішного локального тестування, переходимо до Git Actions workflow для автоматизованого build + push на staging theme.

Дивись: [CI_AUTOMATION.md](CI_AUTOMATION.md)
