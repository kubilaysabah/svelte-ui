import type { ToggleVariants } from "@/components/toggle/index.js";
export declare function setToggleGroupCtx(props: ToggleVariants): void;
export declare function getToggleGroupCtx(): ToggleVariants;
import { ToggleGroup as ToggleGroupPrimitive } from "bits-ui";
type $$ComponentProps = ToggleGroupPrimitive.RootProps & ToggleVariants;
declare const ToggleGroup: import("svelte").Component<$$ComponentProps, {}, "value" | "ref">;
type ToggleGroup = ReturnType<typeof ToggleGroup>;
export default ToggleGroup;
