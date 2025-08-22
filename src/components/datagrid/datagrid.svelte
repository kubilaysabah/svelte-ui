<script lang="ts" generics="T">
	import { cn } from '$lib/utils';
	import type { DataGridProps } from './types';
	let { columns = [], rows = [], class: className }: DataGridProps<T> = $props();
</script>

<div class={cn('grid', className)}>
	{#each columns as column}
		<div class={cn(column.class)}>
			{column.label}
		</div>
	{/each}
	{#each rows as row}
		{#each columns as column}
			<div class={cn(row.class)}>
				{row[column.key as keyof typeof row]}
			</div>
		{/each}
	{/each}
</div>
