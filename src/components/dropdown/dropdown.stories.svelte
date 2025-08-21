<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Dropdown from './dropdown.svelte';

	const { Story } = defineMeta({
		component: Dropdown,
		title: 'Components/Dropdown',
		tags: ['autodocs'],
		argTypes: {
			label: {
				control: 'text',
				description: 'Current selected label to display'
			},
			placeholder: {
				control: 'text',
				description: 'Placeholder text when no label is set'
			},
			disabled: {
				control: 'boolean',
				description: 'Whether the dropdown is disabled'
			},
			open: {
				control: 'boolean',
				description: 'Controls the open state (bindable)'
			}
		}
	});
</script>

<script lang="ts">
	import type { DropdownItem } from './types';
	import { UserIcon, SettingsIcon, LogOutIcon, FileTextIcon, ImageIcon } from '@lucide/svelte';

	// Reactive state for different examples
	let selectedItem = $state<string>('');
	let controlledOpen = $state(false);
	let selectedAction = $state<string>('');

	/**
	 * Sample dropdown items for basic usage
	 */
	const basicItems: DropdownItem[] = [
		{ label: 'Option 1', value: 'option-1' },
		{ label: 'Option 2', value: 'option-2' },
		{ label: 'Option 3', value: 'option-3' },
		{ label: 'Disabled Option', value: 'disabled', disabled: true }
	];

	/**
	 * Sample items with icons for advanced usage
	 */
	const iconItems: DropdownItem[] = [
		{
			label: 'Profile',
			value: 'profile'
		},
		{
			label: 'Settings',
			value: 'settings'
		},
		{
			label: 'Documents',
			value: 'documents'
		},
		{
			label: 'Images',
			value: 'images'
		},
		{
			label: 'Logout',
			value: 'logout'
		}
	];

	/**
	 * Sample items with links
	 */
	const linkItems: DropdownItem[] = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' },
		{ label: 'Blog', href: '/blog' }
	];

	/**
	 * Handles item selection for basic dropdown
	 */
	function handleBasicSelection(item: DropdownItem): void {
		selectedItem = `${item.label} (${item.value})`;
	}

	/**
	 * Handles action selection
	 */
	function handleActionSelection(item: DropdownItem): void {
		selectedAction = `Executed: ${item.label}`;

		// Simulate action execution
		setTimeout(() => {
			selectedAction = '';
		}, 3000);
	}

	/**
	 * Resets all selections
	 */
	function resetSelections(): void {
		selectedItem = '';
		selectedAction = '';
		controlledOpen = false;
	}
</script>

<Story
	name="Basic Usage"
	args={{
		placeholder: 'Choose an option',
		items: basicItems,
		click: handleBasicSelection
	}}
></Story>

<Story
	name="With Icons"
	args={{
		label: 'Choose an option',
		items: iconItems,
		click: handleActionSelection
	}}
></Story>

<Story
	name="Navigation Links"
	args={{
		label: 'Navigation',
		items: linkItems,
		click: handleActionSelection
	}}
></Story>

<Story
	name="Controlled State"
	args={{
		placeholder: 'Controlled dropdown',
		items: basicItems,
		click: handleBasicSelection,
		open: controlledOpen
	}}
></Story>

<Story
	name="Disabled State"
	args={{ disabled: true, label: 'Disabled Dropdown', items: basicItems }}
></Story>

<Story
	name="Accessibility Features"
	args={{
		placeholder: 'Try keyboard navigation',
		items: iconItems,
		click: handleActionSelection
	}}
></Story>
