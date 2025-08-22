<script lang="ts">
	import type { SwitchProps } from './types';
	import { switchVariants, switchTrack } from './types';
	import { cn } from '$lib/utils';

	// Destructure props using Svelte 5 $props() with default values
	const {
		class: className,
		checked = false,
		disabled = false,
		size = 'medium',
		color = 'primary',
		label,
		children,
		onchange,
		...rest
	}: SwitchProps = $props();

	/**
	 * Determines if the switch should be in a disabled state
	 * @returns True if switch is disabled, false otherwise
	 */
	function isSwitchDisabled(): boolean {
		return Boolean(disabled);
	}

	/**
	 * Generates the complete CSS class string for the switch container
	 * @returns Computed CSS class string
	 */
	function getSwitchClasses(): string {
		return switchVariants({ 
			size, 
			color,
			disabled: isSwitchDisabled(), 
			class: className 
		});
	}

	/**
	 * Generates the CSS class string for the switch track with color variants
	 * @returns Computed CSS class string for track
	 */
	function getTrackClasses(): string {
		const baseClasses = "relative rounded-full bg-gray-200 transition-all duration-200 ease-in-out peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-opacity-50 dark:bg-gray-700";
		
		// Size classes
		const sizeClasses = {
			small: "w-9 h-5 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:bg-white after:border after:border-gray-300 after:rounded-full after:transition-all after:duration-200 after:ease-in-out peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full dark:after:border-gray-600",
			medium: "w-11 h-6 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:bg-white after:border after:border-gray-300 after:rounded-full after:transition-all after:duration-200 after:ease-in-out peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full dark:after:border-gray-600",
			large: "w-14 h-7 after:content-[''] after:absolute after:top-0.5 after:left-1 after:h-6 after:w-6 after:bg-white after:border after:border-gray-300 after:rounded-full after:transition-all after:duration-200 after:ease-in-out peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full dark:after:border-gray-600"
		};

		// Color classes for checked state and focus ring
		const colorClasses = {
			primary: "peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600 peer-checked:after:border-white",
			secondary: "peer-focus:ring-gray-300 dark:peer-focus:ring-gray-600 peer-checked:bg-gray-600 dark:peer-checked:bg-gray-500 peer-checked:after:border-white",
			success: "peer-focus:ring-green-300 dark:peer-focus:ring-green-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600 peer-checked:after:border-white",
			warning: "peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-600 peer-checked:bg-yellow-500 dark:peer-checked:bg-yellow-500 peer-checked:after:border-white",
			danger: "peer-focus:ring-red-300 dark:peer-focus:ring-red-600 peer-checked:bg-red-600 dark:peer-checked:bg-red-600 peer-checked:after:border-white"
		};

		return cn(baseClasses, sizeClasses[size], colorClasses[color]);
	}

	/**
	 * Handles switch change events with proper disabled state checking
	 * @param event - The input change event
	 */
	function handleChange(event: Event & { currentTarget: EventTarget & HTMLInputElement }): void {
		// Early return if switch is disabled
		if (isSwitchDisabled()) {
			event.preventDefault();
			event.stopPropagation();
			return;
		}

		// Execute change handler if provided
		if (onchange) {
			onchange(event);
		}
	}
</script>

<!-- 
	Semantic switch component with accessibility features
	Proper disabled state handling and ARIA attributes
-->
<label class={getSwitchClasses()}>
	<input 
		{...rest}
		type="checkbox"
		{checked}
		disabled={isSwitchDisabled()}
		onchange={handleChange}
		class="sr-only peer"
		tabindex={isSwitchDisabled() ? -1 : 0}
	/>
	<div class={getTrackClasses()}></div>
	{#if children}
		{@render children()}
	{:else if label}
		<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>
	{/if}
</label>

<style lang="postcss">
	@reference "tailwindcss";

	/* Base switch container */
	.switch {
		@apply inline-flex cursor-pointer items-center;
	}

	/* Disabled state */
	.switch-disabled {
		@apply cursor-not-allowed opacity-50;
	}
</style>
