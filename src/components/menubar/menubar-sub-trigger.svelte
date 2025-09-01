<script lang="ts">
	import { Menubar as MenubarPrimitive } from "bits-ui";
	import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
	import { cn, type WithoutChild } from "@/lib/utils";

	let {
		ref = $bindable(null),
		class: className,
		inset = undefined,
		children,
		...restProps
	}: WithoutChild<MenubarPrimitive.SubTriggerProps> & {
		inset?: boolean;
	} = $props();
</script>

<MenubarPrimitive.SubTrigger
	bind:ref
	data-slot="menubar-sub-trigger"
	data-inset={inset}
	class={cn("svelte-ui",
		"focus:bg-sui-accent focus:text-sui-accent-foreground data-[state=open]:bg-sui-accent data-[state=open]:text-sui-accent-foreground flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[inset]:pl-8",
		className
	)}
	{...restProps}
>
	{@render children?.()}
	<ChevronRightIcon class="ml-auto size-4" />
</MenubarPrimitive.SubTrigger>
