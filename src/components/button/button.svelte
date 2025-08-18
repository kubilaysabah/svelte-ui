<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	interface ButtonProps extends HTMLButtonAttributes {
		variant?: 'fill' | 'outline' | 'text';
		color?: 'primary' | 'secondary';
		size?: 'small' | 'medium' | 'large';
	}

	const { children, ...rest }: ButtonProps = $props();
</script>

<button {...rest}>
	{@render children?.()}
</button>

<style lang="postcss">
	@reference "tailwindcss";

  button {
    @apply inline-flex items-center font-medium; 
  }
</style>
