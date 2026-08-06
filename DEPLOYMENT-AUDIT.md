# Аудит перед деплоєм на VPS + Docker

Дата: 2026-08-06 · Гілка: `e0f92c4 new fixes` · Next.js 16.2.9 / React 19.2.4 / pnpm 11.20.0

Усі твердження нижче перевірені на живому запуску (`pnpm dev`, `pnpm build`, `curl`, DevTools), а не виведені з читання коду. Де перевірка неможлива без реальних Shopify-ключів — це позначено явно.

---

## Статус виправлень

Документ написано як аудит стану на `e0f92c4`. Частину знахідок уже закрито — текст розділів лишено без змін, щоб було видно, що саме і чому міняли.

**Виправлено та перевірено:**

| §    | Що                                        | Перевірка                                                     |
| ---- | ----------------------------------------- | ------------------------------------------------------------- |
| 0    | Усі чотири гейти `pnpm validate`          | format ✅ · lint 0 errors ✅ · typecheck ✅ · architecture ✅ |
| 2.1  | Вебхук: `after()` + дедуплікація + ретраї | збірка проходить; черга лишається на майбутнє                 |
| 3.2  | Ін'єкція origin у `frame-ancestors`       | `?host=evil-attacker.com` більше не потрапляє в заголовок     |
| 3.3  | `postMessage(..., '*')`                   | тепер один перевірений origin з allowlist                     |
| 3.4  | Перевірка вхідного `event.origin`         | тепер безумовна                                               |
| 5.1  | `.env.example`                            | усі змінні, які читає код, + коментарі                        |
| 5.2  | `/dev/*`                                  | 404 без `DEV_ROUTES_ENABLED`                                  |
| 5.3  | Аплоад-роути                              | MIME allowlist, ліміти розміру, allowlist хоста, rate limit   |
| 5.6  | Hydration mismatch                        | консоль чиста                                                 |
| 5.7  | `metadata` + `lang`                       | `<title>` є, `lang="it"`                                      |
| 5.8  | Змінні шрифтів                            | усі 7 `--font-*` визначені на `<html>`                        |
| 5.9  | `notFound()`                              | неіснуючий товар → 404, `/api/configurator-product` → 404     |
| 5.10 | Правила fallback                          | `applyBusinessRules` тепер на обох гілках                     |
| 5.11 | `verify-range-overlap.tmp.mjs`            | видалено                                                      |
| 4    | `output: 'standalone'` + Dockerfile       | див. [DEPLOYMENT.md](./DEPLOYMENT.md)                         |

**Свідомо не чіпали** (потребує рішення або має ризик регресії): §2.2 self-hosting шрифтів, §3.6 інтеграція з кошиком теми, §5.4 fail-fast на етапі білду, §5.5 секрет вебхука (залежить від того, як створено підписку).

---

## 0. Стан збірки

| Перевірка                             | Результат                                    |
| ------------------------------------- | -------------------------------------------- |
| `pnpm install --frozen-lockfile`      | ✅ lockfile актуальний                       |
| `pnpm build`                          | ✅ exit 0                                    |
| `pnpm build` з `output: 'standalone'` | ✅ exit 0 — 52 МБ standalone + 7.3 МБ static |
| `pnpm test:unit`                      | ✅ 37/37                                     |
| `pnpm format:check`                   | ❌ 57 файлів                                 |
| `pnpm lint`                           | ❌ 1 error, 4 warnings                       |
| `pnpm typecheck`                      | ❌ 1 error                                   |
| `pnpm verify:architecture`            | ❌ 1 violation                               |

`pnpm validate` (агрегат чотирьох останніх) **падає**. Якщо CI на сервері викликає `validate` — деплой не пройде, хоча сам `build` здоровий.

### Помилки гейтів (усі механічні, ~15 хв роботи)

1. **format** — `pnpm format` виправляє все.
2. **lint** — `src/ui/components/atomic/molecules/ConfigurationSteps/DesignPatternCarousel/DesignPatternCarousel.tsx:7`, правило `sort-imports`. Виправляється `pnpm lint:fix`.
3. **typecheck** — `tests/visual/print-position-relation.spec.ts:5`, `TS2717`: глобальна декларація `__printRelationE2e` дублює ту, що вже є в `src/configurator/hooks/registerPrintRelationE2eDebug`. Треба імпортувати наявний тип замість повторного оголошення, а не переписувати структуру.
4. **architecture** — `src/configurator/gizmo/hitTestGizmoButton/hitTestGizmoButton.ts` використовує відносний імпорт замість `@`-аліаса.

---

## 1. Оцінка пропозиції «VPS + Docker + iframe»

### Висновок: напрямок правильний, обґрунтування — частково хибне

**VPS + Docker для цього проєкту — так, доречно.** Але не з тих причин, які названо у пропозиції. Важливо це розрізняти, бо з хибного обґрунтування випливають хибні пріоритети при налаштуванні сервера.

#### Що в обґрунтуванні не збігається з кодом

> «WASM/PDF-навантаження… знімає головні болі serverless (payload-ліміти, timeout, cold start важких WASM-модулів)»

Перевірено: **весь важкий WASM виконується в браузері, а не на сервері.**

- `src/utils/logoFile/converters/ghostscript/ghostscript.ts` — `'use client'`, працює у Web Worker
- `src/utils/logoFile/converters/imagemagick/imagemagick.ts` — `'use client'`
- `public/ghostscript/` (30 МБ) — це статика, яку тягне браузер

Тобто cold start WASM на сервері не існує як проблема. Так само й payload-ліміти: файли клієнта **не проходять через ваш сервер** — `src/utils/uploadCheckoutAssetsDirect/uploadCheckoutAssetsDirect.ts` вантажить їх напряму в Shopify staged targets із браузера. Ваш сервер лише видає та реєструє URL-и.

**Реальне серверне навантаження одне** — генерація PDF у вебхуку `orders-create`: `@react-pdf/renderer` + `sharp` у `app/api/webhooks/orders-create/generateOrderPdfs.tsx`. І тут є окрема проблема, яку VPS **не вирішує** — див. §2.1.

#### Справжні аргументи за VPS + Docker (їх варто використати замість наведених)

1. **554 МБ статики** (`public/models` 498 МБ, `ghostscript` 30 МБ, `png` 25 МБ). Це поза межами того, що комфортно жити в serverless-бандлі, і потребує нормальної віддачі файлів з диска/CDN.
2. **ISR-кеш має бути персистентним.** Головна сторінка збирається як `○ Static, Revalidate 1m, Expire 1y`. У serverless кеш ефемерний; на VPS `.next/cache` живе у volume.
3. **`sharp`** — нативний модуль, який значно передбачуваніше поводиться в контрольованому Docker-образі.
4. Контроль над заголовками, вихідною мережею та таймаутами — критично для §2.

---

## 2. Що змінити в самому підході (не в інфраструктурі)

### 2.1. Вебхук `orders-create` перевищить ліміт Shopify — і VPS цього не виправить

`app/api/webhooks/orders-create/route.ts` синхронно `await`-ить `generateOrderPdfs()` перед тим, як відповісти. Усередині: завантаження `config.json`, скачування всіх UV-зображень, растеризація через `sharp`, рендер **двох** PDF, вивантаження обох у Shopify Files, потім `setOrderMetafields`.

**Shopify обриває вебхук на 5 секундах** і вважає доставку невдалою. Це ліміт на боці Shopify — від хостингу він не залежить.

Наслідок: після ~5 с Shopify ретраїть вебхук, а перша спроба тим часом _продовжує_ працювати. Дві паралельні генерації на одне замовлення. Коментар у коді каже, що upsert-и ідемпотентні — але `uploadShopifyFile` створює **новий** файл, тож у Files з'являться дублікати, і `metafieldsSet` перезапише посилання випадковим із двох. Після 19 невдалих доставок Shopify вимикає підписку на вебхук.

Правильний патерн:

```ts
// route.ts — відповідаємо одразу, роботу виносимо з request-циклу
if (!verifyShopifyWebhookSignature(rawBody, receivedHmac, secret)) {
  return Response.json({ error: 'Invalid webhook signature.' }, { status: 401 });
}

// Дедуплікація: Shopify надсилає X-Shopify-Webhook-Id, стабільний між ретраями
const webhookId = request.headers.get('X-Shopify-Webhook-Id');
if (await alreadyProcessed(webhookId)) return Response.json({ ok: true });

await enqueueOrderPdfJob(order); // черга: BullMQ/Redis, або окремий воркер-контейнер
return Response.json({ ok: true }); // < 5 c гарантовано
```

Це найважливіша зміна в списку. Без неї магазин на проді буде втрачати PDF-и на замовленнях.

### 2.2. `registerPdfFont` тягне шрифти з `fonts.gstatic.com` під час генерації PDF

`src/utils/registerPdfFont/registerPdfFont.ts` реєструє Inter за прямими URL-ами на Google. Отже, генерація PDF на сервері залежить від зовнішньої мережі під час обробки замовлення. Якщо VPS за обмежувальним egress-фаєрволом або Google недоступний — PDF замовлення падає (і, через §2.1, зациклює ретраї).

Виправлення: покласти `.ttf` у репозиторій і реєструвати з диска:

```ts
Font.register({
  family: PDF_FONT_FAMILY,
  fonts: [
    { src: path.join(process.cwd(), 'assets/fonts/Inter-Regular.ttf'), fontWeight: 400 },
    { src: path.join(process.cwd(), 'assets/fonts/Inter-Bold.ttf'), fontWeight: 700 },
  ],
});
```

Те саме стосується `src/fonts/fonts.css:1` — `@import` семи сімейств із `fonts.googleapis.com` у рантаймі. Тут наслідок ще неприємніший: шрифти імені/номера на футболці (`FONTS_CONFIGURATION`) рендеряться в 3D і в PDF розкрою. Якщо Google-шрифти не завантажились, користувач бачить один шрифт, а на друк іде інший. Плюс render-blocking запит до третьої сторони та питання GDPR у ЄС. Перевести на `next/font/google` (self-hosting на етапі білду).

---

## 3. iframe: що вже зроблено правильно, а що зламане

Пропозиція описує механіку iframe так, ніби її треба будувати з нуля. Насправді вона **вже реалізована, і місцями краще, ніж у пропозиції** — але має дві діри.

### 3.1. ✅ CSP `frame-ancestors` — вже є, і динамічний

`proxy.ts` ставить заголовок на всі роути (`matcher: '/:path*'`), а `src/shopify/frameAncestors/frameAncestors.ts` збирає список із `'self'` + `admin.shopify.com` + `online-store-web.shopifyapps.com` + `SHOPIFY_STORE_DOMAIN` + `SHOPIFY_FRAME_ANCESTORS`. Це покриває і кастомний домен, і `*.myshopify.com`, і редактор теми.

> ⚠️ **Не додавайте статичний `Content-Security-Policy` в nginx поверх цього.** Два CSP-заголовки не об'єднуються — браузер застосовує кожен незалежно, тобто фактично перетин. Статичний nginx-заголовок із двома доменами магазину викине `admin.shopify.com` і зламає прев'ю в редакторі теми. Джерело істини має лишитись одне — `proxy.ts`.

### 3.2. 🔴 Ін'єкція довільного origin у `frame-ancestors`

`proxy.ts:8` бере `host` із query-параметра і передає у `buildShopifyFrameAncestors`, де `normalizeLiveHost` (`frameAncestors.ts:37`) лише перевіряє, що це схоже на хостнейм — без жодного allowlist.

Відтворення:

```bash
curl -sD - -o /dev/null "https://<app>/?host=evil-attacker.com" | grep -i content-security
# frame-ancestors 'self' https://admin.shopify.com https://online-store-web.shopifyapps.com https://evil-attacker.com;
```

Будь-хто вбудовує будь-яку сторінку застосунку у свій iframe. Захист від клікджекінгу, заради якого цей заголовок існує, вимкнено одним query-параметром.

Додатково: у Shopify параметр `host` — це **base64**, а не голий хостнейм. Код трактує його як хостнейм, тобто справжній Shopify-`host` цю гілку взагалі не проходить, і вона працює виключно як вектор атаки.

Виправлення — декодувати й звіряти з дозволеним переліком:

```ts
const normalizeLiveHost = (host?: string | null): string | null => {
  if (!host) return null;
  let decoded: string;
  try {
    decoded = atob(host); // Shopify надсилає base64
  } catch {
    return null;
  }
  const hostname = decoded.split('/')[0]?.toLowerCase() ?? '';
  const allowed = getShopifyAllowedFrameHosts(); // з ENV, не з запиту
  return allowed.includes(hostname) ? hostname : null;
};
```

### 3.3. 🔴 `postMessage(..., '*')` віддає checkout-URL будь-якому батьківському фрейму

`src/utils/embeddedUrlSync/embeddedUrlSync.ts:42` і `:58` шлють повідомлення з `targetOrigin: '*'`. Друге з них, `postEmbeddedCheckoutRedirect`, передає `checkoutUrl` — а він містить cart token, тобто bearer-креденшл на кошик покупця.

У зв'язці з §3.2 це повний ланцюжок: атакуючий фреймить застосунок (бо `frame-ancestors` він собі дозволив сам), слухає `message` — і отримує checkout-URL кожного покупця, який дійшов до оформлення.

Виправлення: передавати конкретний origin батька, а не `'*'`:

```ts
const parentOrigin = resolveExpectedParentOrigin(); // https://${shop}, з перевіреного джерела
if (!parentOrigin) return;
window.parent.postMessage({ ... }, parentOrigin);
```

### 3.4. 🟡 Вхідна перевірка origin вимикається без параметра `shop`

`src/hooks/useEmbeddedUrlSync/useEmbeddedUrlSync.ts:55` — перевірка `event.origin` загорнута в `if (shop)`. Немає `shop` у URL — origin не перевіряється взагалі, і будь-який батьківський фрейм може керувати навігацією застосунку через `router.replace()`. Перевірка має бути безумовною: немає відомого очікуваного origin → повідомлення відхиляється.

### 3.5. ✅ `X-Frame-Options` — зауваження слушне, код уже чистий

`grep` по `src`, `app`, `next.config.ts`, `proxy.ts` не знаходить жодного `X-Frame-Options`. Уточнення до формулювання пропозиції: за специфікацією, коли присутні обидва заголовки, `frame-ancestors` має пріоритет, а XFO ігнорується — «перебити CSP» він не повинен. Але практичний висновок правильний: **не додавайте його в nginx.** Багато готових nginx-конфігів і security-хардненінг-снипетів ставлять `X-Frame-Options: SAMEORIGIN` за замовчуванням — це зламає вбудовування в старих браузерах. Явно перевірити після налаштування сервера.

### 3.6. ⚠️ Порада «postMessage → `/cart/add.js`» до цього коду не застосовна

Діагноз щодо third-party cookies правильний як загальне правило, але цей застосунок **уже не використовує cookies для стану кошика.** Реальний потік:

```
браузер → Shopify staged upload (напряму, повз ваш сервер)
браузер → POST /api/checkout
   сервер → Storefront/Admin GraphQL cartCreate
   сервер → { checkoutUrl }
браузер → <a target="_top"> на checkoutUrl  (вихід з iframe)
```

Стан живе в `zustand` на клієнті, кошик створюється серверним `cartCreate`, редирект робиться в `_top`. Cookies в iframe не задіяні ніде — тож проблеми, яку пропозиція вирішує, тут немає, а перехід на `/cart/add.js` означав би переписування чекауту та втрату прямих staged-uploads.

**Але** в пропозиції є вірне зерно, лише сформульоване через хибну причину. `createCheckoutCart` робить `cartCreate` — тобто **завжди новий кошик**, який нічого не знає про кошик теми. Якщо покупець уже поклав щось у кошик магазину, а потім сконфігурував товар — на чекаут поїде тільки конфігуратор, решта загубиться.

Це продуктове рішення, не баг, і його треба ухвалити свідомо:

- **Варіант A (як зараз):** конфігуратор — окремий потік оформлення. Простіше, працює. Треба лише сховати іконку кошика теми на сторінці конфігуратора, щоб не вводити покупця в оману.
- **Варіант B:** інтеграція з кошиком теми через `/cart/add.js` — те, що пропонує автор. Дає єдиний кошик, але вимагає theme app extension, перенесення `attributes` у line item properties і збереження прямих staged-uploads. Суттєво більший обсяг робіт.

Рекомендація: **A** на перший запуск, **B** — тільки якщо клієнт продає ще щось окрім конфігурованого товару.

---

## 4. Docker: що перевірено практично

Standalone-збірка **працює** (перевірив, додавши `output: 'standalone'` і зібравши; конфіг повернуто у вихідний стан — робоче дерево чисте).

```
.next/standalone   52 МБ   ← містить server.js + node_modules (sharp і @react-pdf протрейсені коректно)
.next/static      7.3 МБ
```

### 🔴 Головна пастка: standalone **не копіює** `public/`

Перевірено на реальному артефакті:

```
.next/standalone/public/svg   32 КБ      ← усе, що потрапило
public/models                 498 МБ     ← НЕ скопійовано
public/ghostscript             30 МБ     ← НЕ скопійовано
public/png                     25 МБ     ← НЕ скопійовано
```

Наївний Dockerfile за офіційним прикладом Next дасть образ, у якому **жодна 3D-модель і жоден WASM не віддаються**. Збірка зелена, контейнер стартує, конфігуратор — суцільні 404. Копіювати `public/` треба явно.

### Що ще врахувати

| Пункт               | Дія                                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sharp` на Alpine   | `node:22-alpine` потребує musl-збірки. Простіше взяти `node:22-bookworm-slim` і не воювати з libvips.                                                                          |
| ISR-кеш             | `.next/cache` — у volume, інакше кожен деплой скидає revalidation.                                                                                                             |
| 498 МБ моделей      | Не запікати в образ. Volume + віддача через nginx, або винести на CDN/S3. Кожен ребілд інакше тягне ~550 МБ шару.                                                              |
| Заголовки кешу      | `next.config.ts` уже ставить `immutable` для `/models`, `/ghostscript`, `/png`, `/svg` — коректно. Якщо nginx віддає ці шляхи повз Next, заголовки треба продублювати в nginx. |
| Egress              | Потрібен вихід на `*.myshopify.com`, `cdn.shopify.com` і (доки не виправлено §2.2) `fonts.gstatic.com`.                                                                        |
| `allowedDevOrigins` | Тільки для dev, на прод не впливає.                                                                                                                                            |
| `.next/dev`         | 2.6 ГБ dev-кешу після `pnpm dev` — переконатись, що `.dockerignore` виключає `.next` цілком.                                                                                   |

### Приблизний Dockerfile

```dockerfile
FROM node:22-bookworm-slim AS base
RUN corepack enable

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# ARG-и, потрібні на етапі білду для прогенерації головної
ARG SHOPIFY_ENABLED
ARG SHOPIFY_STORE_DOMAIN
ARG SHOPIFY_STOREFRONT_ACCESS_TOKEN
RUN pnpm build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN useradd -m -u 1001 nextjs

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public   # ← ОБОВ'ЯЗКОВО, див. вище

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
```

`.dockerignore`:

```
node_modules
.next
.git
tests
playwright-report
test-results
*.tmp.mjs
```

---

## 5. Решта знахідок (з першого проходу, стисло)

### Блокери

1. **`.env.example` неповний.** Код читає `SHOPIFY_ADMIN_ACCESS_TOKEN`, `SHOPIFY_API_MODE`, `SHOPIFY_HOME_COLLECTION_HANDLES` — жодної немає у прикладі. Через порожній `SHOPIFY_STOREFRONT_ACCESS_TOKEN` `getShopifyApiMode()` мовчки перемикається на `admin` і падає на іншій змінній, ніж очікуєш (`src/shopify/config.ts:38`).
2. **`/dev/last-order-export` і `/dev/order-cutting-export` присутні в продакшн-білді без будь-якої авторизації.** Перший віддає останнє замовлення повністю: email, адресу доставки, повний JSON, лінки на макети. Витік персональних даних. Видалити або закрити авторизацією.
3. **Аплоад-роути без автентифікації.** `/api/checkout/assets/staged-targets` і `/register` приймають довільні `filename`/`fileSize`/`resourceUrl` без ліміту розміру, перевірки MIME й rate-limit. Дозволяє заливати сторонні файли в Shopify Files клієнта.
4. **Помилки Shopify глушаться скрізь.** Кожен виклик у `catch → fallback`. Білд щойно пройшов **успішно** з порожнім каталогом (`[shopify] Shopify is disabled; no home collections available`) і запік порожню головну. Таймаут `2.5 c` (`fetchShopifyWithTimeout.ts:1`) — при повільній відповіді Admin API на сервері білд буде зелений, а магазин порожній. Потрібен fail-fast на етапі білду.
5. **Секрет вебхука.** `route.ts:78` бере `SHOPIFY_ADMIN_CLIENT_SECRET`. Це вірно лише якщо підписку створено через API застосунку. Для вебхука, створеного в Shopify Admin UI, використовується окремий signing secret — усі доставки отримають 401.

### Функціональні

6. **Hydration mismatch на кожному відкритті конфігуратора** — атрибут `d` SVG-хвилі в `MainLoaderBackground` різний на сервері й клієнті. React логує error і не патчить DOM.
7. **Порожній `<title>`** — в `app/layout.tsx` немає `export const metadata`. Ні title, ні description, ні OG. Плюс `lang="en"` на італомовному сайті.
8. **Зламане підключення шрифтів.** `app/layout.tsx:16` проганяє `inter.variable`, `oswald.variable` тощо (це рядки `font-inter`, `font-oswald`, …) через `cn()`; `twMerge` вважає їх конфліктом `font-family` і лишає лише останній. Заміряно в браузері — на `<html>` визначено тільки `--font-black-ops-one`, решта п'ять порожні. Не пропускати їх через `cn`, або перейменувати так, щоб не виглядали як `font-*` утиліти.
9. **Немає 404.** `/nonexistent/nonexistent` віддає 200 і рендерить дефолтну модель `federer_calcio`. `/api/configurator-product?slug=bogus` віддає 200 з тілом `null`. `notFound()` не викликається ніде.
10. **Різні бізнес-правила на fallback-шляху.** `resolveConfiguratorProduct.ts:35` при вимкненому Shopify та в `catch` повертає `localProduct` **без** `withDefaultMinimumOrder()` і `mergeCollectionVolumeTerms()`. При збої Shopify мінімальні кількості й об'ємні знижки тихо змінюються; локально це видно як ціну `0,00 €`, яку можна додати в кошик.
11. **Сміття в репозиторії** — `verify-range-overlap.tmp.mjs` у корені. `README.md` — дефолтний від `create-next-app`, без інструкцій деплою.

---

## 6. Порядок робіт

**Спринт 1 — без цього не запускатись**

- [ ] §2.1 вебхук → черга + дедуплікація за `X-Shopify-Webhook-Id`
- [ ] §3.2 allowlist для `host` у `frameAncestors`
- [ ] §3.3 прибрати `targetOrigin: '*'`
- [ ] §5.2 закрити `/dev/*`
- [ ] §5.1 дописати `.env.example`, перевірити всі змінні на стейджі
- [ ] §4 Dockerfile з явним копіюванням `public/`

**Спринт 2 — до передачі клієнту**

- [ ] §2.2 self-host шрифтів (сервер + браузер)
- [ ] §5.3 авторизація/ліміти на аплоад-роути
- [ ] §5.4 fail-fast на етапі білду замість тихого порожнього каталогу
- [ ] §3.4 безумовна перевірка origin
- [ ] §5.5 підтвердити правильний секрет вебхука
- [ ] §0 зелений `pnpm validate`

**Спринт 3 — якість**

- [ ] §5.6 hydration mismatch
- [ ] §5.7 metadata + `lang="it"`
- [ ] §5.8 шрифтові змінні
- [ ] §5.9 `notFound()`
- [ ] §5.10 узгодити fallback-правила
- [ ] §3.6 ухвалити рішення A vs B щодо кошика теми
