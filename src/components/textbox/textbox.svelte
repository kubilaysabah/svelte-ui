<script lang="ts">
	import { type TextBoxProps, textbox } from './types';

	const {
		type,
		class: className,
		color = 'primary',
		size = 'medium',
		disabled = false,
		prefix,
		suffix,
		...rest
	}: TextBoxProps = $props();
</script>

<div class={textbox({ color, size, disabled, class: className })}>
	{#if prefix}
		{#if typeof prefix === 'string'}
			<div class="prefix">
				{prefix}
			</div>
		{:else}
			{@render prefix()}
		{/if}
	{/if}
	<input {type} {disabled} {...rest} />
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

	.textbox {
		@apply flex flex-wrap overflow-hidden rounded border transition-colors focus:ring-2 focus:outline-none;
	}

	/* base textbox styles */
	.textbox input {
		background-color: var(--color-background);
		@apply w-full flex-1 focus:outline-none;
	}

	/* disabled modifier */
	.textbox-disabled {
		@apply cursor-not-allowed opacity-50;
	}

	/* size modifiers */
	.textbox-small input {
		@apply px-2 py-1 text-sm;
	}

	.textbox-medium input {
		@apply px-3 py-2 text-base;
	}

	.textbox-large input {
		@apply px-4 py-3 text-lg;
	}

	/* color modifiers */
	.textbox-primary:not(.textbox-disabled) {
		border-color: var(--color-primary);
		color: var(--color-primary);
	}

	.textbox-secondary:not(.textbox-disabled) {
		border-color: var(--color-secondary);
		color: var(--color-secondary);
	}

	.textbox-danger:not(.textbox-disabled) {
		@apply border-red-300 text-red-500 focus:border-red-500 focus:ring-red-500;
	}

	.textbox-success:not(.textbox-disabled) {
		@apply border-green-300 text-green-500 focus:border-green-500 focus:ring-green-500;
	}

	.textbox-warning:not(.textbox-disabled) {
		@apply border-yellow-300 text-yellow-500 focus:border-yellow-500 focus:ring-yellow-500;
	}

	.prefix,
	.suffix {
		@apply flex w-20 items-center justify-center;
	}

	.textbox-primary:not(.textbox-disabled) .prefix,
	.textbox-primary:not(.textbox-disabled) .suffix {
		background-color: var(--color-primary);
		color: var(--color-primary-foreground);
	}

	.textbox-secondary:not(.textbox-disabled) .prefix,
	.textbox-secondary:not(.textbox-disabled) .suffix {
		background-color: var(--color-secondary);
		color: var(--color-secondary-foreground);
	}
</style>
