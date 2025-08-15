<!--
@component
Dropdown component with trigger button and floating menu
Supports different variants, sizes, alignment and comprehensive accessibility features
-->

<script lang="ts">
	import { cn } from '$lib/utils/cn.js';
	import { 
		dropdownTriggerVariants, 
		dropdownMenuVariants, 
		dropdownItemVariants, 
		dropdownSeparatorVariants,
		dropdownShortcutVariants 
	} from '$lib/utils/dropdown-variants.js';
	import type { DropdownProps, DropdownItem } from '../../types/dropdown.js';

	let {
		variant = 'default',
		size = 'default',
		align = 'start',
		items,
		placeholder = 'Select option...',
		disabled = false,
		open = $bindable(false),
		trigger,
		value = $bindable(null),
		closeOnSelect = true,
		class: className = '',
		triggerClass = '',
		menuClass = '',
		id,
		'aria-label': ariaLabel,
		onselect,
		onopen,
		onclose,
		...restProps
	}: DropdownProps = $props();

	// Generate unique ID if not provided
	const dropdownId = id || `dropdown-${Math.random().toString(36).substring(2, 9)}`;
	const triggerId = `${dropdownId}-trigger`;
	const menuId = `${dropdownId}-menu`;

	// Compute classes
	const triggerClassName = $derived(cn(dropdownTriggerVariants({ variant, size }), triggerClass));
	const menuClassName = $derived(cn(dropdownMenuVariants({ align, size }), menuClass, className));

	// Get selected item
	const selectedItem = $derived(items.find(item => item.value === value));
	
	// Display text
	const displayText = $derived(selectedItem?.label || trigger || placeholder);

	// Menu reference for positioning and outside click detection
	let triggerElement: HTMLButtonElement;
	let menuElement = $state<HTMLDivElement>();
	let focusedIndex = $state(-1);

	// Handle trigger click
	function handleTriggerClick() {
		if (disabled) return;
		
		if (open) {
			closeDropdown();
		} else {
			openDropdown();
		}
	}

	// Open dropdown
	function openDropdown() {
		open = true;
		focusedIndex = -1;
		onopen?.();
		
		// Focus first item after opening
		setTimeout(() => {
			const firstItem = menuElement?.querySelector('[role="menuitem"]:not([data-disabled="true"])') as HTMLElement;
			if (firstItem) {
				firstItem.focus();
				focusedIndex = 0;
			}
		}, 0);
	}

	// Close dropdown
	function closeDropdown() {
		open = false;
		focusedIndex = -1;
		onclose?.();
		triggerElement?.focus();
	}

	// Handle item selection
	function handleItemSelect(item: DropdownItem) {
		if (item.disabled) return;
		
		value = item.value;
		onselect?.(item);
		
		if (closeOnSelect) {
			closeDropdown();
		}
	}

	// Handle keyboard navigation
	function handleTriggerKeydown(event: KeyboardEvent) {
		switch (event.key) {
			case 'Enter':
			case ' ':
			case 'ArrowDown':
				event.preventDefault();
				if (!open) openDropdown();
				break;
			case 'ArrowUp':
				event.preventDefault();
				if (!open) openDropdown();
				break;
			case 'Escape':
				if (open) {
					event.preventDefault();
					closeDropdown();
				}
				break;
		}
	}

	// Handle menu keyboard navigation
	function handleMenuKeydown(event: KeyboardEvent) {
		const selectableItems = items.filter(item => !item.disabled && !item.separator);
		const currentFocusedIndex = focusedIndex;

		switch (event.key) {
			case 'ArrowDown':
				event.preventDefault();
				focusedIndex = currentFocusedIndex < selectableItems.length - 1 ? currentFocusedIndex + 1 : 0;
				focusItem();
				break;
			case 'ArrowUp':
				event.preventDefault();
				focusedIndex = currentFocusedIndex > 0 ? currentFocusedIndex - 1 : selectableItems.length - 1;
				focusItem();
				break;
			case 'Enter':
			case ' ':
				event.preventDefault();
				if (focusedIndex >= 0 && focusedIndex < selectableItems.length) {
					handleItemSelect(selectableItems[focusedIndex]);
				}
				break;
			case 'Escape':
				event.preventDefault();
				closeDropdown();
				break;
			case 'Tab':
				closeDropdown();
				break;
		}
	}

	// Focus specific item
	function focusItem() {
		const selectableItems = menuElement?.querySelectorAll('[role="menuitem"]:not([data-disabled="true"])') as NodeListOf<HTMLElement>;
		if (selectableItems && focusedIndex >= 0 && focusedIndex < selectableItems.length) {
			selectableItems[focusedIndex].focus();
		}
	}

	// Handle outside click
	function handleOutsideClick(event: MouseEvent) {
		if (!open) return;
		
		const target = event.target as Node;
		if (
			triggerElement && !triggerElement.contains(target) &&
			menuElement && !menuElement.contains(target)
		) {
			closeDropdown();
		}
	}

	// Add/remove event listeners for outside click
	$effect(() => {
		if (open) {
			document.addEventListener('click', handleOutsideClick);
			return () => document.removeEventListener('click', handleOutsideClick);
		}
	});
</script>

<svelte:window on:keydown={(e) => e.key === 'Escape' && open && closeDropdown()} />

<div class="relative inline-block text-left" {...restProps}>
	<!-- Trigger Button -->
	<button
		bind:this={triggerElement}
		type="button"
		id={triggerId}
		class={triggerClassName}
		aria-label={ariaLabel}
		aria-expanded={open}
		aria-haspopup="menu"
		aria-controls={open ? menuId : undefined}
		{disabled}
		onclick={handleTriggerClick}
		onkeydown={handleTriggerKeydown}
	>
		<span class="truncate">
			{displayText}
		</span>
		
		<!-- Dropdown arrow -->
		<svg 
			class="w-4 h-4 transition-transform duration-200 {open ? 'rotate-180' : ''}"
			fill="none" 
			stroke="currentColor" 
			viewBox="0 0 24 24"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
		</svg>
	</button>

	<!-- Dropdown Menu -->
	{#if open}
		<div
			bind:this={menuElement}
			id={menuId}
			class={menuClassName}
			role="menu"
			aria-orientation="vertical"
			aria-labelledby={triggerId}
			tabindex="-1"
			onkeydown={handleMenuKeydown}
		>
			{#each items as item, index}
				{#if item.separator}
					<div class={cn(dropdownSeparatorVariants())} role="separator"></div>
				{:else}
					<button
						type="button"
						role="menuitem"
						class={cn(dropdownItemVariants({ destructive: item.value === 'delete' || item.value === 'remove' }))}
						data-disabled={item.disabled}
						disabled={item.disabled}
						tabindex={focusedIndex === index ? 0 : -1}
						onclick={() => handleItemSelect(item)}
					>
						{#if item.icon}
							<span class="mr-2 text-sm">{item.icon}</span>
						{/if}
						
						<span class="flex-1 text-left">
							{item.label}
						</span>
						
						{#if item.shortcut}
							<span class={cn(dropdownShortcutVariants())}>
								{item.shortcut}
							</span>
						{/if}
						
						{#if value === item.value}
							<span class="ml-2 text-sm">✓</span>
						{/if}
					</button>
				{/if}
			{/each}
		</div>
	{/if}
</div>
