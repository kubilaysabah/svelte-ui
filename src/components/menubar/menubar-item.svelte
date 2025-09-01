<script lang="ts">
	import { Menubar as MenubarPrimitive } from "bits-ui";
	import { cn } from "@/lib/utils";

	let {
		ref = $bindable(null),
		class: className,
		inset = undefined,
		variant = "default",
		...restProps
	}: MenubarPrimitive.ItemProps & {
		inset?: boolean;
		variant?: "default" | "destructive";
	} = $props();
</script>

<MenubarPrimitive.Item
	bind:ref
	data-slot="menubar-item"
	data-inset={inset}
	data-variant={variant}
	class={cn("svelte-ui",
		"focus:bg-sui-accent focus:text-sui-accent-foreground data-[variant=destructive]:text-sui-destructive data-[variant=destructive]:focus:bg-sui-destructive/10 dark:data-[variant=destructive]:focus:bg-sui-destructive/20 data-[variant=destructive]:focus:text-sui-destructive data-[variant=destructive]:*:[svg]:!text-sui-destructive [&_svg:not([class*='text-'])]:text-sui-muted-foreground outline-hidden relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
		className
	)}
	{...restProps}
/>
