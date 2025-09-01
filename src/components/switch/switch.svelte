<script lang="ts">
	import { Switch as SwitchPrimitive } from "bits-ui";
	import { cn, type WithoutChildrenOrChild } from "@/lib/utils";

	let {
		ref = $bindable(null),
		class: className,
		checked = $bindable(false),
		...restProps
	}: WithoutChildrenOrChild<SwitchPrimitive.RootProps> = $props();
</script>

<SwitchPrimitive.Root
	bind:ref
	bind:checked
	data-slot="switch"
	class={cn("svelte-ui",
		"data-[state=checked]:bg-sui-primary data-[state=unchecked]:bg-sui-input focus-visible:border-sui-ring focus-visible:ring-sui-ring/50 dark:data-[state=unchecked]:bg-sui-input/80 shadow-xs peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent outline-none transition-all focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
		className
	)}
	{...restProps}
>
	<SwitchPrimitive.Thumb
		data-slot="switch-thumb"
		class={cn("svelte-ui",
			"bg-sui-background dark:data-[state=unchecked]:bg-sui-foreground dark:data-[state=checked]:bg-sui-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
		)}
	/>
</SwitchPrimitive.Root>
