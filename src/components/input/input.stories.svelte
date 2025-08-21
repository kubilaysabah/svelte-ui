<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Input from './input.svelte';

	const { Story } = defineMeta({
		component: Input,
		title: 'Components/Input',
		tags: ['autodocs'],
		argTypes: {
		}
	});
</script>

<Story name="Default Input" args={{ placeholder: 'Default Input' }}></Story>
