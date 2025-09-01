<script lang="ts">
	import { cn, type WithElementRef } from "@/lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLTableRowElement>> = $props();
</script>

<tr
	bind:this={ref}
	data-slot="table-row"
	class={cn("svelte-ui",
		"hover:[&,&>svelte-css-wrapper]:[&>th,td]:bg-sui-muted/50 data-[state=selected]:bg-sui-muted border-b transition-colors",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</tr>
