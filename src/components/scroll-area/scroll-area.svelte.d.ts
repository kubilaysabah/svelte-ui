import { ScrollArea as ScrollAreaPrimitive } from "bits-ui";
import { ScrollArea } from "./index.js";
import { type WithoutChild } from "@/lib/utils";
type $$ComponentProps = WithoutChild<ScrollAreaPrimitive.RootProps> & {
    orientation?: "vertical" | "horizontal" | "both" | undefined;
    scrollbarXClasses?: string | undefined;
    scrollbarYClasses?: string | undefined;
};
declare const ScrollArea: import("svelte").Component<$$ComponentProps, {}, "ref">;
type ScrollArea = ReturnType<typeof ScrollArea>;
export default ScrollArea;
