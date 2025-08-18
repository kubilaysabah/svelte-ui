<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { cva, type VariantProps } from 'class-variance-authority';

	const input = cva('input', {
        variants: {
            color: {
                primary: 'input--primary',
                secondary: 'input--secondary',
                danger: 'input--danger',
                success: 'input--success',
                warning: 'input--warning',
            },
            size: {
                small: 'input--small',
                medium: 'input--medium',
                large: 'input--large',
            },
            disabled: {
                false: '',
                true: 'input--disabled',
            }
        }
    });

	interface InputProps extends Omit<HTMLInputAttributes, 'size' | 'color'>, VariantProps<typeof input> {}

	const { 
		type, 
		class: className, 
		color = 'primary',
		size = 'medium',
		disabled = false,
		...rest 
	}: InputProps = $props();
</script>

<input 
    {type} 
    {disabled} 
    class={input({ color, size, disabled, class: className })} 
    {...rest} />

<style lang="postcss">
	@reference "tailwindcss";

    /* base input styles */
    .input {
        background-color: var(--color-background);
        @apply w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 transition-colors;
    }

    /* disabled modifier */
    .input--disabled,
    .input:disabled {
        @apply cursor-not-allowed opacity-50;
    }

    /* size modifiers */
    .input--small {
        @apply px-2 py-1 text-sm;
    }

    .input--medium {
        @apply px-3 py-2 text-base;
    }

    .input--large {
        @apply px-4 py-3 text-lg;
    }

    /* color modifiers */
    .input--primary {
        border-color: var(--color-primary);
        color: var(--color-primary);
    }

    .input--secondary {
        border-color: var(--color-secondary);
        color: var(--color-secondary);
    }

    .input--danger {
        @apply border-red-300 focus:border-red-500 focus:ring-red-500 text-red-500;
    }

    .input--success {
        @apply border-green-300 focus:border-green-500 focus:ring-green-500 text-green-500;
    }

    .input--warning {
        @apply border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 text-yellow-500;
    }
</style>
