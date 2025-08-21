<script lang="ts">
	import type { ButtonProps } from './types';
	import { button } from './types';

	// Destructure props using Svelte 5 $props() with default values
	const {
		class: className,
		disabled = false,
		color = 'primary',
		size = 'medium',
		variant = 'fill',
		children,
		onclick,
		...rest
	}: ButtonProps = $props();

	/**
	 * Determines if the button should be in a disabled state
	 * @returns True if button is disabled, false otherwise
	 */
	function isButtonDisabled(): boolean {
		return Boolean(disabled);
	}

	/**
	 * Generates the complete CSS class string for the button
	 * Combines variant classes with custom className
	 * @returns Computed CSS class string
	 */
	function getButtonClasses(): string {
		return button({ 
			color, 
			size, 
			variant, 
			disabled: isButtonDisabled(), 
			class: className 
		});
	}

	/**
	 * Handles button click events with proper disabled state checking
	 * Prevents click handler execution when button is disabled
	 * @param event - The mouse click event
	 */
	function handleClick(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }): void {
		// Early return if button is disabled
		if (isButtonDisabled()) {
			event.preventDefault();
			event.stopPropagation();
			return;
		}

		// Execute click handler if provided
		if (onclick) {
			onclick(event);
		}
	}
</script>

<!-- 
	Semantic button element with accessibility features
	Proper disabled state handling and ARIA attributes
-->
<button 
	{...rest} 
	disabled={isButtonDisabled()}
	class={getButtonClasses()}
	onclick={handleClick}
	type={rest.type || 'button'}
	tabindex={isButtonDisabled() ? -1 : 0}
>
	{@render children?.()}
</button>

<style lang="postcss">
	@reference "tailwindcss";

	/* base block */
	.button {
		@apply inline-flex items-center justify-center rounded text-center font-medium transition-all duration-100;
	}

	/* disabled modifier */
	.button-disabled,
	.button:disabled {
		@apply cursor-not-allowed opacity-50;
	}

	.button-small {
		@apply px-4 py-2 text-sm;
	}

	.button-medium {
		@apply px-6 py-2.5 text-base;
	}

	.button-large {
		@apply px-8 py-3 text-lg;
	}

	/* intent modifiers */
	.button-primary.button-fill {
		background-color: var(--color-primary);
		color: var(--color-primary-foreground);
	}

	.button-primary.button-outline {
		background-color: var(--color-background);
		border: 1px solid var(--color-primary);
		color: var(--color-primary);
	}

	.button-primary.button-ghost {
		background-color: var(--color-background);
		color: var(--color-primary);
	}

	.button-secondary.button-fill {
		background-color: var(--color-secondary);
		color: var(--color-secondary-foreground);
	}

	.button-secondary.button-outline {
		background-color: var(--color-background);
		border: 1px solid var(--color-primary);
		color: var(--color-primary);
	}

	.button-secondary.button-ghost {
		color: var(--color-primary);
	}
</style>
