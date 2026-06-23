# Ризики та Стабілізація R3F Storefront

## 1. Розмір бандла (Three.js + R3F)

### Ризик
- `r3f-configurator.js` може бути **1.5–3 MB** (non-gzipped)
- Three.js, @react-three/fiber, @react-three/drei = ~90% розміру
- На повільних 3G connections > 5 секунд load time

### Мітигація

#### A. Code Splitting & Lazy Loading

```typescript
// storefront-entry.tsx

const StorefrontApp = lazy(() => import('./StorefrontConfiguratorApp'));

export function initR3FConfigurator(container: HTMLElement) {
  const root = ReactDOM.createRoot(container);
  
  root.render(
    <Suspense fallback={<LoadingSpinner />}>
      <StorefrontApp props={props} />
    </Suspense>
  );
}
```

#### B. Динамічний Import Three.js

```typescript
// Завантажувати Three тільки якщо контейнер на сторінці
if (document.getElementById('r3f-root')) {
  const { initR3FConfigurator } = await import(/* webpackChunkName: "r3f" */ './storefront-entry.tsx');
  initR3FConfigurator(container);
}
```

#### C. CDN для відокремлених залежностей

Якщо можливо, завантажувати Three.js із CDN:

```html
<!-- realize-test/snippets/r3f-configurator.liquid -->

<script src="https://unpkg.com/three@r169/build/three.min.js"></script>
<script type="module">
  // r3f-configurator.js буде меншим без Three
  import { initR3FConfigurator } from '/assets/r3f-configurator.js';
</script>
```

#### D. Моніторинг

Додати у GitHub Actions:

```yaml
- name: Check bundle size
  run: |
    SIZE=$(du -h realize-test/assets/r3f-configurator.js | cut -f1)
    if (( ${SIZE%M} > 2 )); then
      echo "⚠️ Bundle size: $SIZE (> 2MB recommended limit)"
      echo "Consider optimizations in vite.storefront.config.ts"
    fi
```

---

## 2. CORS & CDN-доступність текстур/моделей

### Ризик
- Texture файли / 3D моделі можуть знаходитись на іншому домені (CDN)
- CORS headers можуть заблокувати завантаження
- WebGL контекст не дозволяє читати non-CORS текстури

### Мітигація

#### A. Переконатись що CDN дозволяє CORS

```javascript
// Перевірити CORS header у network tab
const response = await fetch('https://cdn.example.com/texture.jpg');
// Очікується: Access-Control-Allow-Origin: *
```

#### B. Hosted моделі на тому ж домені

```
realize-test/public/models/federer_calcio/
├── model.glb
├── textures/
│   ├── color.jpg
│   ├── normal.jpg
│   └── roughness.jpg
```

#### C. Fallback до більш низької якості якщо CORS fails

```typescript
const loadTexture = async (url: string) => {
  try {
    return await textureLoader.loadAsync(url);
  } catch (error) {
    console.warn(`Failed to load texture from ${url}, using fallback`);
    return defaultFallbackTexture;
  }
};
```

---

## 3. Fallback якщо метаполе моделі не існує

### Ризик
- Продукт може не мати `custom.id` метаполе
- R3F контейнер не буде монтуватись, але商品 повинен залишатись для покупки

### Мітигація

#### A. Перевірка в Liquid (вже зроблено)

```liquid
{% if closest.product.metafields.custom.id %}
  {% render 'r3f-configurator', ... %}
{% else %}
  {% render 'product-information-content', ... %}
{% endif %}
```

#### B. Метаполе дефолти для нових продуктів

Додати скрипт для автоматичного додання базового `custom.id`:

```graphql
mutation SetCustomId($input: ProductInput!) {
  productUpdate(input: $input) {
    product {
      id
      metafields(first: 10) {
        edges {
          node {
            key
            value
          }
        }
      }
    }
  }
}
```

#### C. Admin app вказівка

У `pupupu` додати UI для встановлення метаполя:

```typescript
// pupupu/app/routes/app/route.tsx
// Додати sidebar: "Set up configurator for product"
// → вибрати продукт → встановити custom.id → save
```

---

## 4. Контракт даних (data-* атрибути)

### Ризик
- Якщо структура data-атрибутів змінюється, старші versions контейнера можуть зламатись
- Liquid шаблон та R3F entry повинні бути синхронізовані

### Мітигація

#### A. Версіонування контракту

```liquid
<!-- snippets/r3f-configurator.liquid -->
<!-- Data Contract v1.0 -->
<div id="r3f-root"
  data-contract-version="1.0"
  data-model-id="..."
  ...
>
```

```typescript
// storefront-entry.tsx
const CONTRACT_VERSION = '1.0';

export function initR3FConfigurator(container: HTMLElement) {
  const version = container.dataset.contractVersion;
  if (version !== CONTRACT_VERSION) {
    console.warn(`⚠️ Contract mismatch: ${version} != ${CONTRACT_VERSION}`);
    // Можна додати migration logic
  }
}
```

#### B. Документування (вже зроблено)

- [R3F_STOREFRONT_ROUTING.md](R3F_STOREFRONT_ROUTING.md) — контракт маршрутизації
- [CART_INTEGRATION.md](CART_INTEGRATION.md) — line item properties

#### C. Тестування контракту

```typescript
// e2e test
it('should initialize R3F with valid contract', () => {
  const container = document.createElement('div');
  container.id = 'r3f-root';
  container.dataset.modelId = 'federer_calcio';
  container.dataset.productHandle = 'test-product';
  
  initR3FConfigurator(container);
  
  // Перевірити що контейнер містить canvas
  expect(container.querySelector('canvas')).toBeDefined();
});
```

---

## 5. Performance: WebGL context limit

### Ризик
- Браузер має ліміт кількості WebGL контекстів (зазвичай 8–16)
- На сторінці з кількома R3F контейнерами контексти можуть вичерпатись

### Мітигація

#### A. Один контекст на сторінку

```typescript
// storefront-entry.tsx
// Переконатись що R3F монтується лише 1 раз

let instanceCount = 0;
export function initR3FConfigurator(container: HTMLElement) {
  if (instanceCount > 0) {
    console.warn('R3F already initialized, skipping');
    return;
  }
  instanceCount++;
  // ... mount
}
```

#### B. Canvas reuse (якщо потрібна інформація про варіанти)

```typescript
// Один Canvas, різні моделі
// Змінювати 3D сцену через React state, а не створювати нові контексти
```

---

## 6. Браузер сумісність

### Ризик
- WebGL 2 не підтримується в деяких старих браузерах (IE11, старі мобільні)
- Three.js v169+ вимагає ES2020

### Мітигація

#### A. Feature detection

```typescript
const canvas = document.createElement('canvas');
const gl = canvas.getContext('webgl2');
if (!gl) {
  console.warn('WebGL 2 not supported, showing fallback');
  container.innerHTML = '<img src="fallback-image.jpg" />';
  return;
}
```

#### B. Polyfills (якщо потрібно IE support)

```html
<script src="https://cdn.jsdelivr.net/npm/es-module-shims@1/dist/es-module-shims.js"></script>
```

#### C. Graceful degradation

```liquid
<!-- snippets/r3f-configurator.liquid -->
{% if request.user_agent contains "MSIE" or request.user_agent contains "Trident" %}
  <!-- Show static image for IE -->
  <img src="{{ product.featured_image | image_url: width: 600 }}" />
{% else %}
  <!-- R3F for modern browsers -->
  <div id="r3f-root" ...></div>
{% endif %}
```

---

## 7. Memory leaks

### Ризик
- React + Three.js можуть накопичувати memory, якщо не чистити ресурси
- Texture объекти / geometries не будуть видалені після unmount

### Мітигація

#### A. Proper cleanup в React

```typescript
// StorefrontApp.tsx
useEffect(() => {
  return () => {
    // Clean up Three.js resources
    scene.traverse((child) => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) child.material.dispose();
    });
  };
}, []);
```

#### B. Canvas disposable

```typescript
// При unmount контейнера, dispose WebGL context
useEffect(() => {
  return () => {
    gl?.dispose();
    renderer?.dispose();
  };
}, [gl, renderer]);
```

---

## 8. Mobile Performance

### Ризик
- 3D рендеринг на мобільних пристроях дорогий (батерея, тепло)
- Low-end devices можуть мати 2-3 FPS

### Мітигація

#### A. Адаптивна якість

```typescript
import { useDetectGPU } from '@react-three/drei';

const gpu = useDetectGPU();

const qualitySettings = {
  low: { pixelRatio: 0.5, shadowMapSize: 512 },
  medium: { pixelRatio: 1, shadowMapSize: 1024 },
  high: { pixelRatio: 2, shadowMapSize: 2048 },
};

const settings = qualitySettings[gpu.tier];
```

#### B. Disable animation on low-end

```typescript
if (gpu.tier === 'low') {
  // Disable auto-rotate, reduce shadow updates
  controls.autoRotate = false;
}
```

---

## 9. SEO & Meta Tags

### Ризик
- R3F контейнер замінює product image/video
- Search bots можуть не бачити product preview

### Мітигація

#### A. Зберегти мета-теги

```liquid
<!-- snippets/r3f-configurator.liquid -->
{% unless request.design_mode %}
  <!-- Hidden image for SEO -->
  <meta property="og:image" content="{{ product.featured_image | image_url: width: 1200 }}" />
  <img src="{{ product.featured_image }}" alt="{{ product.title }}" style="display: none;" />
{% endunless %}
```

#### B. Structured data

```liquid
{{ product | structured_data }}
```

---

## 10. Monitoring & Logging

### Рекомендації

#### A. Сервер-side сніміння ошибок

```typescript
// storefront-entry.tsx
window.addEventListener('error', (event) => {
  // Send to error tracking service
  fetch('/api/errors', {
    method: 'POST',
    body: JSON.stringify({
      message: event.message,
      stack: event.error?.stack,
      timestamp: new Date().toISOString(),
    }),
  });
});
```

#### B. Performance monitoring

```typescript
// Track load time
const startTime = performance.now();
initR3FConfigurator(container).then(() => {
  const loadTime = performance.now() - startTime;
  console.log(`R3F initialized in ${loadTime.toFixed(2)}ms`);
});
```

#### C. Analytics

```typescript
// Track конфігуратор usage
const handleAddToCart = async (config) => {
  // Track event
  gtag('event', 'r3f_add_to_cart', {
    model_id: config.modelId,
    color: config.color,
  });
};
```

---

## Чек-ліст стабілізації

- [ ] Bundle size < 2 MB (gzipped)
- [ ] CORS headers для всіх зовнішніх ресурсів
- [ ] Fallback для non-WebGL браузерів
- [ ] Memory leaks тестовані (heap snapshots)
- [ ] Mobile GPU detection + quality scaling
- [ ] Error tracking in production
- [ ] Performance monitoring active
- [ ] SEO meta-tags preserved
- [ ] Data contract versioned & documented
- [ ] Load time < 3s на 3G

---

## Резюме

Основні ризики:
1. **Bundle size** → code splitting, CDN
2. **CORS** → домашня хостинг або правильні headers
3. **Fallback** → graceful degradation для всіх сценаріїв
4. **Memory** → proper React cleanup
5. **Performance** → адаптивна якість для мобільних

Усі мітигаційні стратегії мають бути тестовані перед production deployment.
