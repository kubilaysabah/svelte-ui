<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "@/lib/utils";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLSpanElement>> = $props();
</script>

<span
	bind:this={ref}
	data-slot="menubar-shortcut"
	class={cn("svelte-ui","text-sui-muted-foreground ml-auto text-xs tracking-widest", className)}
	{...restProps}
>
	{@render children?.()}
</span>
