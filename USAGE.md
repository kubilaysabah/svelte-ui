# Usage Guide - @kubilaysabah/svelte-ui

## CSS Architecture

This UI library uses a **component-scoped CSS approach** to avoid conflicts with your application's styles:

### Key Features

- **Scoped Variables**: All CSS variables use the `--sui-` prefix
- **Class Isolation**: Components use the `.svelte-ui` class for style isolation
- **TailwindCSS v4 Compatible**: Uses the new `@theme` directive
- **No Global Pollution**: Only affects elements with the `.svelte-ui` class

### Integration Steps

1. **Install TailwindCSS v4** (if not already installed):
```bash
npm install -D tailwindcss@next @tailwindcss/vite
```

2. **Add TailwindCSS to your Vite config** (no configuration file needed):
```js
// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()]
});
```

3. **Import component styles** in your main CSS file:
```css
@import "tailwindcss";
@import "@kubilaysabah/svelte-ui/dist/app.css";
```

4. **Use components** - they automatically include the `.svelte-ui` class:
```svelte
<script>
  import { Button, Card } from '@kubilaysabah/svelte-ui';
</script>

<Card>
  <Button>Click me</Button>
</Card>
```

## Customization

### Override Theme Colors

```css
:root {
  /* Light theme customization */
  --sui-primary: oklch(0.3 0.2 250);
  --sui-secondary: oklch(0.95 0.02 250);
  --sui-destructive: oklch(0.6 0.25 15);
  --sui-border: oklch(0.9 0 0);
  --sui-radius: 0.5rem;
}

.dark {
  /* Dark theme customization */
  --sui-primary: oklch(0.7 0.2 250);
  --sui-secondary: oklch(0.25 0.02 250);
  --sui-destructive: oklch(0.7 0.2 15);
  --sui-border: oklch(0.2 0 0);
}
```

### Available CSS Variables

| Variable | Purpose |
|----------|---------|
| `--sui-primary` | Primary brand color |
| `--sui-secondary` | Secondary background color |
| `--sui-destructive` | Error/danger color |
| `--sui-background` | Main background color |
| `--sui-foreground` | Main text color |
| `--sui-border` | Border color |
| `--sui-input` | Input background color |
| `--sui-ring` | Focus ring color |
| `--sui-radius` | Base border radius |

### Using with Existing TailwindCSS

The library is designed to work seamlessly with your existing TailwindCSS setup:

```css
/* Your app.css */
@import "tailwindcss";

/* Your existing custom styles */
.my-app-styles {
  /* Your application styles won't conflict */
}

/* Import component styles last */
@import "@kubilaysabah/svelte-ui/dist/app.css";
```

## Best Practices

1. **Import Order**: Always import component styles after TailwindCSS
2. **Customization**: Override CSS variables instead of component classes
3. **Dark Mode**: Use the `.dark` class on a parent element for dark theme
4. **Isolation**: The library won't affect your existing styles due to scoped classes

## Migration from v0.1.0

If upgrading from a previous version:

1. Remove any global style imports
2. Update your CSS import to use the new scoped approach
3. Customize colors using the new `--sui-` prefixed variables
