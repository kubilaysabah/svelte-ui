import { Accordion as AccordionPrimitive } from "bits-ui";
import { type WithoutChild } from "@/lib/utils";
type $$ComponentProps = WithoutChild<AccordionPrimitive.TriggerProps> & {
    level?: AccordionPrimitive.HeaderProps["level"];
};
declare const AccordionTrigger: import("svelte").Component<$$ComponentProps, {}, "ref">;
type AccordionTrigger = ReturnType<typeof AccordionTrigger>;
export default AccordionTrigger;
