<script lang="ts">
	import type { Snippet } from 'svelte'

	interface LayoutProps {
		children?: Snippet;
	}

	const { children }: LayoutProps = $props();
</script>

{@render children?.()}