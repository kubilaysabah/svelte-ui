<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Switch from './switch.svelte';

	const { Story } = defineMeta({
		component: Switch,
		title: 'Components/Switch',
		tags: ['autodocs'],
		argTypes: {
			size: {
				control: 'select',
				options: ['small', 'medium', 'large'],
				description: 'Switch size variant'
			},
			color: {
				control: 'select',
				options: ['primary', 'secondary', 'success', 'warning', 'danger'],
				description: 'Switch color variant'
			},
			disabled: {
				control: 'boolean',
				description: 'Whether the switch is disabled'
			},
			checked: {
				control: 'boolean',
				description: 'Whether the switch is checked'
			},
			label: {
				control: 'text',
				description: 'Label text for the switch'
			}
		}
	});
</script>

<Story name="Small" args={{ size: 'small', color: 'primary', label: 'Small toggle', checked: false }}>
</Story>

<Story name="Medium" args={{ size: 'medium', color: 'primary', label: 'Default toggle', checked: false }}>
</Story>

<Story name="Large" args={{ size: 'large', color: 'primary', label: 'Large toggle', checked: false }}>
</Story>

<Story name="Primary" args={{ size: 'medium', color: 'primary', label: 'Primary toggle', checked: true }}>
</Story>

<Story name="Secondary" args={{ size: 'medium', color: 'secondary', label: 'Secondary toggle', checked: true }}>
</Story>

<Story name="Success" args={{ size: 'medium', color: 'success', label: 'Success toggle', checked: true }}>
</Story>

<Story name="Warning" args={{ size: 'medium', color: 'warning', label: 'Warning toggle', checked: true }}>
</Story>

<Story name="Danger" args={{ size: 'medium', color: 'danger', label: 'Danger toggle', checked: true }}>
</Story>

<Story name="Disabled" args={{ size: 'medium', color: 'primary', label: 'Disabled toggle', disabled: true, checked: false }}>
</Story>

<Story name="Disabled Checked" args={{ size: 'medium', color: 'danger', label: 'Disabled checked toggle', disabled: true, checked: true }}>
</Story>

<Story name="Without Label" args={{ size: 'medium', color: 'primary', checked: false }}>
</Story>