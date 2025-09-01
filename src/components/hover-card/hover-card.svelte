<script lang="ts">
	import { LinkPreview as LinkPreviewPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props {
		open?: boolean;
		onOpenChange?: (open: boolean) => void;
		openDelay?: number;
		closeDelay?: number;
		children?: Snippet;
	}

	let {
		open = $bindable(false),
		onOpenChange,
		openDelay = 700,
		closeDelay = 300,
		children,
		...restProps
	}: Props = $props();
</script>

<LinkPreviewPrimitive.Root
	bind:open
	{onOpenChange}
	{openDelay}
	{closeDelay}
	{...restProps}
>
	{@render children?.()}
</LinkPreviewPrimitive.Root>
