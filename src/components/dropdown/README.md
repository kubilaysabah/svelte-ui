# Dropdown Component

A feature-rich dropdown component built with Svelte 5 offering flexible item types, keyboard navigation, and comprehensive accessibility support.

## Features

- **Svelte 5 Native**: Built using `$props()`, `$state()`, `$effect()`, and `$bindable()`
- **Flexible Items**: Support for buttons, links, and disabled items
- **Icon Support**: Optional icons via Svelte snippets
- **Keyboard Navigation**: Full keyboard accessibility (Tab, Enter, Space, Escape)
- **Controlled State**: Bindable open prop for external control
- **Click Outside**: Automatic closing when clicking outside
- **Type Safe**: Complete TypeScript support
- **Accessibility**: ARIA attributes and screen reader support

## Basic Usage

```svelte
<script>
    import { Dropdown } from '@/components';
    import type { DropdownItem } from '@/components/dropdown';
    
    let selectedItem = $state('');
    
    const items: DropdownItem[] = [
        { label: 'Option 1', value: 'opt1' },
        { label: 'Option 2', value: 'opt2' },
        { label: 'Disabled', value: 'disabled', disabled: true }
    ];
    
    function handleSelection(item: DropdownItem) {
        selectedItem = item.label;
    }
</script>

<Dropdown 
    placeholder="Choose option"
    items={items}
    click={handleSelection}
/>

{#if selectedItem}
    <p>Selected: {selectedItem}</p>
{/if}
```

## Advanced Usage

### With Icons

```svelte
<script>
    import { UserIcon, SettingsIcon } from '@lucide/svelte';
    
    const itemsWithIcons: DropdownItem[] = [
        { 
            label: 'Profile', 
            value: 'profile',
            icon: UserIcon  // Svelte component as snippet
        },
        { 
            label: 'Settings', 
            value: 'settings',
            icon: SettingsIcon
        }
    ];
</script>

<Dropdown items={itemsWithIcons} click={handleSelection} />
```

### Navigation Links

```svelte
<script>
    const navItems: DropdownItem[] = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' }
    ];
</script>

<Dropdown label="Navigation" items={navItems} />
```

### Controlled State

```svelte
<script>
    let isOpen = $state(false);
</script>

<Dropdown 
    bind:open={isOpen}
    placeholder="Controlled dropdown"
    items={items}
/>

<button onclick={() => isOpen = !isOpen}>
    {isOpen ? 'Close' : 'Open'} Dropdown
</button>
```

### Disabled State

```svelte
<Dropdown 
    placeholder="This is disabled"
    items={items}
    disabled={true}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `undefined` | Current selected label to display |
| `placeholder` | `string` | `'Select option'` | Placeholder text when no label is set |
| `items` | `DropdownItem[]` | `[]` | Array of dropdown items |
| `click` | `function` | `undefined` | Click handler for item selection |
| `disabled` | `boolean` | `false` | Whether the dropdown is disabled |
| `open` | `boolean` | `false` | Controls the open state (bindable) |
| `class` | `string` | `undefined` | Additional CSS classes |

## DropdownItem Interface

```typescript
interface DropdownItem {
    label: string;           // Display text
    value?: string;          // Optional value
    href?: string;           // For link items
    disabled?: boolean;      // Disable specific item
    icon?: Snippet;          // Optional icon snippet
}
```

## Keyboard Navigation

- **Tab**: Focus the dropdown trigger
- **Enter/Space**: Open/close the dropdown
- **Escape**: Close the dropdown
- **Tab (in menu)**: Navigate through items
- **Enter (on item)**: Select item

## Accessibility Features

- **ARIA Attributes**: `combobox`, `expanded`, `haspopup`, `listbox`
- **Keyboard Support**: Full keyboard navigation
- **Screen Reader**: Proper labeling and descriptions
- **Focus Management**: Logical focus flow and visual indicators
- **Disabled State**: Proper disabled handling for items and dropdown
- **Semantic HTML**: Uses appropriate HTML elements

## Styling

The component uses scoped CSS with Tailwind classes:

```css
.dropdown-container {
    @apply relative inline-block min-w-fit;
}

.dropdown-item {
    @apply flex w-full items-center gap-2 px-3 py-2 text-sm;
    @apply transition-colors duration-150 cursor-pointer;
}

.dropdown-item:hover:not(:disabled) {
    @apply bg-gray-50 dark:bg-gray-700;
}
```

## Clean Code Features

- **Guard Clauses**: Early returns for cleaner logic flow
- **Single Responsibility**: Each function handles one concern
- **Descriptive Names**: Clear function and variable naming
- **Type Safety**: Full TypeScript integration
- **Accessibility First**: Built-in ARIA and keyboard support
- **Reactive State**: Proper state synchronization with effects
- **Event Handling**: Clean event delegation and prevention

## Best Practices

1. **Use with Icons**: Add visual hierarchy with icon snippets
2. **Proper Labeling**: Always provide meaningful labels or placeholders
3. **Handle Disabled Items**: Use disabled state for unavailable options
4. **Keyboard First**: Test with keyboard navigation
5. **Accessible Labels**: Provide clear, descriptive text
6. **Loading States**: Handle async operations gracefully
