import type { Component } from "svelte";
import type { Snippet } from "svelte";

declare const HoverCard: Component<{
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	openDelay?: number;
	closeDelay?: number;
	children?: Snippet;
}>;

export default HoverCard;
