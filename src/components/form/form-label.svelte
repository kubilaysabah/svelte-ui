<script lang="ts">
	import * as FormPrimitive from "formsnap";
	import { Label } from "@/components/label/index.js";
	import { cn, type WithoutChild } from "@/lib/utils";

	let {
		ref = $bindable(null),
		children,
		class: className,
		...restProps
	}: WithoutChild<FormPrimitive.LabelProps> = $props();
</script>

<FormPrimitive.Label {...restProps} bind:ref>
	{#snippet child({ props })}
		<Label
			{...props}
			data-slot="form-label"
			class={cn("svelte-ui","data-[fs-error]:text-sui-destructive", className)}
		>
			{@render children?.()}
		</Label>
	{/snippet}
</FormPrimitive.Label>
