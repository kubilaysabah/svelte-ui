<script lang="ts">
	import { type InputProps, input } from './types';

	const {
		type,
		class: className,
		color = 'primary',
		size = 'medium',
		disabled = false,
		prefix,
		suffix,
		...rest
	}: InputProps = $props();
</script>

<div class="flex flex-wrap">
	{#if prefix}
		<div class="prefix">
			{@render prefix()}
		</div>
	{/if}
	<input {type} {disabled} class={input({ color, size, disabled, class: className })} {...rest} />
	{#if suffix}
		<div class="suffix">
			{@render suffix()}
		</div>
	{/if}
</div>

<style lang="postcss">
	@reference "tailwindcss";

	/* base input styles */
	.input {
		background-color: var(--color-background);
		@apply flex-1 w-full rounded border px-3 py-2 transition-colors focus:ring-2 focus:outline-none;
	}

	/* disabled modifier */
	.input-disabled,
	.input:disabled {
		@apply cursor-not-allowed opacity-50;
	}

	/* size modifiers */
	.input-small {
		@apply px-2 py-1 text-sm;
	}

	.input-medium {
		@apply px-3 py-2 text-base;
	}

	.input-large {
		@apply px-4 py-3 text-lg;
	}

	/* color modifiers */
	.input-primary {
		border-color: var(--color-primary);
		color: var(--color-primary);
	}

	.input-secondary {
		border-color: var(--color-secondary);
		color: var(--color-secondary);
	}

	.input-danger {
		@apply border-red-300 text-red-500 focus:border-red-500 focus:ring-red-500;
	}

	.input-success {
		@apply border-green-300 text-green-500 focus:border-green-500 focus:ring-green-500;
	}

	.input-warning {
		@apply border-yellow-300 text-yellow-500 focus:border-yellow-500 focus:ring-yellow-500;
	}

	.prefix,
	.suffix {
		@apply w-5;
	}
</style>
