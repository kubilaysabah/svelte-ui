<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";

	export const badgeVariants = tv({
		base: "svelte-ui focus-visible:border-sui-ring focus-visible:ring-sui-ring/50 aria-invalid:ring-sui-destructive/20 dark:aria-invalid:ring-sui-destructive/40 aria-invalid:border-sui-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border px-2 py-0.5 text-xs font-medium transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3",
		variants: {
			variant: {
				default:
					"bg-sui-primary text-sui-primary-foreground [a&]:hover:bg-sui-primary/90 border-transparent",
				secondary:
					"bg-sui-secondary text-sui-secondary-foreground [a&]:hover:bg-sui-secondary/90 border-transparent",
				destructive:
					"bg-sui-destructive [a&]:hover:bg-sui-destructive/90 focus-visible:ring-sui-destructive/20 dark:focus-visible:ring-sui-destructive/40 dark:bg-sui-destructive/70 border-transparent text-white",
				outline: "text-sui-foreground [a&]:hover:bg-sui-accent [a&]:hover:text-sui-accent-foreground border-sui-border",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	});

	export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];
</script>

<script lang="ts">
	import type { HTMLAnchorAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "@/lib/utils";

	let {
		ref = $bindable(null),
		href,
		class: className,
		variant = "default",
		children,
		...restProps
	}: WithElementRef<HTMLAnchorAttributes> & {
		variant?: BadgeVariant;
	} = $props();
</script>

<svelte:element
	this={href ? "a" : "span"}
	bind:this={ref}
	data-slot="badge"
	{href}
	class={cn(badgeVariants({ variant }), className)}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
