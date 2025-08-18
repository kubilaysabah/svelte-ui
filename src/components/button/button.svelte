<script lang="ts">
	import type { ButtonProps } from './types';
	import { button } from './types';

	const {
		class: className,
		disabled,
		color,
		size,
		variant,
		children,
		...rest
	}: ButtonProps = $props();
</script>

<button {...rest} {disabled} class={button({ color, size, variant, disabled, class: className })}>
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

	.button-primary.button-fill:hover {
		background-color: darken(var(--color-primary), 10%);
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
