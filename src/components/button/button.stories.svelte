<script module lang="ts">
	import { defineMeta, type StoryContext } from '@storybook/addon-svelte-csf';
	import { type ComponentProps } from 'svelte';

	import Button from './button.svelte';

	const { Story } = defineMeta({
		component: Button
	});

	type Args = ComponentProps<typeof Button>;
</script>

<Story name="Small" args={{ variant: "fill", color: "primary", size: "small" }}>
	{#snippet children()}Small{/snippet}
</Story>

<Story name="Medium" args={{ variant: "fill", color: "primary", size: "medium" }}>
	{#snippet children()}Medium{/snippet}
</Story>

<Story name="Large" args={{ variant: "fill", color: "primary", size: "large" }}>
	{#snippet children()}Large{/snippet}
</Story>

<Story name="Outline" args={{ variant: "outline", color: "primary", size: "small" }}>
	{#snippet children()}Outline{/snippet}
</Story>

<Story name="Ghost" args={{ variant: "ghost", color: "primary", size: "small" }}>
	{#snippet children()}Ghost{/snippet}
</Story>