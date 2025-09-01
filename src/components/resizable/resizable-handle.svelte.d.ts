import * as ResizablePrimitive from "paneforge";
import { type WithoutChildrenOrChild } from "@/lib/utils";
type $$ComponentProps = WithoutChildrenOrChild<ResizablePrimitive.PaneResizerProps> & {
    withHandle?: boolean;
};
declare const ResizableHandle: import("svelte").Component<$$ComponentProps, {}, "ref">;
type ResizableHandle = ReturnType<typeof ResizableHandle>;
export default ResizableHandle;
