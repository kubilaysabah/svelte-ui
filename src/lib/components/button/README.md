# Button Component

A versatile and accessible button component with multiple variants and sizes.

## Features

- Multiple variants: default, destructive, outline, secondary, ghost, link
- Different sizes: default, sm, lg, icon
- Fully accessible with proper ARIA attributes
- TypeScript support
- Customizable styling with Tailwind CSS

## Usage

```svelte
<script>
  import { Button } from '@kubilaysabah/svelte-ui';
</script>

<Button variant="default" size="default">
  Click me
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `ButtonVariant` | `'default'` | Visual style variant |
| size | `ButtonSize` | `'default'` | Size of the button |
| disabled | `boolean` | `false` | Whether button is disabled |
| type | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type |
| class | `string` | - | Additional CSS classes |

## Examples

### Variants
```svelte
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

### Sizes
```svelte
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔥</Button>
```
