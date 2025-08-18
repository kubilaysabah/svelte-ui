<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { cva, type VariantProps } from 'class-variance-authority';

	// BEM-style: block = 'btn', modifiers = 'btn--<modifier>'
	const button = cva('btn', {
		variants: {
			variant: {
				fill: 'btn--fill',
				outline: 'btn--outline',
				ghost: 'btn--ghost'
			},
			intent: {
				primary: 'btn--primary',
				secondary: 'btn--secondary'
			},
			size: {
				small: 'btn--small',
				medium: 'btn--medium',
				large: 'btn--large'
			},
			disabled: {
				false: '',
				true: 'btn--disabled'
			}
		}
		// No compoundVariants necessary: prefer multiple modifier classes (BEM)
	});

	interface ButtonProps extends HTMLButtonAttributes, VariantProps<typeof button> {}

	const {
		class: className,
		disabled,
		intent,
		size,
		variant,
		children,
		...rest
	}: ButtonProps = $props();
</script>

<button {...rest} class={button({ intent, size, variant, disabled, class: className })}>
	{@render children?.()}
</button>

<style lang="postcss">
	@reference "tailwindcss";

	/* base block */
	.btn {
		@apply inline-flex items-center justify-center rounded text-center font-medium;
	}

	/* disabled modifier */
	.btn--disabled,
	.btn:disabled {
		@apply cursor-not-allowed opacity-50;
	}

	.btn--small {
		@apply px-4 py-2 text-sm;
	}

	.btn--medium {
		@apply px-6 py-2.5 text-base;
	}

	.btn--large {
		@apply px-8 py-3 text-lg;
	}

	/* intent modifiers */
	.btn--primary.btn--fill {
		background-color: var(--color-primary);
		color: var(--color-primary-foreground);
	}

	.btn--primary.btn--fill:hover {
		background-color: var(--color-primary);
		background-color: var(--color-primary-foreground);
	}

	.btn--primary.btn--outline {
		background-color: transparent;
		border: 1px solid var(--color-primary);
		color: var(--color-primary);
	}

	.btn--primary.btn--ghost {
		color: var(--color-primary);
	}

	.btn--secondary.btn--fill {
		background-color: var(--color-secondary);
		color: var(--color-secondary-foreground);
	}

	.btn--secondary.btn--outline {
		background-color: transparent;
		border: 1px solid var(--color-primary);
		color: var(--color-primary);
	}

	.btn--secondary.btn--ghost {
		color: var(--color-primary);
	}
</style>
