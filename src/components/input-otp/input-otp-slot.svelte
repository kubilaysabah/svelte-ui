<script lang="ts">
	import { PinInput as InputOTPPrimitive } from "bits-ui";
	import { cn } from "@/lib/utils";

	let {
		ref = $bindable(null),
		cell,
		class: className,
		...restProps
	}: InputOTPPrimitive.CellProps = $props();
</script>

<InputOTPPrimitive.Cell
	{cell}
	bind:ref
	data-slot="input-otp-slot"
	class={cn("svelte-ui",
		"border-sui-input aria-invalid:border-sui-destructive dark:bg-sui-input/30 relative flex size-10 items-center justify-center border-y border-r text-sm outline-none transition-all first:rounded-l-md first:border-l last:rounded-r-md",
		cell.isActive &&
			"border-sui-ring ring-sui-ring/50 aria-invalid:border-sui-destructive dark:aria-invalid:ring-sui-destructive/40 aria-invalid:ring-sui-destructive/20 ring-offset-sui-background z-10 ring-[3px]",
		className
	)}
	{...restProps}
>
	{cell.char}
	{#if cell.hasFakeCaret}
		<div class="pointer-events-none absolute inset-0 flex items-center justify-center">
			<div class="animate-caret-blink bg-foreground h-4 w-px duration-1000"></div>
		</div>
	{/if}
</InputOTPPrimitive.Cell>
