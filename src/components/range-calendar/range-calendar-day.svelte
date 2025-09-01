<script lang="ts">
	import { RangeCalendar as RangeCalendarPrimitive } from "bits-ui";
	import { buttonVariants } from "@/components/button/index.js";
	import { cn } from "@/lib/utils";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: RangeCalendarPrimitive.DayProps = $props();
</script>

<RangeCalendarPrimitive.Day
	bind:ref
	class={cn("svelte-ui",
		buttonVariants({ variant: "ghost" }),
		"size-(--cell-size) flex select-none flex-col items-center justify-center gap-1 whitespace-nowrap p-0 font-normal leading-none",
		"[&[data-today]:not([data-selected])]:bg-sui-accent [&[data-today]:not([data-selected])]:text-sui-accent-foreground [&[data-today][data-disabled]]:text-sui-muted-foreground data-[range-middle]:rounded-none",
		// range Start
		"data-[range-start]:bg-sui-primary dark:data-[range-start]:hover:bg-sui-accent data-[range-start]:text-sui-primary-foreground",
		// range End
		"data-[range-end]:bg-sui-primary dark:data-[range-end]:hover:bg-sui-accent data-[range-end]:text-sui-primary-foreground",
		// Outside months
		"[&[data-outside-month]:not([data-selected])]:text-sui-muted-foreground [&[data-outside-month]:not([data-selected])]:hover:text-sui-accent-foreground",
		// Disabled
		"data-[disabled]:text-sui-muted-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
		// Unavailable
		"data-[unavailable]:line-through",
		"dark:data-[range-middle]:hover:bg-sui-accent/0",
		// hover
		"dark:hover:text-sui-accent-foreground",
		// focus
		"focus:border-sui-ring focus:ring-sui-ring/50 focus:relative",
		// inner spans
		"[&>span]:text-xs [&>span]:opacity-70",
		className
	)}
	{...restProps}
/>
