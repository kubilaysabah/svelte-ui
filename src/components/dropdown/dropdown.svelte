<script lang="ts">
	import { ChevronDownIcon } from '@lucide/svelte';
	import { cn } from '$lib/utils';
	import { Button } from '$components';
	import type { DropdownProps } from './types';

	let isOpen = $state<boolean>(false);
	let { label, placeholder, click, items = [] }: DropdownProps = $props();
</script>

<div class="relative max-w-fit">
	<Button onclick={() => isOpen = !isOpen} size="small" variant="fill" color="primary">
		<span>{label ? label : placeholder ? placeholder : 'Seçiniz'}</span>
		<ChevronDownIcon class={cn('transition-all duration-150', isOpen ? 'rotate-180' : '')} />
	</Button>
	<nav
		class="absolute z-10 mt-2 w-full rounded border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
		class:!hidden={!isOpen}
	>
		{#each items as item}
			{#if item.href}
				<a href={item.href} class="cursor-pointer block w-full px-4 py-2 text-sm">
					{item.label}
				</a>
			{:else}
				<Button 
					disabled={item.disabled} 
					class="not-disabled:cursor-pointer block w-full px-4 py-2 text-sm" 
					onclick={() => click?.(item)}>
					{item.label}
				</Button>
			{/if}
		{/each}
	</nav>
</div>

<style lang="postcss">
	@reference "tailwindcss";
</style>
