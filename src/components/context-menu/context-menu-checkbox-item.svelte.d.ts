import { ContextMenu as ContextMenuPrimitive } from "bits-ui";
import { type WithoutChildrenOrChild } from "@/lib/utils";
import type { Snippet } from "svelte";
type $$ComponentProps = WithoutChildrenOrChild<ContextMenuPrimitive.CheckboxItemProps> & {
    children?: Snippet;
};
declare const ContextMenuCheckboxItem: import("svelte").Component<$$ComponentProps, {}, "ref" | "checked" | "indeterminate">;
type ContextMenuCheckboxItem = ReturnType<typeof ContextMenuCheckboxItem>;
export default ContextMenuCheckboxItem;
