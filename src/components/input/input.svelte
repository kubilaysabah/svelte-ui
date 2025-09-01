<script lang="ts">
	import type { HTMLInputAttributes, HTMLInputTypeAttribute } from "svelte/elements";
	import { cn, type WithElementRef } from "@/lib/utils";

	type InputType = Exclude<HTMLInputTypeAttribute, "file">;

	type Props = WithElementRef<
		Omit<HTMLInputAttributes, "type"> &
			({ type: "file"; files?: FileList } | { type?: InputType; files?: undefined })
	>;

	let {
		ref = $bindable(null),
		value = $bindable(),
		type,
		files = $bindable(),
		class: className,
		...restProps
	}: Props = $props();
</script>

{#if type === "file"}
	<input
		bind:this={ref}
		data-slot="input"
		class={cn(
			"svelte-ui selection:bg-sui-primary dark:bg-sui-input/30 selection:text-sui-primary-foreground border-sui-input ring-offset-sui-background placeholder:text-sui-muted-foreground shadow-xs flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 pt-1.5 text-sm font-medium outline-none transition-[color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
			"focus-visible:border-sui-ring focus-visible:ring-sui-ring/50 focus-visible:ring-[3px]",
			"aria-invalid:ring-sui-destructive/20 dark:aria-invalid:ring-sui-destructive/40 aria-invalid:border-sui-destructive",
			className
		)}
		type="file"
		bind:files
		bind:value
		{...restProps}
	/>
{:else}
	<input
		bind:this={ref}
		data-slot="input"
		class={cn(
			"svelte-ui border-sui-input bg-sui-background selection:bg-sui-primary dark:bg-sui-input/30 selection:text-sui-primary-foreground ring-offset-sui-background placeholder:text-sui-muted-foreground shadow-xs flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base outline-none transition-[color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
			"focus-visible:border-sui-ring focus-visible:ring-sui-ring/50 focus-visible:ring-[3px]",
			"aria-invalid:ring-sui-destructive/20 dark:aria-invalid:ring-sui-destructive/40 aria-invalid:border-sui-destructive",
			className
		)}
		{type}
		bind:value
		{...restProps}
	/>
{/if}
