# TextBox Component

A flexible input component that supports both string and snippet-based prefix and suffix elements.

## Features

- **String Prefix/Suffix**: Simple text strings for basic use cases
- **Snippet Prefix/Suffix**: Rich content using Svelte snippets for icons, complex layouts, etc.
- **Flexible Styling**: Support for different colors, sizes, and states
- **Accessibility**: Built with proper ARIA attributes and keyboard navigation

## Basic Usage

### String Prefix and Suffix

```svelte
<script>
  import { TextBox } from '$lib/components';
</script>

<!-- Simple string prefix -->
<TextBox placeholder="Enter amount" prefix="$" />

<!-- Simple string suffix -->
<TextBox placeholder="Enter website" suffix=".com" />

<!-- Both prefix and suffix -->
<TextBox placeholder="Enter amount" prefix="$" suffix="USD" />
```

### Snippet Prefix and Suffix

```svelte
<script>
  import { TextBox } from '$lib/components';
</script>

<!-- Icon prefix using snippet -->
<TextBox placeholder="Search...">
  {#snippet prefix()}
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.35-4.35"></path>
    </svg>
  {/snippet}
</TextBox>

<!-- Icon suffix using snippet -->
<TextBox placeholder="Enter email">
  {#snippet suffix()}
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="20,6 9,17 4,12"></polyline>
    </svg>
  {/snippet}
</TextBox>
```

### Mixed Usage

You can combine string and snippet types:

```svelte
<TextBox placeholder="Username" prefix="@">
  {#snippet suffix()}
    <button class="text-blue-500 hover:text-blue-700">
      Verify
    </button>
  {/snippet}
</TextBox>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `prefix` | `string \| Snippet` | `undefined` | Content to display before the input |
| `suffix` | `string \| Snippet` | `undefined` | Content to display after the input |
| `color` | `'primary' \| 'secondary' \| 'danger' \| 'success' \| 'warning'` | `'primary'` | Color variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size variant |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `type` | `string` | `'text'` | HTML input type |
| `placeholder` | `string` | `undefined` | Placeholder text |

## Examples

### Currency Input

```svelte
<TextBox placeholder="0.00" prefix="$" suffix="USD" type="number" />
```

### Search with Icon

```svelte
<TextBox placeholder="Search products...">
  {#snippet prefix()}
    <SearchIcon />
  {/snippet}
</TextBox>
```

### Email Validation

```svelte
<TextBox placeholder="Enter your email" type="email">
  {#snippet suffix()}
    {#if isValid}
      <CheckIcon class="text-green-500" />
    {:else}
      <XIcon class="text-red-500" />
    {/if}
  {/snippet}
</TextBox>
```

## Styling

The component uses CSS custom properties and Tailwind classes. You can customize the appearance by:

1. **CSS Custom Properties**: Override color variables
2. **Class Override**: Pass custom classes via the `class` prop
3. **Tailwind Classes**: Extend or modify existing classes

```svelte
<TextBox 
  class="border-2 border-purple-500 focus:ring-purple-500" 
  placeholder="Custom styled input" 
/>
```
