import { RangeCalendar as RangeCalendarPrimitive } from "bits-ui";
import { type ButtonVariant } from "@/components/button/index.js";
type $$ComponentProps = RangeCalendarPrimitive.PrevButtonProps & {
    variant?: ButtonVariant;
};
declare const RangeCalendarPrevButton: import("svelte").Component<$$ComponentProps, {}, "ref">;
type RangeCalendarPrevButton = ReturnType<typeof RangeCalendarPrevButton>;
export default RangeCalendarPrevButton;
