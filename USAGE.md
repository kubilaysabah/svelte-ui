# @kubilaysabah/svelte-ui Kullanım Kılavuzu

## 📦 Kurulum

```bash
# npm ile
npm install @kubilaysabah/svelte-ui

# pnpm ile
pnpm add @kubilaysabah/svelte-ui

# yarn ile
yarn add @kubilaysabah/svelte-ui
```

## ⚡ Hızlı Başlangıç

### 1. CSS Dosyasını İçe Aktarın

Projenizin ana CSS dosyasına veya `app.html` dosyasına TailwindCSS'i dahil edin:

```css
/* app.css veya global.css */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

### 2. Component'leri Kullanın

```svelte
<script>
 import { Button } from '@kubilaysabah/svelte-ui';
</script>

<Button>Varsayılan Button</Button>
<Button variant="destructive">Destructive Button</Button>
<Button variant="outline" size="lg">Büyük Outline Button</Button>
```

## 🎨 Button Component

### Variant'lar

```svelte
<script>
 import { Button } from '@kubilaysabah/svelte-ui';
</script>

<!-- Tüm variant'lar -->
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

### Boyutlar

```svelte
<!-- Tüm boyutlar -->
<Button size="sm">Küçük</Button>
<Button size="default">Varsayılan</Button>
<Button size="lg">Büyük</Button>
<Button size="icon">🔥</Button>
```

### Props

| Prop       | Tip                                                                           | Varsayılan  | Açıklama                    |
| ---------- | ----------------------------------------------------------------------------- | ----------- | --------------------------- |
| `variant`  | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` | Button görünümü             |
| `size`     | `'default' \| 'sm' \| 'lg' \| 'icon'`                                         | `'default'` | Button boyutu               |
| `disabled` | `boolean`                                                                     | `false`     | Button'u devre dışı bırakır |
| `type`     | `'button' \| 'submit' \| 'reset'`                                             | `'button'`  | HTML button type            |
| `class`    | `string`                                                                      | `''`        | Ek CSS sınıfları            |
| `onclick`  | `(event: MouseEvent) => void`                                                 | `undefined` | Click event handler         |

### Event'lar

```svelte
<script>
 import { Button } from '@kubilaysabah/svelte-ui';

 function handleClick(event) {
  console.log('Button clicked!', event);
 }
</script>

<Button onclick={handleClick}>Click Me</Button>
```

## 🔧 TailwindCSS Konfigürasyonu

Eğer kendi TailwindCSS konfigürasyonunuz varsa, bu renkleri ekleyin:

```js
// tailwind.config.js
export default {
 content: [
  './src/**/*.{html,js,svelte,ts}',
  './node_modules/@kubilaysabah/svelte-ui/dist/**/*.{js,svelte}'
 ],
 theme: {
  extend: {
   colors: {
    primary: {
     50: '#eff6ff',
     100: '#dbeafe',
     200: '#bfdbfe',
     300: '#93c5fd',
     400: '#60a5fa',
     500: '#3b82f6',
     600: '#2563eb',
     700: '#1d4ed8',
     800: '#1e40af',
     900: '#1e3a8a'
    }
   }
  }
 }
};
```

## 🔌 SvelteKit ile Kullanım

```svelte
<!-- src/routes/+page.svelte -->
<script>
 import { Button } from '@kubilaysabah/svelte-ui';
</script>

<main>
 <h1>Merhaba SvelteKit!</h1>
 <Button variant="outline" onclick={() => alert('Merhaba!')}>Tıkla</Button>
</main>
```

## 🎯 TypeScript Desteği

Paket tam TypeScript desteği ile gelir:

```typescript
import type { ButtonVariant, ButtonSize } from '@kubilaysabah/svelte-ui';

const variant: ButtonVariant = 'destructive';
const size: ButtonSize = 'lg';
```

## 🌟 İleri Seviye Kullanım

### Custom Styling

```svelte
<script>
 import { Button } from '@kubilaysabah/svelte-ui';
</script>

<!-- Ek CSS sınıfları eklemek -->
<Button class="shadow-lg transition-shadow hover:shadow-xl">Custom Styled Button</Button>
```

### Form Kullanımı

```svelte
<script>
 import { Button } from '@kubilaysabah/svelte-ui';

 let formData = { name: '' };

 function handleSubmit() {
  console.log('Form submitted:', formData);
 }
</script>

<form on:submit|preventDefault={handleSubmit}>
 <input bind:value={formData.name} placeholder="İsminiz" />
 <Button type="submit">Gönder</Button>
</form>
```

## 🚀 Gelecek Güncellemeler

- [ ] Input Component
- [ ] Modal Component
- [ ] Card Component
- [ ] Badge Component
- [ ] Dropdown Component

## 📞 Destek

- GitHub Issues: [https://github.com/kubilaysabah/svelte-ui/issues](https://github.com/kubilaysabah/svelte-ui/issues)
- NPM: [@kubilaysabah/svelte-ui](https://www.npmjs.com/package/@kubilaysabah/svelte-ui)
