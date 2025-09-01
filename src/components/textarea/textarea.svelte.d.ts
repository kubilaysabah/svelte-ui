import { type WithElementRef } from "@/lib/utils";
import type { HTMLTextareaAttributes } from "svelte/elements";
declare const Textarea: import("svelte").Component<Omit<WithElementRef<HTMLTextareaAttributes>, "children">, {}, "value" | "ref">;
type Textarea = ReturnType<typeof Textarea>;
export default Textarea;
