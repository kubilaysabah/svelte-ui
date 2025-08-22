# Switch Component

A modern toggle switch component built with Svelte 5 featuring multiple sizes, comprehensive accessibility support, and smooth animations.

## Features

- **Svelte 5 Native**: Built using `$props()`, `$state()`, and modern Svelte patterns
- **Multiple Sizes**: Small, medium, and large variants
- **CVA Integration**: Uses Class Variance Authority for consistent styling
- **Accessibility**: Full keyboard navigation and screen reader support
- **Type Safe**: Complete TypeScript support with proper event handling
- **Disabled State**: Proper disabled state handling with visual feedback
- **Smooth Animations**: CSS transitions for toggle interactions
- **Dark Mode**: Built-in dark mode support

## Basic Usage

```svelte
<script>
    import { Switch } from '@/components';
    
    let isEnabled = $state(false);
    
    function handleToggle(event) {
        isEnabled = event.currentTarget.checked;
    }
</script>

<Switch 
    checked={isEnabled} 
    onchange={handleToggle}
    label="Enable notifications"
/>
```

## Size Variants

```svelte
<!-- Different Sizes -->
<Switch size="small" label="Small toggle" />
<Switch size="medium" label="Default toggle" />
<Switch size="large" label="Large toggle" />
```

## Color Variants

```svelte
<!-- Different Colors -->
<Switch color="primary" label="Primary toggle" checked />
<Switch color="secondary" label="Secondary toggle" checked />
<Switch color="success" label="Success toggle" checked />
<Switch color="warning" label="Warning toggle" checked />
<Switch color="danger" label="Danger toggle" checked />
```

## Advanced Usage

### Controlled Switch

```svelte
<script>
    let settings = $state({
        notifications: false,
        darkMode: true,
        autoSave: false
    });
    
    function updateSetting(key) {
        return (event) => {
            settings[key] = event.currentTarget.checked;
        };
    }
</script>

<div class="space-y-4">
    <Switch 
        checked={settings.notifications}
        onchange={updateSetting('notifications')}
        label="Push notifications"
        size="medium"
    />
    
    <Switch 
        checked={settings.darkMode}
        onchange={updateSetting('darkMode')}
        label="Dark mode"
        size="medium"
    />
    
    <Switch 
        checked={settings.autoSave}
        onchange={updateSetting('autoSave')}
        label="Auto-save documents"
        size="medium"
        disabled={!settings.notifications}
    />
</div>
```

### Custom Label with Snippet

```svelte
<Switch checked={false} size="large">
    {#snippet children()}
        <span class="flex items-center gap-2">
            <Icon name="bell" />
            Enable notifications
        </span>
    {/snippet}
</Switch>
```

### Disabled State

```svelte
<script>
    let isPremiumUser = $state(false);
    let advancedFeature = $state(false);
</script>

<Switch 
    checked={advancedFeature}
    disabled={!isPremiumUser}
    label="Advanced analytics (Premium only)"
    size="medium"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Switch size variant |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Switch color variant |
| `checked` | `boolean` | `false` | Whether the switch is checked |
| `disabled` | `boolean` | `false` | Whether the switch is disabled |
| `label` | `string` | `undefined` | Label text for the switch |
| `children` | `Snippet` | `undefined` | Custom content to render as label |
| `onchange` | `function` | `undefined` | Change event handler |
| `class` | `string` | `undefined` | Additional CSS classes |

## Size Specifications

| Size | Track Dimensions | Handle Size | Use Case |
|------|------------------|-------------|----------|
| `small` | 36×20px | 16×16px | Compact forms, mobile interfaces |
| `medium` | 44×24px | 20×20px | Default size, general use |
| `large` | 56×28px | 24×24px | Prominent settings, accessibility |

## Color Specifications

| Color | Use Case | Theme Variable |
|-------|----------|----------------|
| `primary` | Default actions, main features | `--color-primary` |
| `secondary` | Secondary actions, alternative options | `--color-secondary` |
| `success` | Positive actions, confirmations | `--color-success` |
| `warning` | Caution, important notices | `--color-warning` |
| `danger` | Destructive actions, errors | `--color-danger` |

## Accessibility Features

- **Keyboard Navigation**: Full Tab and Space key support
- **Screen Reader**: Proper ARIA attributes and semantic HTML
- **Focus Management**: Visual focus indicators with ring styles
- **Disabled State**: Prevents interaction when disabled
- **Label Association**: Proper label-input association
- **High Contrast**: Works well in high contrast modes

## Styling

The component uses CVA for consistent styling and supports Tailwind CSS:

```css
/* Base switch styles */
.switch {
    @apply inline-flex cursor-pointer items-center;
}

/* Track styles with size variants */
.switch-track {
    @apply relative rounded-full bg-gray-200 transition-all duration-200;
    @apply peer-focus:ring-4 peer-focus:ring-blue-300;
    @apply peer-checked:bg-blue-600;
}

/* Handle animation */
.switch-track::after {
    @apply absolute bg-white border rounded-full transition-all duration-200;
    @apply peer-checked:translate-x-full;
}
```

## Dark Mode Support

The component automatically adapts to dark mode:

```css
.switch-track {
    @apply dark:bg-gray-700 dark:peer-focus:ring-blue-800;
    @apply dark:peer-checked:bg-blue-600;
}

.switch-label {
    @apply dark:text-gray-300;
}
```

## Clean Code Features

- **Guard Clauses**: Early returns for better code flow
- **Single Responsibility**: Each function has one clear purpose
- **Descriptive Naming**: Clear function and variable names
- **Type Safety**: Full TypeScript integration with CVA
- **Error Prevention**: Disabled state prevents invalid interactions
- **Accessibility First**: Built-in ARIA support and keyboard navigation
- **CVA Integration**: Consistent styling patterns across components

## Examples

### Settings Panel

```svelte
<script>
    let userSettings = $state({
        emailNotifications: true,
        pushNotifications: false,
        marketingEmails: false,
        twoFactorAuth: true
    });
</script>

<div class="space-y-6">
    <h3 class="text-lg font-semibold">Notification Settings</h3>
    
    <div class="space-y-4">
        <Switch 
            checked={userSettings.emailNotifications}
            onchange={(e) => userSettings.emailNotifications = e.currentTarget.checked}
            label="Email notifications"
            size="medium"
        />
        
        <Switch 
            checked={userSettings.pushNotifications}
            onchange={(e) => userSettings.pushNotifications = e.currentTarget.checked}
            label="Push notifications"
            size="medium"
        />
        
        <Switch 
            checked={userSettings.marketingEmails}
            onchange={(e) => userSettings.marketingEmails = e.currentTarget.checked}
            label="Marketing emails"
            size="small"
        />
    </div>
    
    <div class="border-t pt-4">
        <Switch 
            checked={userSettings.twoFactorAuth}
            onchange={(e) => userSettings.twoFactorAuth = e.currentTarget.checked}
            label="Two-factor authentication"
            size="large"
        />
    </div>
</div>
```
