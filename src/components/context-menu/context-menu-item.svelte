<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from "bits-ui";
	import { cn } from "@/lib/utils";

	let {
		ref = $bindable(null),
		class: className,
		inset,
		variant = "default",
		...restProps
	}: ContextMenuPrimitive.ItemProps & {
		inset?: boolean;
		variant?: "default" | "destructive";
	} = $props();
</script>

<ContextMenuPrimitive.Item
	bind:ref
	data-slot="context-menu-item"
	data-inset={inset}
	data-variant={variant}
	class={cn("svelte-ui",
		"data-highlighted:bg-sui-accent data-highlighted:text-sui-accent-foreground data-[variant=destructive]:text-sui-destructive data-[variant=destructive]:data-highlighted:bg-sui-destructive/10 dark:data-[variant=destructive]:data-highlighted:bg-sui-destructive/20 data-[variant=destructive]:data-highlighted:text-sui-destructive data-[variant=destructive]:*:[svg]:!text-sui-destructive [&_svg:not([class*='text-'])]:text-sui-muted-foreground outline-hidden relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
		className
	)}
	{...restProps}
/>
