# Svelte UI Kütüphanesi - Geliştirici Kılavuzu

Bu dokümantasyon, `@kubilaysabah/svelte-ui` paketinin geliştirilmesi için kullanılan teknolojiler, kurallar ve standartları içerir. Her AI chat oturumunda bu kılavuza göre geliştirmeler yapılmalıdır.

## 🎯 Proje Vizyonu

Modern, tip güvenli, erişilebilir ve performanslı Svelte 5 UI component kütüphanesi geliştirmek. NPM paketi olarak yayınlanarak tüm Svelte/SvelteKit projelerinde kullanılabilir hale getirmek.

## 🛠 Teknoloji Stack'i

### Core Technologies

- **Svelte 5** - Ana framework (runes syntax kullanılmalı)
- **TypeScript** - Strict mode ile tip güvenliği
- **SvelteKit** - Library template ile paketleme
- **TailwindCSS 4** - Styling (en son versiyon)

### Styling Dependencies

- **class-variance-authority (CVA)** - Component variant yönetimi
- **clsx** - Conditional class names
- **tailwind-merge** - Tailwind class çakışmalarını çözme
- **tw-animate-css** - Animasyon utilities
- **lucide-svelte** - Icon sistemi

### Development Tools

- **Vite** - Build tool ve dev server
- **Vitest** - Unit testing
- **Playwright** - E2E testing
- **Storybook** - Component dokümantasyonu
- **ESLint + Prettier** - Code quality

### Package Management

- **pnpm** - Paket yöneticisi
- **publint** - NPM paket validasyonu
- **@sveltejs/package** - Svelte paket builder

## 📁 Proje Yapısı

```
svelte-ui/
├── src/lib/                    # Kütüphane kaynak kodları
│   ├── components/ui/          # UI component'leri
│   │   └── button.svelte      # Button component
│   ├── utils/                 # Utility fonksiyonları
│   │   ├── cn.ts             # Class name utility
│   │   └── button-variants.ts # CVA variants
│   ├── types/                # TypeScript type tanımlamaları
│   │   └── button.ts         # Button types
│   └── index.ts              # Ana export dosyası
├── src/routes/               # Demo sayfaları
│   └── +page.svelte         # Component örnekleri
├── src/stories/             # Storybook stories
├── e2e/                     # E2E testler
├── tests/                   # Unit testler
└── dist/                    # Build output
```

## 🎨 Component Geliştirme Kuralları

### 1. Svelte 5 Runes Syntax

```svelte
<script lang="ts">
	// Props için $props() kullan
	let { variant = 'default', size = 'default', ...props }: Props = $props();

	// Reactive values için $derived() kullan
	let className = $derived(cn(buttonVariants({ variant, size }), props.class));
</script>
```

### 2. TypeScript Tip Tanımlamaları

```typescript
// Her component için interface tanımla
interface Props {
	variant?: ButtonVariant;
	size?: ButtonSize;
	disabled?: boolean;
	class?: string;
	children?: any;
}

// Union types kullan
export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
```

### 3. CVA Pattern

```typescript
// class-variance-authority ile variant yönetimi
export const buttonVariants = cva(
	// Base styles
	'inline-flex items-center justify-center...',
	{
		variants: {
			variant: {
				default: 'bg-primary-500 text-white hover:bg-primary-600',
				destructive: 'bg-red-500 text-white hover:bg-red-600'
				// ...
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3'
				// ...
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
);
```

### 4. Accessibility (A11y) Standartları

- Her component ARIA uyumlu olmalı
- Keyboard navigation desteklenmeli
- Screen reader uyumluluğu sağlanmalı
- Focus management düzgün yapılmalı

```svelte
<button
  {type}
  {disabled}
  role="button"
  class={computedClass}
  {onclick}
  {...restProps}
>
```

## 🧪 Test Standartları

### Unit Test Kuralları

- Her utility fonksiyon test edilmeli
- Component logic testleri Vitest ile
- %100 code coverage hedeflenmeli

```typescript
// utils test örneği
import { describe, it, expect } from 'vitest';
import { cn } from './cn';

describe('cn utility', () => {
	it('should merge classes correctly', () => {
		expect(cn('px-2 py-1', 'px-3')).toBe('py-1 px-3');
	});
});
```

### E2E Test Kuralları

- Her component'in temel fonksiyonalitesi test edilmeli
- Accessibility testleri dahil edilmeli
- Cross-browser uyumluluk test edilmeli

```typescript
// E2E test örneği
test('button is accessible', async ({ page }) => {
	await page.goto('/');
	const button = page.locator('button').first();
	await expect(button).toHaveAttribute('role', 'button');
	await expect(button).toBeFocused();
});
```

## 📦 NPM Paket Kuralları

### Package.json Gereksinimleri

```json
{
	"name": "@kubilaysabah/svelte-ui",
	"type": "module",
	"svelte": "./dist/index.js",
	"types": "./dist/index.d.ts",
	"exports": {
		".": {
			"types": "./dist/index.d.ts",
			"svelte": "./dist/index.js"
		}
	},
	"files": ["dist"],
	"peerDependencies": {
		"svelte": "^5.0.0"
	}
}
```

### Versioning Strategi

- **Patch (0.1.x)** - Bug fixes, küçük iyileştirmeler
- **Minor (0.x.0)** - Yeni component'ler, yeni özellikler
- **Major (x.0.0)** - Breaking changes, API değişiklikleri

### Release Process

```bash
# 1. Testleri çalıştır
pnpm test

# 2. TypeScript check
pnpm run check

# 3. Build
pnpm run build

# 4. Version bump
npm version patch|minor|major

# 5. Publish
npm publish --access public
```

## 🎨 Styling Kuralları

### TailwindCSS 4 Konfigürasyonu

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
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8'
				}
			}
		}
	}
};
```

### Class Naming Convention

- TailwindCSS utility classes kullan
- Custom CSS class'ları minimize et
- CVA ile variant yönetimi yap
- `cn()` utility ile class merge et

## 📝 Dokümantasyon Kuralları

### Component Documentation

- Her component için README bölümü
- Props tablosu ekle
- Kullanım örnekleri ver
- TypeScript interface'leri dokümante et

### Storybook Stories

```typescript
// Her component için story
export default {
	title: 'UI/Button',
	component: ButtonStory,
	parameters: { layout: 'centered' },
	tags: ['autodocs']
} satisfies Meta<typeof ButtonStory>;
```

## 🚀 Yeni Component Ekleme Süreci

### 1. Component Oluşturma

```bash
# Yeni component dosyası
src/lib/components/ui/[component].svelte

# Type definitions
src/lib/types/[component].ts

# Variants (gerekirse)
src/lib/utils/[component]-variants.ts
```

### 2. Export'a Ekleme

```typescript
// src/lib/index.ts
export { default as NewComponent } from './components/ui/new-component.svelte';
export * from './types/new-component.js';
```

### 3. Test Yazma

```bash
# Unit tests
src/lib/utils/[component].test.ts

# E2E tests
e2e/[component].test.ts
```

### 4. Storybook Story

```typescript
// src/stories/[Component].stories.ts
```

### 5. Demo Sayfasına Ekleme

```svelte
<!-- src/routes/+page.svelte -->
<NewComponent variant="default">Example</NewComponent>
```

## 🔒 Kalite Kontrol Checklist

### Her PR/Commit Öncesi

- [ ] `pnpm test` - Tüm testler geçiyor
- [ ] `pnpm run check` - TypeScript hataları yok
- [ ] `pnpm run lint` - ESLint kuralları geçiyor
- [ ] `pnpm run build` - Build başarılı
- [ ] Accessibility testleri geçiyor
- [ ] Cross-browser test yapıldı
- [ ] Dokümantasyon güncellendi

### Release Öncesi

- [ ] Version number güncellendi
- [ ] CHANGELOG.md güncellendi
- [ ] README örnekleri test edildi
- [ ] NPM paket boyutu kontrol edildi
- [ ] Breaking changes dokümante edildi

## 🤝 Katkı Kuralları

### Code Style

- Prettier konfigürasyonu takip edilmeli
- ESLint kuralları uygulanmalı
- TypeScript strict mode kullanılmalı
- Meaningful commit messages yazılmalı

### Component Tasarım Prensipleri

- **Composable** - Küçük, tekrar kullanılabilir parçalar
- **Accessible** - WCAG 2.1 AA uyumlu
- **Performant** - Minimal bundle size
- **Type-safe** - Tam TypeScript desteği
- **Consistent** - Tutarlı API tasarımı

## 🎯 Gelecek Roadmap

### Öncelikli Component'ler

1. **Input** - Form input elements
2. **Card** - Content containers
3. **Modal/Dialog** - Overlay components
4. **Badge** - Status indicators
5. **Dropdown** - Menu components

### Hedeflenen Özellikler

- Dark mode desteği
- Icon library entegrasyonu
- Form validation helpers
- Animation presets
- Theme customization system

---

**Not:** Bu dokümantasyon projenin development standartlarını belirler. Her AI chat oturumunda bu kurallara uygun geliştirme yapılmalıdır. Herhangi bir değişiklik bu dokümana yansıtılmalıdır.
