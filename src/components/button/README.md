# Button Component

A versatile button component built with Svelte 5 featuring multiple variants, sizes, and comprehensive accessibility support.

## Features

- **Svelte 5 Native**: Built using `$props()`, `$state()`, and modern Svelte patterns
- **Multiple Variants**: Fill, outline, and ghost styles
- **Size Options**: Small, medium, and large sizes
- **Color Schemes**: Primary and secondary color options
- **Accessibility**: Full keyboard navigation and screen reader support
- **Type Safe**: Complete TypeScript support with proper event handling
- **Disabled State**: Proper disabled state handling with visual feedback

## Basic Usage

```svelte
<script>
    import { Button } from '@/components';
    
    let clickCount = $state(0);
    
    function handleClick() {
        clickCount++;
    }
</script>

<Button onclick={handleClick}>
    {#snippet children()}
        Clicked {clickCount} times
    {/snippet}
</Button>
```

## Variants and Sizes

```svelte
<!-- Different Variants -->
<Button variant="fill" color="primary">Fill Button</Button>
<Button variant="outline" color="primary">Outline Button</Button>
<Button variant="ghost" color="primary">Ghost Button</Button>

<!-- Different Sizes -->
<Button size="small">Small</Button>
<Button size="medium">Medium (default)</Button>
<Button size="large">Large</Button>

<!-- Different Colors -->
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
```

## Advanced Usage

### Disabled State

```svelte
<script>
    let isLoading = $state(false);
    
    async function handleAsyncAction() {
        isLoading = true;
        try {
            await someAsyncOperation();
        } finally {
            isLoading = false;
        }
    }
</script>

<Button disabled={isLoading} onclick={handleAsyncAction}>
    {#snippet children()}
        {isLoading ? 'Loading...' : 'Submit'}
    {/snippet}
</Button>
```

### Custom Styling

```svelte
<Button 
    class="custom-button-class"
    variant="outline"
    size="large"
>
    {#snippet children()}Custom Styled Button{/snippet}
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'fill' \| 'outline' \| 'ghost'` | `'fill'` | Button style variant |
| `color` | `'primary' \| 'secondary'` | `'primary'` | Button color scheme |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `children` | `Snippet` | `undefined` | Content to render inside the button |
| `onclick` | `function` | `undefined` | Click event handler |
| `type` | `string` | `'button'` | Button type attribute |

## Accessibility Features

- **Keyboard Navigation**: Full Tab and Enter/Space key support
- **Screen Reader**: Proper ARIA attributes and semantic HTML
- **Focus Management**: Visual focus indicators and proper tabindex
- **Disabled State**: Prevents interaction when disabled
- **Event Handling**: Proper event propagation control

## Styling

The component uses CSS custom properties for theming:

```css
.button {
    /* Base styles with Tailwind classes */
    @apply inline-flex items-center justify-center rounded font-medium transition-all;
}

/* Custom theme variables */
.button-primary.button-fill {
    background-color: var(--color-primary);
    color: var(--color-primary-foreground);
}
```

## Clean Code Features

- **Guard Clauses**: Early returns for better code flow
- **Single Responsibility**: Each function has one clear purpose
- **Descriptive Naming**: Clear function and variable names
- **Type Safety**: Full TypeScript integration
- **Error Prevention**: Disabled state prevents invalid interactions
- **Accessibility First**: Built-in ARIA support and keyboard navigation
