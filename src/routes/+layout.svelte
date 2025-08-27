<script lang="ts">
	import '@/app.css';
	import type { Snippet } from 'svelte';

	interface LayoutProps {
		children?: Snippet;
	}

	const { children }: LayoutProps = $props();
</script>

{@render children?.()}

<style lang="postcss">
	@reference "tailwindcss";
	:global(html) {
		background-color: var(--background);
		color: var(--color-foreground);
	}
</style>
