import { Select as SelectPrimitive } from "bits-ui";
import { type WithoutChild } from "@/lib/utils";
type $$ComponentProps = WithoutChild<SelectPrimitive.ContentProps> & {
    portalProps?: SelectPrimitive.PortalProps;
};
declare const SelectContent: import("svelte").Component<$$ComponentProps, {}, "ref">;
type SelectContent = ReturnType<typeof SelectContent>;
export default SelectContent;
