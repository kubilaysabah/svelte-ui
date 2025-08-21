<script lang="ts">
	import { ChevronDownIcon } from '@lucide/svelte';
	import { cn } from '$lib/utils';
	import { Button } from '$components';
	import type { DropdownProps, DropdownItem } from './types';

	// Destructure props using Svelte 5 $props() with default values
	let { 
		label, 
		placeholder = 'Select option', 
		click, 
		items = [],
		disabled = false,
		open = $bindable(false),
		class: className,
		...rest 
	}: DropdownProps = $props();

	// Internal state for dropdown visibility
	let isOpen = $state<boolean>(open);

	// Sync external open prop with internal state
	$effect(() => {
		isOpen = open;
	});

	$effect(() => {
		open = isOpen;
	});

	/**
	 * Determines the display text for the dropdown trigger
	 * Priority: label > placeholder > fallback text
	 * @returns The text to display on the dropdown button
	 */
	function getDisplayText(): string {
		if (label) return label;
		if (placeholder) return placeholder;
		return 'Select option';
	}

	/**
	 * Checks if the dropdown should be disabled
	 * @returns True if dropdown is disabled, false otherwise
	 */
	function isDropdownDisabled(): boolean {
		return Boolean(disabled);
	}

	/**
	 * Toggles the dropdown open/closed state
	 * Prevents toggle when dropdown is disabled
	 */
	function toggleDropdown(): void {
		// Early return if dropdown is disabled
		if (isDropdownDisabled()) return;
		
		isOpen = !isOpen;
	}

	/**
	 * Closes the dropdown
	 */
	function closeDropdown(): void {
		isOpen = false;
	}

	/**
	 * Handles item click events
	 * Executes click handler if provided and closes dropdown
	 * @param item - The clicked dropdown item
	 */
	function handleItemClick(item: DropdownItem): void {
		// Early return if item is disabled
		if (item.disabled) return;

		// Execute click handler if provided
		if (click) {
			click(item);
		}

		// Close dropdown after selection
		closeDropdown();
	}

	/**
	 * Handles keyboard navigation for accessibility
	 * @param event - The keyboard event
	 */
	function handleKeydown(event: KeyboardEvent): void {
		switch (event.key) {
			case 'Escape':
				event.preventDefault();
				closeDropdown();
				break;
			case 'Enter':
			case ' ':
				event.preventDefault();
				toggleDropdown();
				break;
		}
	}

	/**
	 * Handles click outside to close dropdown
	 * @param event - The mouse event
	 */
	function handleClickOutside(event: MouseEvent): void {
		const target = event.target as Element;
		const dropdown = event.currentTarget as Element;
		
		// Close if click is outside the dropdown
		if (!dropdown.contains(target)) {
			closeDropdown();
		}
	}

	/**
	 * Gets CSS classes for the dropdown container
	 * @returns Computed CSS class string
	 */
	function getDropdownClasses(): string {
		return cn('dropdown-container', className);
	}

	/**
	 * Gets CSS classes for the dropdown chevron icon
	 * @returns Computed CSS class string
	 */
	function getChevronClasses(): string {
		return cn(
			'dropdown-chevron transition-transform duration-200',
			isOpen ? 'rotate-180' : 'rotate-0'
		);
	}

	/**
	 * Gets CSS classes for the dropdown menu
	 * @returns Computed CSS class string
	 */
	function getMenuClasses(): string {
		return cn(
			'dropdown-menu',
			'absolute z-10 mt-2 w-full rounded border border-gray-200 bg-white shadow-lg',
			'dark:border-gray-700 dark:bg-gray-800',
			!isOpen && 'hidden'
		);
	}

	/**
	 * Gets CSS classes for dropdown items
	 * @param item - The dropdown item
	 * @returns Computed CSS class string
	 */
	function getItemClasses(item: DropdownItem): string {
		return cn(
			'dropdown-item',
			'block w-full px-4 py-2 text-sm text-left',
			'hover:bg-gray-50 dark:hover:bg-gray-700',
			'focus:bg-gray-50 dark:focus:bg-gray-700',
			'transition-colors duration-150',
			item.disabled && 'opacity-50 cursor-not-allowed'
		);
	}

	/**
	 * Public API: Opens the dropdown menu
	 */
	export function openDropdown(): void {
		if (!isDropdownDisabled()) {
			isOpen = true;
		}
	}

	/**
	 * Public API: Closes the dropdown menu
	 */
	export function closeDropdownMenu(): void {
		isOpen = false;
	}

	/**
	 * Public API: Toggles the dropdown state
	 */
	export function toggleDropdownState(): void {
		toggleDropdown();
	}

	/**
	 * Public API: Checks if dropdown is currently open
	 * @returns True if open, false if closed
	 */
	export function isDropdownOpen(): boolean {
		return isOpen;
	}
</script>

<!-- 
	Dropdown container with click-outside handling
	Provides keyboard navigation and accessibility features
-->
<div 
	class={getDropdownClasses()}
	{...rest}
	onkeydown={handleKeydown}
	tabindex="0"
	role="combobox"
	aria-expanded={isOpen}
	aria-haspopup="listbox"
>
	<!-- Dropdown trigger button -->
	<Button 
		onclick={toggleDropdown} 
		size="small" 
		variant="outline" 
		color="primary"
		disabled={isDropdownDisabled()}
		class="dropdown-trigger justify-between min-w-32"
		aria-label={`${getDisplayText()}, dropdown menu`}
	>
		{#snippet children()}
			<span class="dropdown-label">{getDisplayText()}</span>
			<ChevronDownIcon 
				class={getChevronClasses()} 
				size={16}
				aria-hidden="true" 
			/>
		{/snippet}
	</Button>

	<!-- Dropdown menu -->
	{#if items.length > 0}
		<div
			class={getMenuClasses()}
			role="listbox"
			aria-label="Dropdown options"
		>
			{#each items as item, index (item.value || item.label || index)}
				{#if item.href}
					<!-- Link item -->
					<a 
						href={item.href} 
						class={getItemClasses(item)}
						role="option"
						aria-selected="false"
						tabindex={item.disabled ? -1 : 0}
					>
						{#if item.icon}
							<span class="dropdown-item-icon" aria-hidden="true">
								{@render item.icon()}
							</span>
						{/if}
						<span class="dropdown-item-label">{item.label}</span>
					</a>
				{:else}
					<!-- Button item -->
					<button
						type="button"
						disabled={item.disabled}
						class={getItemClasses(item)}
						onclick={() => handleItemClick(item)}
						role="option"
						aria-selected="false"
						tabindex={item.disabled ? -1 : 0}
					>
						{#if item.icon}
							<span class="dropdown-item-icon" aria-hidden="true">
								{@render item.icon()}
							</span>
						{/if}
						<span class="dropdown-item-label">{item.label}</span>
					</button>
				{/if}
			{/each}
		</div>
	{/if}
</div>

<style lang="postcss">
	@reference "tailwindcss";
	
	/* Dropdown container styles */
	.dropdown-container {
		@apply relative inline-block max-w-fit;
	}

	/* Dropdown trigger button styles */
	.dropdown-trigger {
		@apply w-full justify-between items-center gap-2;
	}

	/* Dropdown label styles */
	.dropdown-label {
		@apply truncate flex-1 text-left;
	}

	/* Chevron icon styles */
	.dropdown-chevron {
		@apply flex-shrink-0 transition-transform duration-200 ease-in-out;
	}

	/* Dropdown menu styles */
	.dropdown-menu {
		@apply absolute z-50 mt-1 w-full min-w-max rounded-md border bg-white shadow-lg;
		@apply dark:border-gray-700 dark:bg-gray-800;
		@apply focus:outline-none;
	}

	/* Dropdown item base styles */
	.dropdown-item {
		@apply flex w-full items-center gap-2 px-3 py-2 text-sm;
		@apply text-gray-900 dark:text-gray-100;
		@apply transition-colors duration-150;
		@apply cursor-pointer;
	}

	/* Dropdown item hover and focus styles */
	.dropdown-item:hover:not(:disabled),
	.dropdown-item:focus:not(:disabled) {
		@apply bg-gray-50 dark:bg-gray-700;
		@apply outline-none;
	}

	/* Disabled dropdown item styles */
	.dropdown-item:disabled {
		@apply opacity-50 cursor-not-allowed;
		@apply bg-transparent;
	}

	/* Dropdown item icon styles */
	.dropdown-item-icon {
		@apply flex-shrink-0 w-4 h-4;
	}

	/* Dropdown item label styles */
	.dropdown-item-label {
		@apply flex-1 text-left truncate;
	}

	/* Focus styles for accessibility */
	.dropdown-container:focus {
		@apply outline-none  rounded;
	}
</style>
