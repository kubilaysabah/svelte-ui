<script lang="ts">
	import { buttonVariants } from "@/components/button/index.js";
	import { cn } from "@/lib/utils";
	import { Calendar as CalendarPrimitive } from "bits-ui";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: CalendarPrimitive.DayProps = $props();
</script>

<CalendarPrimitive.Day
	bind:ref
	class={cn("svelte-ui",
		buttonVariants({ variant: "ghost" }),
		"size-(--cell-size) flex select-none flex-col items-center justify-center gap-1 whitespace-nowrap p-0 font-normal leading-none",
		"[&[data-today]:not([data-selected])]:bg-sui-accent [&[data-today]:not([data-selected])]:text-sui-accent-foreground [&[data-today][data-disabled]]:text-sui-muted-foreground",
		"data-[selected]:bg-sui-primary dark:data-[selected]:hover:bg-sui-accent/50 data-[selected]:text-sui-primary-foreground",
		// Outside months
		"[&[data-outside-month]:not([data-selected])]:text-sui-muted-foreground [&[data-outside-month]:not([data-selected])]:hover:text-sui-accent-foreground",
		// Disabled
		"data-[disabled]:text-sui-muted-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
		// Unavailable
		"data-[unavailable]:text-sui-muted-foreground data-[unavailable]:line-through",
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
