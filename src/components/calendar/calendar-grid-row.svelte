<script lang="ts">
	import { Calendar as CalendarPrimitive } from "bits-ui";
	import { cn } from "@/lib/utils";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: CalendarPrimitive.GridRowProps = $props();
</script>

<CalendarPrimitive.GridRow bind:ref class={cn("svelte-ui","flex", className)} {...restProps} />
