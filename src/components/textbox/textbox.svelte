<script lang="ts">
	import { type InputProps, input } from './types';
	import type { Snippet } from 'svelte';

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

	// Helper function to check if value is a snippet
	function isSnippet(value: unknown): value is Snippet {
		return value instanceof Function;
	}
</script>

<div class="input-container">
	{#if prefix}
		{#if typeof prefix === 'string'}
			<div class="prefix">
				{prefix}
			</div>
		{:else}
			{@render prefix()}
		{/if}
	{/if}
	<input {type} {disabled} class={input({ color, size, disabled, class: className })} {...rest} />
	{#if suffix}
		{#if typeof suffix === 'string'}
			<div class="suffix">
				{suffix}
			</div>
		{:else}
			{@render suffix()}
		{/if}
	{/if}
</div>

<style lang="postcss">
	@reference "tailwindcss";

	.input-container {
		@apply flex flex-wrap overflow-hidden rounded border transition-colors focus:ring-2 focus:outline-none;
	}

	/* base input styles */
	.input {
		background-color: var(--color-background);
		@apply w-full flex-1 focus:outline-none;
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
		@apply flex w-20 items-center justify-center;
		background-color: var(--color-primary);
		color: var(--color-primary-foreground);
	}
</style>
