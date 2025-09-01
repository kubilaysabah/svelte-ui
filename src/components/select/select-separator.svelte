<script lang="ts">
	import type { Separator as SeparatorPrimitive } from "bits-ui";
	import { Separator } from "@/components/separator/index.js";
	import { cn } from "@/lib/utils";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: SeparatorPrimitive.RootProps = $props();
</script>

<Separator
	bind:ref
	data-slot="select-separator"
	class={cn("svelte-ui","bg-border pointer-events-none -mx-1 my-1 h-px", className)}
	{...restProps}
/>
