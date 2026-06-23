# CI/CD Автоматизація деплою Theme

## Огляд

Два GitHub Actions workflows автоматизують build R3F бандла та push на Shopify theme:

1. **theme-deploy-staging.yml** — автоматичний деплой на staging при push в main
2. **theme-deploy-production.yml** — manual trigger для production

---

## Налаштування GitHub Secrets

Перейти до: **Settings** → **Secrets and variables** → **Actions**

Додати наступні secrets:

### 1. `SHOPIFY_STORE_DOMAIN`
```
mystore.myshopify.com
```
Домен вашого Shopify development/production store.

### 2. `SHOPIFY_THEME_ACCESS_PASSWORD`
```
shpat_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
**Shopify API access token** для theme push.

Як отримати:
1. Shopify Admin → Settings → Apps and integrations → Develop apps
2. Якщо немає: Create an app
3. App name: "Theme Deployment"
4. Обирі Admin API scopes: `write_themes` + `read_themes`
5. Install app, скопіювати **Admin API access token**

### 3. `SHOPIFY_STAGING_THEME_ID`
```
123456789012
```
ID **staging/draft theme** у Shopify.

Як знайти:
1. Shopify Admin → Online Store → Themes
2. Праворуч від draft theme — три точки → Edit code
3. URL: `themes/123456789012/`
4. `123456789012` — це Theme ID

### 4. `SHOPIFY_PRODUCTION_THEME_ID`
```
987654321098
```
ID **production theme** (live theme).

Як знайти: Аналогічно, але для live (published) theme.

---

## Запуск workflows

### Staging Deployment (автоматичний)

Тригериться при push в `main`:

```bash
git push origin main
```

Workflow:
1. Checkout код
2. Встановити dependencies
3. `npm run build:theme` (компіляція R3F бандла)
4. Перевірити output (`r3f-configurator.js`, `.css`)
5. `shopify theme push` на staging theme
6. Коментар в PR (якщо є)

### Production Deployment (manual)

1. **GitHub Actions** → **Deploy Theme to Production**
2. **Run workflow**
3. Опціонально: override `SHOPIFY_PRODUCTION_THEME_ID` у form
4. Схвалити та запустити

---

## Структура Workflow

### Build Stage

```yaml
- Install Node.js + dependencies
- npm run build:theme (vite build -c vite.storefront.config.ts)
- Verify output (ls -lh realize-test/assets/r3f-configurator.*)
```

### Deploy Stage

```yaml
- Setup Shopify CLI + auth
- shopify theme push --path realize-test --theme <THEME_ID> --force
```

### Post-Deploy

```yaml
- GitHub comment (for PRs): "✅ Theme deployed to staging"
- Logs: Success/Failure notifications
```

---

## Ошибки и Troubleshooting

### ❌ "Build failed: Module not found"

Перевірити що у `pupupu/`:
- `npm ci` успішно встановив залежності
- `vite.storefront.config.ts` має коректні paths
- `src/storefront-entry.tsx` існує

### ❌ "Shopify authentication failed"

1. Перевірити secrets:
   - `SHOPIFY_STORE_DOMAIN` формат: `mystore.myshopify.com`
   - `SHOPIFY_THEME_ACCESS_PASSWORD` дійсний (не expired)

2. Переконатись що API access token має scopes:
   - `write_themes`
   - `read_themes`

### ❌ "Theme push failed: Theme not found"

1. Перевірити Theme ID:
   ```bash
   shopify theme list --store mystore.myshopify.com
   ```

2. Оновити secrets з коректним ID

### ❌ "Asset files not found (404)"

Перевірити що `npm run build:theme` успішно скомпілював:

```bash
ls -lh realize-test/assets/r3f-configurator.*
```

Якщо файлів немає:
- Перевірити `vite.storefront.config.ts` output dir
- Перевірити консоль для vite build errors

---

## Моніторинг

### GitHub Actions Dashboard

https://github.com/your-repo/actions

- Переглядати historу builds
- Перевірити logs для кожного workflow run
- Відповідати на failures

### Shopify Theme Updates

https://your-store.myshopify.com/admin/themes

- Переглядати draft theme версії
- Перевірити що `r3f-configurator.js` + `.css` у Assets
- Тестувати зміни на staging перед production

---

## Best Practices

1. **Test locally first**
   ```bash
   npm run build:theme:watch  # Terminal 1
   shopify theme dev         # Terminal 2
   # Test у браузері перед push
   ```

2. **Use staging for validation**
   - Staging автоматично оновлюється при push в `main`
   - Тестувати changes перед production merge

3. **Production is manual**
   - Manual workflow trigger запобігає accidental pushes
   - Дозволяє більше контролю перед live deploy

4. **Monitor bundle size**
   - Отримувати notifications якщо `r3f-configurator.js` > 1MB
   - Розглянути code splitting / lazy loading

---

## Advanced: Conditional Deployments

Якщо потрібно деплоїти тільки на staging при PR, але на production при merge:

```yaml
on:
  pull_request:
    types: [opened, synchronize]
  push:
    branches: [main]
    paths: [pupupu/src/**, realize-test/**]

jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Determine target theme
        id: target
        run: |
          if [[ "${{ github.event_name }}" == "pull_request" ]]; then
            echo "THEME_ID=${{ secrets.SHOPIFY_STAGING_THEME_ID }}" >> $GITHUB_OUTPUT
          else
            echo "THEME_ID=${{ secrets.SHOPIFY_PRODUCTION_THEME_ID }}" >> $GITHUB_OUTPUT
          fi

      - name: Deploy to theme
        run: |
          shopify theme push --theme ${{ steps.target.outputs.THEME_ID }}
```

---

## Резюме

✅ Staging автоматично оновлюється при push в `main`  
✅ Production деплоя контролюється manual workflow  
✅ Secrets забезпечують безпеку API credentials  
✅ Logs дають visibility у кожен deploy  
