import { Slider as SliderPrimitive } from "bits-ui";
import { type WithoutChildrenOrChild } from "@/lib/utils";
declare const Slider: import("svelte").Component<WithoutChildrenOrChild<SliderPrimitive.RootProps>, {}, "value" | "ref">;
type Slider = ReturnType<typeof Slider>;
export default Slider;
