# Cart & Checkout Integration

## Концепція

При натиску "Add to Cart" у R3F конфігураторі на storefront дані конфігурації передаються у вигляді **line item properties** в Shopify Cart API.

---

## Line Item Properties

Структура properties яку R3F додає до cart item:

```json
{
  "Color": "navy",
  "Text Customization": "JOHN DOE",
  "Model ID": "federer_calcio",
  "Preview URL": "https://cdn.example.com/preview/...",
  "Configuration JSON": "{\"color\":\"navy\",\"text\":\"JOHN DOE\",\"...\":\"...\"}"
}
```

### Дефініції полів

| Property | Тип | Опис | Приклад |
|----------|-----|------|---------|
| **Color** | string | Основний колір гарменту | `navy`, `white`, `black` |
| **Text Customization** | string | Персоналізований текст | `JOHN DOE` |
| **Model ID** | string | ID моделі у локальній базі | `federer_calcio` |
| **Preview URL** | string | URL до preview зображення 3D | `https://cdn.../preview.jpg` |
| **Configuration JSON** | string | Повний стан конфіга (JSON) | `{...}` |

---

## Реалізація у storefront-entry.tsx

```typescript
const handleAddToCart = async (config: ConfiguratorState, variantId: string | number) => {
  const lineItemProperties = {
    'Color': config.color || '',
    'Text Customization': config.text || '',
    'Model ID': config.modelId,
    'Preview URL': config.previewUrl || '',
    'Configuration JSON': JSON.stringify(config),
  };

  // Shopify Cart API (Fetch API)
  const response = await fetch(`/cart/add.js`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      items: [
        {
          id: variantId,
          quantity: 1,
          properties: lineItemProperties,
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to add item to cart');
  }

  // Опціонально: перенаправити на /cart або показати notification
  window.location.href = '/cart';
};
```

---

## Cart Page Відображення

Сonсервативний підхід: Shopify нативно відображає **properties** у cart у вигляді додаткових рядків під назвою line item:

```
Product: Calcio Jersey
Variant: Navy, S
Color: navy
Text Customization: JOHN DOE
Model ID: federer_calcio
Price: $79.99 × 1
```

Якщо потрібно **приховувати** некі properties або кастомізувати вигляд, тема має:
1. Скрити properties з префіксом `_` (Shopify конвенція: `_property_name`)
2. Або перевпорядкувати вивід через кастомну `cart.liquid` логіку

---

## Checkout & Order Notes

На Shopify checkout контролем Shopify:
1. Line item properties **автоматично** передаються у order line items
2. Вони видимі в admin order details під "Line item properties"
3. Клієнт також бачить їх у order confirmation email (залежно від теми)

Для більш детальної інтеграції (наприклад, додавання custom fields на checkout):
- Требується Shopify Plus або Checkout Extensions API (більш складно)
- На даний момент базова інтеграція через properties достатня

---

## Fallback без R3F

Якщо R3F не завантажиться або буде ошибка:
1. Контейнер `#r3f-root` показує fallback текст
2. Продукт все ще доступний для покупки нативним способом (variant picker + Add to Cart)
3. Дані конфіга **не** передаються, покупка = базовий варіант

---

## Тестування

### 1. Додавання до cart з R3F
```bash
# 1. Відкрити product page у storefront
# 2. Переконатись що product має custom.id метаполе
# 3. Заповнити конфігуратор (вибрати колір, додати текст)
# 4. Натиснути "Add to Cart"
```

### 2. Перевірка properties у cart
```liquid
<!-- cart.liquid чи custom cart page -->
{% for item in cart.items %}
  {% if item.properties %}
    <ul>
      {% for prop in item.properties %}
        <li>{{ prop.first }}: {{ prop.last }}</li>
      {% endfor %}
    </ul>
  {% endif %}
{% endfor %}
```

### 3. Admin order verification
- Order → Line Items → Properties panel
- Побачити передані properties

---

## Майбутні поліпшення

1. **Checkout Extensions** — додати кастомні поля на checkout (Shopify Plus)
2. **Print integration** — передати preview URL в fulfillment системи (print-on-demand)
3. **3D model hosting** — зберігти 3D файли у S3 / Shopify Files для архіву
