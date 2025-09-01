import type { Component } from "svelte";
import type { Snippet } from "svelte";

declare const Dialog: Component<{
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	children?: Snippet;
}>;

export default Dialog;
