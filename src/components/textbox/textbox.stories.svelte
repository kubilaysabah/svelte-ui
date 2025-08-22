<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import TextBox from './textbox.svelte';

	const { Story } = defineMeta({
		component: TextBox,
		title: 'Components/TextBox',
		tags: ['autodocs']
	});
</script>

<!-- Basit örnekler -->
<Story name="Primary" args={{ placeholder: 'Primary TextBox' }} />
<Story name="Secondary" args={{ placeholder: 'Secondary TextBox', color: 'secondary' }} />
<Story name="Disabled" args={{ placeholder: 'Disabled TextBox', disabled: true }} />

<!-- String prefix/suffix -->
<Story name="With Prefix" args={{ placeholder: 'With string prefix', prefix: '$' }} />
<Story name="With Suffix" args={{ placeholder: 'With string suffix', suffix: '.com' }} />
<Story name="With Both" args={{ placeholder: 'Amount', prefix: '$', suffix: 'USD' }} />