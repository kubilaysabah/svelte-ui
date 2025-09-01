<script lang="ts">
	import * as FormPrimitive from "formsnap";
	import { cn, type WithoutChild } from "@/lib/utils";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: WithoutChild<FormPrimitive.LegendProps> = $props();
</script>

<FormPrimitive.Legend
	bind:ref
	class={cn("svelte-ui","data-[fs-error]:text-sui-destructive text-sm font-medium leading-none", className)}
	{...restProps}
/>
