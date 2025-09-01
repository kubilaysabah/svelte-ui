<script lang="ts" module>
	import { cn } from "@/lib/utils";
	import { tv } from "tailwind-variants";

	export const navigationMenuTriggerStyle = tv({
		base: "bg-sui-background hover:bg-sui-accent hover:text-sui-accent-foreground focus:bg-sui-accent focus:text-sui-accent-foreground data-[state=open]:hover:bg-sui-accent data-[state=open]:text-sui-accent-foreground data-[state=open]:focus:bg-sui-accent data-[state=open]:bg-sui-accent/50 focus-visible:ring-sui-ring/50 group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium outline-none transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
	});
</script>

<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from "bits-ui";
	import ChevronDownIcon from "@lucide/svelte/icons/chevron-down";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: NavigationMenuPrimitive.TriggerProps = $props();
</script>

<NavigationMenuPrimitive.Trigger
	bind:ref
	data-slot="navigation-menu-trigger"
	class={cn("svelte-ui",navigationMenuTriggerStyle(), "group", className)}
	{...restProps}
>
	{@render children?.()}

	<ChevronDownIcon
		class="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
		aria-hidden="true"
	/>
</NavigationMenuPrimitive.Trigger>
