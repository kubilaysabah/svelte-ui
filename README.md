# @kubilaysabah/svelte-ui

Modern, type-safe UI component library for Svelte 5 with TypeScript and TailwindCSS 4.

## 🚀 Features

- **Svelte 5 Native**: Built specifically for Svelte 5 with modern syntax and features
- **Type-Safe**: Complete TypeScript support with strict type checking
- **TailwindCSS 4**: Latest TailwindCSS with modern CSS features
- **Accessible**: WAI-ARIA compliant components with keyboard navigation
- **Customizable**: Flexible component variants using class-variance-authority
- **Tree-Shakable**: Only import what you need
- **Well-Tested**: Comprehensive unit and e2e tests
- **Documented**: Interactive Storybook documentation

## 📦 Installation

```bash
# npm
npm install @kubilaysabah/svelte-ui

# pnpm
pnpm add @kubilaysabah/svelte-ui

# yarn
yarn add @kubilaysabah/svelte-ui
```

## 🎯 Quick Start

```svelte
<script>
 import { Button } from '@kubilaysabah/svelte-ui';
</script>

<Button variant="default">Click me</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline" size="lg">Large Button</Button>
```

## 🎨 Component Variants

### Button

```svelte
<script>
 import { Button } from '@kubilaysabah/svelte-ui';
</script>

<!-- Variants -->
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

<!-- Sizes -->
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🚀</Button>

<!-- States -->
<Button disabled>Disabled</Button>
```

## 🎭 Component Props

### Button Props

| Prop       | Type                                                                          | Default     | Description                    |
| ---------- | ----------------------------------------------------------------------------- | ----------- | ------------------------------ |
| `variant`  | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` | Visual variant of the button   |
| `size`     | `'default' \| 'sm' \| 'lg' \| 'icon'`                                         | `'default'` | Size of the button             |
| `disabled` | `boolean`                                                                     | `false`     | Whether the button is disabled |
| `type`     | `'button' \| 'submit' \| 'reset'`                                             | `'button'`  | Button type attribute          |
| `class`    | `string`                                                                      | `undefined` | Additional CSS classes         |

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Start Storybook
pnpm run storybook

# Run tests
pnpm run test:unit

# Build the library
pnpm run build
```

## 📚 Documentation

Visit our [Storybook documentation](http://localhost:6006) for interactive component examples and API reference.

## 🧪 Testing

- **Unit Tests**: Vitest for component logic and utilities
- **E2E Tests**: Playwright for user interaction testing
- **Type Checking**: TypeScript strict mode
- **Linting**: ESLint with Svelte and TypeScript rules

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Svelte 5](https://svelte.dev/)
- Styled with [TailwindCSS 4](https://tailwindcss.com/)
- Tested with [Vitest](https://vitest.dev/) and [Playwright](https://playwright.dev/)
- Documented with [Storybook](https://storybook.js.org/)

---

Made with ❤️ for the Svelte community

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## 🎨 Theme System

This library includes a comprehensive theme system inspired by shadcn/ui with support for light and dark modes.

### Theme Setup

Add the theme configuration to your `app.css`:

```css
@import 'tailwindcss';

@theme {
  /* Light mode colors */
  --color-background: 0 0% 100%;
  --color-foreground: 222.2 84% 4.9%;
  --color-primary: 221.2 83.2% 53.3%;
  --color-primary-foreground: 210 40% 98%;
  --color-secondary: 210 40% 96%;
  --color-secondary-foreground: 222.2 84% 4.9%;
  /* ... other colors */
}

@media (prefers-color-scheme: dark) {
  @theme {
    /* Dark mode colors */
    --color-background: 222.2 84% 4.9%;
    --color-foreground: 210 40% 98%;
    /* ... other colors */
  }
}

.dark {
  /* Dark mode override classes */
  --color-background: 222.2 84% 4.9%;
  --color-foreground: 210 40% 98%;
  /* ... other colors */
}

body {
  background-color: hsl(var(--color-background));
  color: hsl(var(--color-foreground));
}
```

### TailwindCSS Configuration

Update your `tailwind.config.js`:

```js
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--color-border))',
        input: 'hsl(var(--color-input))',
        ring: 'hsl(var(--color-ring))',
        background: 'hsl(var(--color-background))',
        foreground: 'hsl(var(--color-foreground))',
        primary: {
          DEFAULT: 'hsl(var(--color-primary))',
          foreground: 'hsl(var(--color-primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--color-secondary))',
          foreground: 'hsl(var(--color-secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--color-destructive))',
          foreground: 'hsl(var(--color-destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--color-muted))',
          foreground: 'hsl(var(--color-muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--color-accent))',
          foreground: 'hsl(var(--color-accent-foreground))'
        }
      }
    }
  },
  darkMode: ['class']
};
```

### Theme Utilities

The library provides utility functions for theme management:

```svelte
<script>
  import { toggleTheme, isDarkMode, setTheme } from '@kubilaysabah/svelte-ui';
  
  let isDark = isDarkMode();
  
  function handleToggle() {
    toggleTheme();
    isDark = isDarkMode();
  }
</script>

<button onclick={handleToggle}>
  {isDark ? '☀️' : '🌙'} Toggle Theme
</button>
```

### Available Theme Functions

- `getTheme()` - Get current theme setting ('light' | 'dark' | 'system')
- `setTheme(theme)` - Set theme explicitly
- `isDarkMode()` - Check if current effective theme is dark
- `toggleTheme()` - Toggle between light and dark
- `initTheme()` - Initialize theme system (call once on app startup)

## 📚 Building

To build your library:

```sh
npm pack
```

To create a production version of your showcase app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [npm](https://www.npmjs.com):

```sh
npm publish
```
