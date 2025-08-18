<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { cva, type VariantProps } from 'class-variance-authority';

	// BEM-style: block = 'btn', modifiers = 'btn--<modifier>'
	const button = cva('button', {
		variants: {
			variant: {
				fill: 'button--fill',
				outline: 'button--outline',
				ghost: 'button--ghost'
			},
			color: {
				primary: 'button--primary',
				secondary: 'button--secondary'
			},
			size: {
				small: 'button--small',
				medium: 'button--medium',
				large: 'button--large'
			},
			disabled: {
				false: '',
				true: 'button--disabled'
			}
		}
	});

	interface ButtonProps extends Omit<HTMLButtonAttributes, 'color' | 'size'>, VariantProps<typeof button> {}

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
	.button--disabled,
	.button:disabled {
		@apply cursor-not-allowed opacity-50;
	}

	.button--small {
		@apply px-4 py-2 text-sm;
	}

	.button--medium {
		@apply px-6 py-2.5 text-base;
	}

	.button--large {
		@apply px-8 py-3 text-lg;
	}

	/* intent modifiers */
	.button--primary.button--fill {
		background-color: var(--color-primary);
		color: var(--color-primary-foreground);
	}

	.button--primary.button--fill:hover {
		background-color: darken(var(--color-primary), 10%);
		color: var(--color-primary-foreground);
	}

	.button--primary.button--outline {
		background-color: var(--color-background);
		border: 1px solid var(--color-primary);
		color: var(--color-primary);
	}

	.button--primary.button--ghost {
		background-color: var(--color-background);
		color: var(--color-primary);
	}

	.button--secondary.button--fill {
		background-color: var(--color-secondary);
		color: var(--color-secondary-foreground);
	}

	.button--secondary.button--outline {
		background-color: var(--color-background);
		border: 1px solid var(--color-primary);
		color: var(--color-primary);
	}

	.button--secondary.button--ghost {
		color: var(--color-primary);
	}
</style>
