<script lang="ts">
	import { RangeCalendar as RangeCalendarPrimitive } from "bits-ui";
	import { cn } from "@/lib/utils";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: RangeCalendarPrimitive.CellProps = $props();
</script>

<RangeCalendarPrimitive.Cell
	bind:ref
	class={cn("svelte-ui",
		"size-(--cell-size) dark:[&:has([data-range-start])]:hover:bg-sui-accent dark:[&:has([data-range-end])]:hover:bg-sui-accent [&:has([data-range-middle])]:bg-sui-accent dark:[&:has([data-range-middle])]:hover:bg-sui-accent/50 [&:has([data-selected])]:bg-sui-accent relative p-0 text-center text-sm focus-within:z-20 data-[range-middle]:rounded-r-md [&:first-child[data-selected]_[data-bits-day]]:rounded-l-md [&:has([data-range-end])]:rounded-r-md [&:has([data-range-middle])]:rounded-none first:[&:has([data-range-middle])]:rounded-l-md last:[&:has([data-range-middle])]:rounded-r-md [&:has([data-range-start])]:rounded-l-md [&:last-child[data-selected]_[data-bits-day]]:rounded-r-md",
		className
	)}
	{...restProps}
/>
