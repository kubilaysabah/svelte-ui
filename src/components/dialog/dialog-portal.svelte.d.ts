import type { Component } from "svelte";
import type { Dialog as DialogPrimitive } from "bits-ui";
import type { Snippet } from "svelte";

declare const DialogPortal: Component<DialogPrimitive.PortalProps & {
	children?: Snippet;
}>;

export default DialogPortal;
