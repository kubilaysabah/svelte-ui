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

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` | Visual variant of the button |
| `size` | `'default' \| 'sm' \| 'lg' \| 'icon'` | `'default'` | Size of the button |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type attribute |
| `class` | `string` | `undefined` | Additional CSS classes |

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

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

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
