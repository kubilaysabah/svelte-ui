<script lang="ts">
	import { Dialog as DialogPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props {
		open?: boolean;
		onOpenChange?: (open: boolean) => void;
		children?: Snippet;
	}

	let {
		open = $bindable(false),
		onOpenChange,
		children,
		...restProps
	}: Props = $props();
</script>

<DialogPrimitive.Root
	bind:open
	{onOpenChange}
	{...restProps}
>
	{@render children?.()}
</DialogPrimitive.Root>
