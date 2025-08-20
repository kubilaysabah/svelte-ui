<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Dropdown from './dropdown.svelte';

	const { Story } = defineMeta({
		component: Dropdown
	});

	const items = [
		{ label: 'Item 1', value: 'item-1' },
		{ label: 'Item 2', value: 'item-2' },
		{ label: 'Item 3', value: 'item-3' }
	];

</script>

<Story name="Dropdown" args={{ items }}>
	{#snippet children()}Primary Dropdown{/snippet}
</Story>
