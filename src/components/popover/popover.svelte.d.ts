import type { Component } from "svelte";
import type { Popover as PopoverPrimitive } from "bits-ui";
import type { Snippet } from "svelte";

declare const Popover: Component<{
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	children?: Snippet;
} & PopoverPrimitive.RootProps>;

export default Popover;
