# Backdrop Component

A modern backdrop/modal component built with Svelte 5 featuring reactive state management, bindable props, and comprehensive accessibility features.

## Features

- **Svelte 5 Native**: Built using `$props()`, `$state()`, `$effect()`, and `$bindable()`
- **Reactive State**: Automatically syncs dialog state with component props
- **Bindable Props**: The `open` prop is bindable for two-way data binding
- **Accessibility**: Proper ARIA attributes and keyboard navigation
- **Customizable**: Configurable close behavior and styling
- **Type Safe**: Full TypeScript support
- **Modal Integration**: Works seamlessly with the Modal component

## Basic Usage

```svelte
<script>
    import { Backdrop } from '@/components/backdrop';
    
    let isOpen = $state(false);
</script>

<button onclick={() => isOpen = true}>
    Open Backdrop
</button>

<Backdrop bind:open={isOpen}>
    {#snippet children()}
        <div class="bg-white p-6 rounded-lg">
            <h2>Modal Content</h2>
            <p>This is the modal content.</p>
            <button onclick={() => isOpen = false}>Close</button>
        </div>
    {/snippet}
</Backdrop>
```

## Recommended Usage with Modal Component

For better consistency and built-in styling, use Backdrop together with the Modal component:

```svelte
<script>
    import { Backdrop, Modal } from '@/components';
    
    let isOpen = $state(false);
</script>

<button onclick={() => isOpen = true}>
    Open Modal
</button>

<Backdrop bind:open={isOpen}>
    {#snippet children()}
        <Modal 
            title="My Modal" 
            size="md" 
            variant="default"
            forceClose={() => isOpen = false}
        >
            {#snippet children()}
                <p>Modal content with consistent styling and theming.</p>
                <button onclick={() => isOpen = false}>Close</button>
            {/snippet}
        </Modal>
    {/snippet}
</Backdrop>
```## Advanced Usage

### With Custom Close Handler

```svelte
<script>
 let showModal = $state(false);
 
 function handleClose() {
  // Custom logic before closing
  console.log('Modal is closing...');
  showModal = false;
 }
</script>

<Backdrop 
 bind:open={showModal} 
 close={handleClose}
 closeOnBackdropClick={true}
 closeOnEscape={true}
>
 {#snippet children()}
  <div class="modal-content">
   <h2>Custom Close Handler</h2>
   <button onclick={handleClose}>Close with Handler</button>
  </div>
 {/snippet}
</Backdrop>
```

### Non-Dismissible Modal

```svelte
<script>
 let showCriticalModal = $state(false);
</script>

<Backdrop 
 bind:open={showCriticalModal}
 closeOnBackdropClick={false}
 closeOnEscape={false}
>
 {#snippet children()}
  <div class="modal-content">
   <h2>Important Notice</h2>
   <p>This modal requires explicit action.</p>
   <button onclick={() => showCriticalModal = false}>
    I Understand
   </button>
  </div>
 {/snippet}
</Backdrop>
```

### Using Component Methods

```svelte
<script>
 import { Backdrop } from '@/components/backdrop';
 
 let backdrop;
 
 function openModal() {
  backdrop?.showModal();
 }
 
 function closeModal() {
  backdrop?.closeModal();
 }
 
 function checkStatus() {
  console.log('Is open:', backdrop?.isOpen());
 }
</script>

<Backdrop bind:this={backdrop}>
 {#snippet children()}
  <div class="modal-content">
   <h2>Method Control</h2>
   <button onclick={closeModal}>Close</button>
  </div>
 {/snippet}
</Backdrop>

<button onclick={openModal}>Open</button>
<button onclick={checkStatus}>Check Status</button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Controls the backdrop visibility (bindable) |
| `close` | `() => void` | `undefined` | Custom close handler function |
| `closeOnBackdropClick` | `boolean` | `true` | Whether clicking outside closes the backdrop |
| `closeOnEscape` | `boolean` | `true` | Whether pressing Escape closes the backdrop |
| `children` | `Snippet` | `undefined` | Content to render inside the backdrop |
| `class` | `string` | `undefined` | Additional CSS classes |

## Methods

| Method | Description |
|--------|-------------|
| `showModal()` | Opens the backdrop |
| `closeModal()` | Closes the backdrop |
| `getDialog()` | Returns the underlying dialog element |
| `isOpen()` | Returns whether the backdrop is currently open |

## Svelte 5 Features Used

- **`$props()`**: Modern prop destructuring with defaults
- **`$state()`**: Reactive state management
- **`$effect()`**: Side effects for DOM synchronization
- **`$bindable()`**: Two-way data binding for the `open` prop
- **`untrack()`**: Prevents infinite reactivity loops
- **Snippets**: Modern content projection with `{@render children?.()}`

## Styling

The component uses PostCSS with Tailwind CSS. Customize the appearance by:

1. **CSS Classes**: Pass custom classes via the `class` prop
2. **Global Styles**: Override `.backdrop` and `.backdrop-content` classes
3. **CSS Variables**: Use CSS custom properties for theming

```css
.backdrop {
 /* Custom backdrop styles */
 --backdrop-blur: 4px;
 --backdrop-opacity: 0.5;
}
```

## Accessibility

- Uses semantic `<dialog>` element
- Proper ARIA attributes (`aria-modal="true"`)
- Keyboard navigation support (Escape key)
- Focus management
- Screen reader compatibility
