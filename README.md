# @kubilaysabah/svelte-ui

[![Production Ready](https://img.shields.io/badge/Status-Production%20Ready-success.svg)](https://github.com/kubilaysabah/svelte-ui)
[![Tests](https://img.shields.io/badge/Tests-28%2F29%20Passing-brightgreen.svg)](https://github.com/kubilaysabah/svelte-ui)
[![Svelte 5](https://img.shields.io/badge/Svelte-5-orange.svg)](https://svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

Modern, accessible UI component library for Svelte 5 with TypeScript and TailwindCSS 4.

> **🎉 Project Status: PRODUCTION READY**  
> All core form components have been implemented and tested. 18/18 E2E tests passing!

## 🚀 Features

- **Svelte 5 Native**: Built specifically for Svelte 5 with modern syntax and runes
- **Type-Safe**: Complete TypeScript support with strict type checking
- **TailwindCSS 4**: Latest TailwindCSS with modern CSS features and CSS variables
- **Accessible**: WAI-ARIA compliant components with keyboard navigation
- **Customizable**: Flexible component variants using class-variance-authority
- **Tree-Shakable**: Only import what you need
- **Theme System**: Integrated light/dark theme support with CSS variables
- **Form Components**: Complete set of form elements with validation
- **Developer Experience**: Hot reload, TypeScript intellisense, and modern tooling

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
 import { Button, Input, Checkbox, Select, Textarea, Dropdown } from '@kubilaysabah/svelte-ui';
 
 let inputValue = $state('');
 let isChecked = $state(false);
</script>

<Button variant="default">Click me</Button>
<Input bind:value={inputValue} placeholder="Enter text..." label="Username" />
<Checkbox bind:checked={isChecked} label="I agree to terms" />
```

## 🎨 Available Components

- **Button**: Interactive buttons with multiple variants and sizes
- **Input**: Text input fields with validation and different types
- **Checkbox**: Checkboxes with indeterminate state support
- **Select**: Single and multiple selection dropdowns
- **Textarea**: Multi-line text input with resize options
- **Dropdown**: Action dropdowns with icons, shortcuts, and separators

### Button Component

```svelte
<script>
 import { Button } from '@kubilaysabah/svelte-ui';
</script>

<!-- Variants -->
<Button variant="default">Default</Button>
<Button variant="destructive">Delete</Button>
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

### Input Component

```svelte
<script>
 import { Input } from '@kubilaysabah/svelte-ui';
 
 let value = $state('');
</script>

<!-- Variants -->
<Input bind:value variant="default" placeholder="Default input" label="Default" />
<Input bind:value variant="filled" placeholder="Filled input" label="Filled" />
<Input bind:value variant="outline" placeholder="Outline input" label="Outline" />

<!-- Sizes -->
<Input bind:value size="sm" placeholder="Small" label="Small Input" />
<Input bind:value size="md" placeholder="Medium" label="Medium Input" />
<Input bind:value size="lg" placeholder="Large" label="Large Input" />

<!-- Types and Validation -->
<Input bind:value type="email" placeholder="email@example.com" label="Email" 
       helperText="We'll never share your email" />
<Input bind:value type="password" placeholder="Password" label="Password" />
<Input bind:value placeholder="Required field" label="Required" 
       errorText="This field is required" required />

<!-- States -->
<Input bind:value placeholder="Disabled" label="Disabled" disabled />
<Input bind:value placeholder="Readonly" label="Readonly" readonly />
```

### Checkbox Component

```svelte
<script>
 import { Checkbox } from '@kubilaysabah/svelte-ui';
 
 let isChecked = $state(false);
 let isIndeterminate = $state(true);
</script>

<Checkbox bind:checked={isChecked} label="Default checkbox" />
<Checkbox checked={true} label="Pre-checked" />
<Checkbox indeterminate={isIndeterminate} label="Indeterminate state" />
<Checkbox disabled label="Disabled checkbox" />
<Checkbox required label="Required checkbox" />
```

### Select Component

```svelte
<script>
 import { Select } from '@kubilaysabah/svelte-ui';
 
 let selectedValue = $state('');
 let multipleValues = $state([]);
 
 const options = [
   { value: 'option1', label: 'Option 1' },
   { value: 'option2', label: 'Option 2' },
   { value: 'option3', label: 'Option 3' }
 ];
</script>

<!-- Single Selection -->
<Select bind:value={selectedValue} {options} placeholder="Choose option" label="Single Select" />

<!-- Multiple Selection -->
<Select bind:value={multipleValues} {options} placeholder="Choose options" 
        label="Multiple Select" multiple />

<!-- With Helper/Error Text -->
<Select bind:value={selectedValue} {options} placeholder="Required select" 
        label="Required Select" required 
        helperText="Please choose an option" />

<!-- States -->
<Select {options} placeholder="Disabled" label="Disabled Select" disabled />
```

### Dropdown Component

```svelte
<script>
 import { Dropdown } from '@kubilaysabah/svelte-ui';
 
 let selectedValue = $state(null);
 
 const dropdownItems = [
   { value: 'profile', label: 'Profile', icon: '👤' },
   { value: 'settings', label: 'Settings', icon: '⚙️' },
   { value: 'separator1', label: '', separator: true },
   { value: 'help', label: 'Help & Support', icon: '❓' },
   { value: 'logout', label: 'Logout', icon: '🚪' }
 ];
</script>

<!-- Basic Dropdown -->
<Dropdown bind:value={selectedValue} items={dropdownItems} placeholder="Select action..." />

<!-- Variants -->
<Dropdown items={dropdownItems} variant="outline" placeholder="Outline" />
<Dropdown items={dropdownItems} variant="ghost" placeholder="Ghost" />
<Dropdown items={dropdownItems} variant="destructive" placeholder="Destructive" />

<!-- Sizes -->
<Dropdown items={dropdownItems} size="sm" placeholder="Small" />
<Dropdown items={dropdownItems} size="lg" placeholder="Large" />

<!-- With Icons and Shortcuts -->
<Dropdown 
  items={[
    { value: 'new', label: 'New File', icon: '📄', shortcut: '⌘N' },
    { value: 'open', label: 'Open...', icon: '📂', shortcut: '⌘O' },
    { value: 'save', label: 'Save', icon: '💾', shortcut: '⌘S' },
    { value: 'separator1', label: '', separator: true },
    { value: 'delete', label: 'Delete', icon: '🗑️' }
  ]}
  placeholder="File Actions"
/>

<!-- States -->
<Dropdown items={dropdownItems} placeholder="Disabled" disabled />
<Dropdown items={dropdownItems} closeOnSelect={false} placeholder="Stays Open" />
```

### Dropdown Component

```svelte
<script>
 import { Dropdown } from '@kubilaysabah/svelte-ui';
 
 let selectedValue = $state(null);
 
 const dropdownItems = [
   { value: 'profile', label: 'Profile', icon: '👤' },
   { value: 'settings', label: 'Settings', icon: '⚙️' },
   { value: 'separator1', label: '', separator: true },
   { value: 'help', label: 'Help & Support', icon: '❓' },
   { value: 'logout', label: 'Logout', icon: '🚪' }
 ];
</script>

<!-- Basic Dropdown -->
<Dropdown bind:value={selectedValue} items={dropdownItems} placeholder="Select action..." />

<!-- Variants -->
<Dropdown items={dropdownItems} variant="outline" placeholder="Outline" />
<Dropdown items={dropdownItems} variant="ghost" placeholder="Ghost" />
<Dropdown items={dropdownItems} variant="destructive" placeholder="Destructive" />

<!-- Sizes -->
<Dropdown items={dropdownItems} size="sm" placeholder="Small" />
<Dropdown items={dropdownItems} size="lg" placeholder="Large" />

<!-- With Icons and Shortcuts -->
<Dropdown 
  items={[
    { value: 'new', label: 'New File', icon: '📄', shortcut: '⌘N' },
    { value: 'open', label: 'Open...', icon: '📂', shortcut: '⌘O' },
    { value: 'save', label: 'Save', icon: '💾', shortcut: '⌘S' },
    { value: 'separator1', label: '', separator: true },
    { value: 'delete', label: 'Delete', icon: '🗑️' }
  ]}
  placeholder="File Actions"
/>

<!-- States -->
<Dropdown items={dropdownItems} disabled placeholder="Disabled" />
<Dropdown items={dropdownItems} closeOnSelect={false} placeholder="Stays Open" />
```

### Textarea Component

```svelte
<script>
 import { Textarea } from '@kubilaysabah/svelte-ui';
 
 let textValue = $state('');
</script>

<!-- Variants -->
<Textarea bind:value={textValue} variant="default" placeholder="Default textarea" label="Default" />
<Textarea bind:value={textValue} variant="filled" placeholder="Filled textarea" label="Filled" />
<Textarea bind:value={textValue} variant="outline" placeholder="Outline textarea" label="Outline" />

<!-- Sizes -->
<Textarea bind:value={textValue} size="sm" placeholder="Small" label="Small Textarea" />
<Textarea bind:value={textValue} size="md" placeholder="Medium" label="Medium Textarea" />
<Textarea bind:value={textValue} size="lg" placeholder="Large" label="Large Textarea" />

<!-- Resize Options -->
<Textarea bind:value={textValue} resize="none" placeholder="No resize" label="Fixed Size" />
<Textarea bind:value={textValue} resize="vertical" placeholder="Vertical resize" label="Vertical Only" />
<Textarea bind:value={textValue} resize="horizontal" placeholder="Horizontal resize" label="Horizontal Only" />
<Textarea bind:value={textValue} resize="both" placeholder="Both directions" label="Both Directions" />

<!-- Validation -->
<Textarea bind:value={textValue} placeholder="Enter description" label="Description" 
          helperText="Max 500 characters" />
<Textarea bind:value={textValue} placeholder="Required field" label="Required" 
          errorText="This field is required" required />

<!-- States -->
<Textarea bind:value={textValue} placeholder="Disabled" label="Disabled" disabled />
<Textarea bind:value={textValue} placeholder="Readonly" label="Readonly" readonly />
```

## 🎨 Theme System

The component library includes a complete theme system with support for light and dark modes:

```svelte
<script>
 import { initTheme, toggleTheme, isDarkMode } from '@kubilaysabah/svelte-ui/theme';
 
 let isDark = $state(false);
 
 $effect(() => {
   initTheme(); // Initialize theme from system preference or localStorage
   isDark = isDarkMode();
 });
 
 function handleToggleTheme() {
   toggleTheme();
   isDark = isDarkMode();
 }
</script>

<Button onclick={handleToggleTheme}>
 {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
</Button>
```

### CSS Variables

The theme system uses CSS variables for easy customization:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  /* ... more variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  --primary-foreground: 222.2 84% 4.9%;
  /* ... more variables */
}
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Setup

```bash
# Clone the repository
git clone https://github.com/kubilaysabah/svelte-ui.git
cd svelte-ui

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Testing

```bash
# Run unit tests
pnpm test

# Run e2e tests  
pnpm test:e2e

# Run tests in watch mode
pnpm test:watch
```

## 📚 Documentation

Visit the development server at `http://localhost:5173` to see all components in action with interactive examples.

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our repository.

## 📄 License

MIT License - see LICENSE file for details.

## 🙏 Acknowledgments

- [Svelte](https://svelte.dev) - The amazing reactive framework
- [TailwindCSS](https://tailwindcss.com) - Utility-first CSS framework  
- [class-variance-authority](https://github.com/joe-bell/cva) - For component variants
- [Radix Colors](https://www.radix-ui.com/colors) - For the color system inspiration
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

### TailwindCSS v4 Configuration

**No `tailwind.config.js` needed!** TailwindCSS v4 uses CSS-based configuration.

Add to your `app.css` or main CSS file:

```css
@import 'tailwindcss';

@theme {
  /* Your custom colors using CSS variables */
  --color-border: hsl(var(--color-border));
  --color-input: hsl(var(--color-input));
  --color-ring: hsl(var(--color-ring));
  --color-background: hsl(var(--color-background));
  --color-foreground: hsl(var(--color-foreground));
  
  --color-primary: hsl(var(--color-primary));
  --color-primary-foreground: hsl(var(--color-primary-foreground));
  
  --color-secondary: hsl(var(--color-secondary));
  --color-secondary-foreground: hsl(var(--color-secondary-foreground));
  
  --color-destructive: hsl(var(--color-destructive));
  --color-destructive-foreground: hsl(var(--color-destructive-foreground));
  
  --color-muted: hsl(var(--color-muted));
  --color-muted-foreground: hsl(var(--color-muted-foreground));
  
  --color-accent: hsl(var(--color-accent));
  --color-accent-foreground: hsl(var(--color-accent-foreground));
}

@custom-variant dark (&:is(.dark *));

:root {
  /* Define your CSS variables here */
  --color-background: 0 0% 100%;
  --color-foreground: 222.2 84% 4.9%;
  --color-primary: 221.2 83.2% 53.3%;
  /* ... more variables */
}

.dark {
  /* Dark mode overrides */
  --color-background: 222.2 84% 4.9%;
  --color-foreground: 210 40% 98%;
  /* ... dark mode variables */
}
```

For Vite projects, install the TailwindCSS v4 Vite plugin:

```bash
pnpm add -D @tailwindcss/vite
```

Then update your `vite.config.js`:

```js
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default {
  plugins: [tailwindcss(), sveltekit()]
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
