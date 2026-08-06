# Деплой: VPS + Docker + Coolify

Супровід до [DEPLOYMENT-AUDIT.md](./DEPLOYMENT-AUDIT.md). Тут — як задеплоїти та скільки це коштує в ресурсах.

Усі числа нижче заміряні на цьому проєкті, а не взяті з типових рекомендацій. Метод указано біля кожного.

---

## 1. Ресурси

### Заміряно

| Показник                     | Значення                 | Як заміряно                                    |
| ---------------------------- | ------------------------ | ---------------------------------------------- |
| Пік RAM під час `pnpm build` | **2.70 ГБ**              | `/usr/bin/time -l pnpm build`                  |
| Час збірки                   | 19 с                     | там само (Apple Silicon, 7 воркерів)           |
| RAM сервера в спокої         | **166 МБ**               | `ps -o rss` на `node server.js` (standalone)   |
| RAM сервера після SSR        | **170 МБ**               | після запитів на `/` і сторінку конфігуратора  |
| `.next/standalone`           | 52 МБ                    | `du -sh`                                       |
| `.next/static`               | 7.3 МБ                   | `du -sh`                                       |
| `public/`                    | 554 МБ                   | models 498 + ghostscript 30 + png 25 + svg 1.4 |
| Трафік на 1 відкриття        | **3.65 МБ** / 25 запитів | `performance.getEntriesByType('resource')`     |
| — з них 3D-моделі            | 2.28 МБ                  | там само (`model.glb` сам по собі лише 648 КБ) |
| — з них JS/CSS               | 1.37 МБ                  | там само                                       |

### Розмір образу

Базовий `node:22-bookworm-slim` (~200 МБ) + standalone 52 МБ + static 7.3 МБ + `public/` 554 МБ ≈ **≈850 МБ**.

Домінує `public/`. Це і є головний важіль, якщо образ треба зменшити — див. §5.

### Рекомендація по VPS

**Збірка на тому ж сервері (як Coolify робить за замовчуванням):**

| Ресурс | Мінімум | Комфортно |
| ------ | ------- | --------- |
| vCPU   | 2       | 4         |
| RAM    | 4 ГБ    | 8 ГБ      |
| Диск   | 60 ГБ   | 80–160 ГБ |

RAM визначає збірка (2.7 ГБ піку), не рантайм. На 4 ГБ збірка проходить, але без запасу — обовʼязково додайте 2–4 ГБ swap, інакше OOM-killer прибере процес десь на середині. `NODE_OPTIONS=--max-old-space-size=3584` у Dockerfile уже стоїть.

Диск заповнюють не дані застосунку, а Docker: образ ~850 МБ × кілька збережених версій + build cache + шар з `node_modules` (1.1 ГБ у builder-стадії). Налаштуйте `docker system prune` за розкладом або обмежте кількість версій у Coolify.

**Якщо збирати в CI і пушити готовий образ у registry:** 2 vCPU / 2 ГБ RAM / 40 ГБ достатньо. Рантайм тримається в 170 МБ.

Конкретно: Hetzner CPX31 (4 vCPU / 8 ГБ / 160 ГБ NVMe) закриває все з запасом. CPX21 (3 vCPU / 4 ГБ / 80 ГБ) — робочий мінімум зі swap.

### Трафік

3.65 МБ на одне відкриття конфігуратора. Перегляд дизайнів додає зверху: SVG у `public/models/*/designs/` сягають 7.5 МБ кожен і тягнуться на вибір користувача.

Груба оцінка: 1 000 відвідувань на день ≈ 4–10 ГБ/добу ≈ **120–300 ГБ/місяць**. У Hetzner/Contabo це в межах включеного ліміту; на провайдерах із платним egress рахуйте окремо.

### Пік памʼяті на генерації PDF

Це єдине важке серверне навантаження. UV-атласи — 2048×2048 (`PRINT_ATLAS_WIDTH`), тобто ~16 МБ у розпакованому вигляді кожен; `sharp` їх декодує, `@react-pdf/renderer` буферизує два документи цілком.

Точно заміряти без реального замовлення не вийшло. Оцінка — **+200…500 МБ транзитом на замовлення**, звідси ліміт `2G` у `docker-compose.yml`. Заміряйте на стейджі першим же тестовим замовленням і підженіть ліміт під факт.

---

## 2. Що додано в репозиторій

| Файл                 | Призначення                                                            |
| -------------------- | ---------------------------------------------------------------------- |
| `Dockerfile`         | Багатостадійна збірка на `node:22-bookworm-slim`                       |
| `.dockerignore`      | Виключає `.next` (у dev розростався до 2.6 ГБ), `node_modules`, `.env` |
| `docker-compose.yml` | Для Coolify build pack «Docker Compose»                                |
| `app/api/health`     | Health-check, який навмисне не звертається до Shopify                  |

`next.config.ts` тепер має `output: 'standalone'`.

> **Не перевірено:** Docker на машині, де готувався цей деплой, не встановлено, тож сам образ не збирався. Перевірено інше — те, що Dockerfile відтворює: `output: 'standalone'` збирається, `public/` копіюється поруч, `node server.js` стартує, `/api/health` відповідає, конфігуратор рендериться з реальними даними Shopify. Першу збірку образу проженіть на стейджі.

---

## 2a. Чи потрібен Docker для Coolify?

**Ні, не обовʼязковий.** Coolify вміє збирати Next.js через Nixpacks — без жодного Dockerfile. Але для цього проєкту вибір не косметичний: він визначає, чи лишається `output: 'standalone'` у `next.config.ts`.

|                                 | **Docker Compose** (рекомендовано) | **Nixpacks** (без Docker)   |
| ------------------------------- | ---------------------------------- | --------------------------- |
| `output: 'standalone'`          | лишається                          | **треба прибрати**          |
| Команда запуску                 | `node server.js`                   | `pnpm start` (`next start`) |
| Том для ISR-кешу                | у compose                          | руками в Persistent Storage |
| Health-check, ліміти RAM        | у compose                          | руками в UI                 |
| Версія Node / glibc для `sharp` | зафіксована                        | на розсуд Nixpacks          |
| Складність                      | треба розуміти compose             | пара кліків                 |

Заміряно: `next start` при ввімкненому `standalone` **виводить попередження** —

```
⚠ "next start" does not work with "output: standalone" configuration.
  Use "node .next/standalone/server.js" instead.
```

— і при цьому фактично віддає все коректно (перевірив: `/` → 200, CSS → 200, JS-чанк → 200, `model.glb` → 200). Тобто зараз воно працює, але Next прямо називає цю комбінацію непідтримуваною. Покладатись на неї в проді не варто: мінорний реліз Next може її прибрати без попередження.

Тому: **або Docker зі `standalone`, або Nixpacks без нього. Не змішувати.**

### Якщо обираєте Nixpacks

1. Приберіть `output: 'standalone'` з `next.config.ts` (рядок і коментар над ним).
2. Coolify → Build Pack: **Nixpacks**. Build command `pnpm build`, start command `pnpm start`, порт `3000`.
3. Persistent Storage → додайте том на `/app/.next/cache` (ISR).
4. Змінні — так само, як у §3.2, з тим самим поділом на build-time і runtime.

Поле `packageManager: "pnpm@11.20.0"` уже додано в `package.json` — без нього Nixpacks обирає версію pnpm сам і може не подужати `lockfileVersion: 9.0`.

Функціонально обидва шляхи дають однаковий застосунок. Docker обраний основним через `sharp` (нативний модуль, передбачуваніший на зафіксованому glibc-образі), декларативні томи/ліміти й відтворюваність збірки.

---

## 3. Coolify: покроково

### 3.1. Створити ресурс

New Resource → Application → ваш Git-репозиторій → Build Pack: **Docker Compose**, файл `docker-compose.yml`.

(Build Pack «Dockerfile» теж працює, але тоді томи й health-check доведеться налаштовувати руками в UI.)

### 3.2. Змінні оточення

Заповніть за [.env.example](./.env.example). Критичні:

```
SHOPIFY_ENABLED=true
SHOPIFY_STORE_DOMAIN=<store>.myshopify.com
SHOPIFY_API_VERSION=2025-01
SHOPIFY_API_MODE=storefront
SHOPIFY_STOREFRONT_ACCESS_TOKEN=<...>

SHOPIFY_ADMIN_CLIENT_ID=<...>
SHOPIFY_ADMIN_CLIENT_SECRET=<...>

SHOPIFY_FRAME_ANCESTORS=https://client-shop.com,https://www.client-shop.com
NEXT_PUBLIC_SHOPIFY_PARENT_ORIGINS=https://client-shop.com,https://www.client-shop.com
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=<store>.myshopify.com

APP_PUBLIC_ORIGIN=https://configurator.client-shop.com
```

> ⚠️ **`SHOPIFY_FRAME_ANCESTORS` і `NEXT_PUBLIC_SHOPIFY_PARENT_ORIGINS` тепер обовʼязкові для вбудовування.** Раніше застосунок довіряв домену з query-параметра `?host=`; це закрито (див. аудит §3.2), і єдине джерело дозволених origin-ів — ці змінні. Якщо їх не заповнити, вбудований у тему конфігуратор не завантажиться, а `postMessage` мовчатиме.
>
> Обидві мають містити **однаковий** список. `NEXT_PUBLIC_*` вшивається в бандл під час `next build`, тому в Coolify вони мають бути задані **до** першої збірки — не тільки в рантаймі.

Позначте у Coolify як **Build Variable** (доступні на етапі збірки): усі `NEXT_PUBLIC_*` і `SHOPIFY_ENABLED`, `SHOPIFY_STORE_DOMAIN`, `SHOPIFY_API_VERSION`, `SHOPIFY_API_MODE`, `SHOPIFY_STOREFRONT_ACCESS_TOKEN`, `SHOPIFY_HOME_COLLECTION_HANDLES` — головна сторінка прегенерується під час збірки.

`SHOPIFY_ADMIN_CLIENT_SECRET` та `SHOPIFY_ADMIN_ACCESS_TOKEN` — **тільки рантайм**. Build-аргументи лишаються в історії образу.

`DEV_ROUTES_ENABLED` на проді не задавайте взагалі.

### 3.3. Домен і проксі

Задайте домен у Coolify (Traefik сам візьме Let's Encrypt). Порт контейнера — `3000`.

Не додавайте в проксі:

- **`Content-Security-Policy`** — його вже віддає `proxy.ts`. Два CSP-заголовки застосовуються як перетин, і статичний заголовок від проксі викине `admin.shopify.com`, зламавши редактор теми Shopify.
- **`X-Frame-Options`** — у застарілих браузерах перекриє `frame-ancestors` і заблокує iframe.

Перевірте після деплою, що Traefik їх не додає своїми middleware.

### 3.4. Том для ISR-кешу

У compose уже є `isr-cache:/app/.next/cache`. Без нього кожен редеплой стартує з холодного кешу і перша хвиля запитів іде в Shopify.

### 3.5. Вебхук Shopify

Створіть підписку `orders/create` на `https://<домен>/api/webhooks/orders-create`.

**Через Admin API застосунку** — тоді HMAC підписується `SHOPIFY_ADMIN_CLIENT_SECRET`, як очікує код. Якщо додати вебхук вручну в UI Shopify, він підписується власним signing secret і всі доставки повернуть 401.

### 3.6. Egress

Сервер має мати вихід на `*.myshopify.com`, `cdn.shopify.com`, `shopify-staged-uploads.storage.googleapis.com` і — поки не зроблено self-hosting шрифтів — `fonts.gstatic.com` та `fonts.googleapis.com`.

---

## 4. Перевірка після деплою

```bash
# 1. Health
curl -s https://<домен>/api/health

# 2. CSP: чужий origin НЕ має зʼявлятись у списку
curl -sD - -o /dev/null "https://<домен>/?host=evil-attacker.com" | grep -i content-security

# 3. X-Frame-Options не має бути взагалі
curl -sD - -o /dev/null "https://<домен>/" | grep -i x-frame-options

# 4. /dev/* закриті
curl -s -o /dev/null -w "%{http_code}\n" https://<домен>/dev/last-order-export   # 404

# 5. Неіснуючий товар
curl -s -o /dev/null -w "%{http_code}\n" https://<домен>/fake-collection/fake    # 404

# 6. Каталог реально завантажився (не порожній)
curl -s https://<домен>/ | grep -c 'href="/completo'
```

Потім вручну: відкрити конфігуратор у темі магазину через iframe, дійти до оформлення, зробити тестове замовлення і переконатись, що обидва PDF зʼявились у метаполях замовлення протягом ~хвилини.

---

## 5. Якщо образ у 850 МБ заважає

`public/models` — 498 МБ, і 39 МБ з 40 МБ на модель припадає на теку `designs/` (SVG до 7.5 МБ штука), а не на саму геометрію: `model.glb` важить 648 КБ.

Варіанти, за зростанням зусиль:

1. **Лишити як є.** Простіше й працює. Кожна збірка шле ~554 МБ build-контексту і додає ~850 МБ шар.
2. **Винести `designs/` у том**, змонтований у `/app/public/models`. Образ падає до ~350 МБ, але асети треба заливати окремо від деплою.
3. **Перенести `public/models` на CDN/S3** і переписати шляхи на абсолютні URL. Найкращий результат — знімає з VPS і диск, і трафік — але це зміна в коді, не в інфраструктурі.

Заголовки `Cache-Control: immutable` для `/models`, `/ghostscript`, `/png`, `/svg` уже налаштовані в `next.config.ts`, тож повторні відвідування асети не перекачують.

---

## 6. Відомі відкриті питання

Не блокує деплой, але має бути в беклозі:

- **Шрифти з Google** — і в браузері (`src/fonts/fonts.css`), і на сервері під час генерації PDF (`registerPdfFont`). Аудит §2.2.
- **Вебхук працює через `after()`, не через чергу.** Витримує 5-секундний ліміт Shopify і дедуплікує ретраї, але робота не переживе рестарт контейнера посеред обробки й не масштабується на кілька інстансів. Аудит §2.1.
- **Rate limit — у памʼяті процесу.** Гальмує випадкове зловживання, не цілеспрямоване. Справжній ліміт — на рівні проксі.
- **`cartCreate` створює окремий кошик**, який не бачить кошика теми. Продуктове рішення, аудит §3.6.
- **Ціна `1.000.000,00 €`** на `federer_calcio` у поточному магазині — очевидно тестове значення. Перевірте ціни перед запуском.
- **`.env` містить `SHOPIFY_HOSTS`, `SHOPIFY_SHOPS`, `SHOPIFY_SHOP_REALIZESPORT_*`** — цей код таких змінних не читає взагалі. Схоже на залишок від мультимагазинної схеми, якої в цій версії немає. Або приберіть, або зʼясуйте, звідки вони.
