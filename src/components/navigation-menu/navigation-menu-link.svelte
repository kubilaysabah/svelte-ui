<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from "bits-ui";
	import { cn } from "@/lib/utils";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: NavigationMenuPrimitive.LinkProps = $props();
</script>

<NavigationMenuPrimitive.Link
	bind:ref
	data-slot="navigation-menu-link"
	class={cn("svelte-ui",
		"data-[active=true]:focus:bg-sui-accent data-[active=true]:hover:bg-sui-accent data-[active=true]:bg-sui-accent/50 data-[active=true]:text-sui-accent-foreground hover:bg-sui-accent hover:text-sui-accent-foreground focus:bg-sui-accent focus:text-sui-accent-foreground focus-visible:ring-sui-ring/50 [&_svg:not([class*='text-'])]:text-sui-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm outline-none transition-all focus-visible:outline-1 focus-visible:ring-[3px] [&_svg:not([class*='size-'])]:size-4",
		className
	)}
	{...restProps}
/>
