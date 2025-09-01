<script lang="ts">
	import { Menubar as MenubarPrimitive } from "bits-ui";
	import { cn } from "@/lib/utils";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: MenubarPrimitive.TriggerProps = $props();
</script>

<MenubarPrimitive.Trigger
	bind:ref
	data-slot="menubar-trigger"
	class={cn("svelte-ui",
		"focus:bg-sui-accent focus:text-sui-accent-foreground data-[state=open]:bg-sui-accent data-[state=open]:text-sui-accent-foreground outline-hidden flex select-none items-center rounded-sm px-2 py-1 text-sm font-medium",
		className
	)}
	{...restProps}
/>
