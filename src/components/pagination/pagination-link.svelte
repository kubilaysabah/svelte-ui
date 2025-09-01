<script lang="ts">
	import { Pagination as PaginationPrimitive } from 'bits-ui';
	import { cn } from '@/lib/utils';
	import { buttonVariants, type ButtonProps } from '@/components/button';

	let {
		ref = $bindable(null),
		class: className,
		size = 'icon',
		isActive,
		page,
		children,
		...restProps
	}: PaginationPrimitive.PageProps &
		ButtonProps & {
			isActive: boolean;
		} = $props();
</script>

{#snippet Fallback()}
	{page.value}
{/snippet}

<PaginationPrimitive.Page
	bind:ref
	{page}
	aria-current={isActive ? 'page' : undefined}
	data-slot="pagination-link"
	data-active={isActive}
	class={cn("svelte-ui",
		buttonVariants({
			variant: isActive ? 'outline' : 'ghost',
			size
		}),
		className
	)}
	children={children || Fallback}
	{...restProps}
/>
