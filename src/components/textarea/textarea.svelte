<script lang="ts">
	import { cn, type WithElementRef, type WithoutChildren } from "@/lib/utils";
	import type { HTMLTextareaAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		...restProps
	}: WithoutChildren<WithElementRef<HTMLTextareaAttributes>> = $props();
</script>

<textarea
	bind:this={ref}
	data-slot="textarea"
	class={cn("svelte-ui",
		"border-sui-input placeholder:text-sui-muted-foreground focus-visible:border-sui-ring focus-visible:ring-sui-ring/50 aria-invalid:ring-sui-destructive/20 dark:aria-invalid:ring-sui-destructive/40 aria-invalid:border-sui-destructive dark:bg-sui-input/30 field-sizing-content shadow-xs flex min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
		className
	)}
	bind:value
	{...restProps}
></textarea>
