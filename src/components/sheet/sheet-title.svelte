<script lang="ts">
	import { Dialog as SheetPrimitive } from "bits-ui";
	import { cn } from "@/lib/utils";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: SheetPrimitive.TitleProps = $props();
</script>

<SheetPrimitive.Title
	bind:ref
	data-slot="sheet-title"
	class={cn("svelte-ui","text-sui-foreground font-semibold", className)}
	{...restProps}
/>
