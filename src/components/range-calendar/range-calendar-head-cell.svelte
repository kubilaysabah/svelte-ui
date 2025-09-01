<script lang="ts">
	import { RangeCalendar as RangeCalendarPrimitive } from "bits-ui";
	import { cn } from "@/lib/utils";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: RangeCalendarPrimitive.HeadCellProps = $props();
</script>

<RangeCalendarPrimitive.HeadCell
	bind:ref
	class={cn("svelte-ui",
		"text-sui-muted-foreground w-(--cell-size) rounded-md text-[0.8rem] font-normal",
		className
	)}
	{...restProps}
/>
