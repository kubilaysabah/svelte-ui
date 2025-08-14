<!--
@component
Button component with variants and sizes
Supports all native button attributes and events
-->

<script lang="ts">
	import { cn } from '$lib/utils/cn.js';
	import { buttonVariants } from '$lib/utils/button-variants.js';
	import type { ButtonVariant, ButtonSize } from '../../types/button.js';

	interface Props {
		variant?: ButtonVariant;
		size?: ButtonSize;
		disabled?: boolean;
		type?: 'button' | 'submit' | 'reset';
		role?: string;
		class?: string;
		children?: any;
		onclick?: (event: MouseEvent) => void;
	}

	let {
		variant = 'default',
		size = 'default',
		disabled = false,
		type = 'button',
		role = 'button',
		class: className = '',
		children,
		onclick,
		...restProps
	}: Props = $props();

	let computedClass = $derived(cn(buttonVariants({ variant, size }), className));
</script>

<button {type} {disabled} {role} class={computedClass} {onclick} {...restProps}>
	{@render children?.()}
</button>
