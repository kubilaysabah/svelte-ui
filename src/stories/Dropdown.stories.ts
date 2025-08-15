import Dropdown from '$lib/components/ui/dropdown.svelte';
import type { DropdownItem } from '$lib/types/dropdown.js';

const basicItems: DropdownItem[] = [
	{ value: 'profile', label: 'Profile', icon: '👤' },
	{ value: 'settings', label: 'Settings', icon: '⚙️' },
	{ value: 'separator1', label: '', separator: true },
	{ value: 'help', label: 'Help & Support', icon: '❓' },
	{ value: 'separator2', label: '', separator: true },
	{ value: 'logout', label: 'Logout', icon: '🚪' }
];

const actionItems: DropdownItem[] = [
	{ value: 'new', label: 'New File', icon: '📄', shortcut: '⌘N' },
	{ value: 'open', label: 'Open...', icon: '📂', shortcut: '⌘O' },
	{ value: 'save', label: 'Save', icon: '💾', shortcut: '⌘S' },
	{ value: 'separator1', label: '', separator: true },
	{ value: 'copy', label: 'Copy', icon: '📋', shortcut: '⌘C' },
	{ value: 'paste', label: 'Paste', icon: '📄', shortcut: '⌘V' },
	{ value: 'separator2', label: '', separator: true },
	{ value: 'delete', label: 'Delete', icon: '🗑️' }
];

const selectItems: DropdownItem[] = [
	{ value: 'option1', label: 'First Option' },
	{ value: 'option2', label: 'Second Option' },
	{ value: 'option3', label: 'Third Option' },
	{ value: 'disabled', label: 'Disabled Option', disabled: true }
];

// Default export for Storybook
export default {
	title: 'Components/Dropdown',
	component: Dropdown,
	parameters: {
		layout: 'centered'
	}
};

// Stories
export const Default = {
	args: {
		items: basicItems,
		placeholder: 'User Menu'
	}
};

export const WithCustomTrigger = {
	args: {
		items: basicItems,
		trigger: 'Actions'
	}
};

export const Variants = {
	args: {
		items: basicItems,
		variant: 'outline',
		placeholder: 'Variants Demo'
	}
};

export const Sizes = {
	args: {
		items: selectItems,
		size: 'lg',
		placeholder: 'Size Demo'
	}
};

export const WithIcons = {
	args: {
		items: actionItems,
		placeholder: 'File Menu'
	}
};

export const WithShortcuts = {
	args: {
		items: actionItems,
		placeholder: 'Actions'
	}
};

export const WithSeparators = {
	args: {
		items: [
			{ value: 'edit', label: 'Edit', icon: '✏️' },
			{ value: 'duplicate', label: 'Duplicate', icon: '📋' },
			{ value: 'separator1', label: '', separator: true },
			{ value: 'archive', label: 'Archive', icon: '📦' },
			{ value: 'separator2', label: '', separator: true },
			{ value: 'delete', label: 'Delete', icon: '🗑️' }
		],
		placeholder: 'More Actions'
	}
};

export const WithSelectedValue = {
	args: {
		items: selectItems,
		value: 'option2',
		placeholder: 'Choose Option'
	}
};

export const Disabled = {
	args: {
		items: basicItems,
		disabled: true,
		placeholder: 'Disabled Dropdown'
	}
};

export const DisabledItems = {
	args: {
		items: [
			{ value: 'available1', label: 'Available Option 1' },
			{ value: 'available2', label: 'Available Option 2' },
			{ value: 'disabled1', label: 'Disabled Option 1', disabled: true },
			{ value: 'available3', label: 'Available Option 3' },
			{ value: 'disabled2', label: 'Disabled Option 2', disabled: true }
		],
		placeholder: 'Mixed States'
	}
};

export const ComplexExample = {
	args: {
		items: [
			{ value: 'new', label: 'New Document', icon: '📄', shortcut: '⌘N' },
			{ value: 'new-folder', label: 'New Folder', icon: '📁', shortcut: '⇧⌘N' },
			{ value: 'separator1', label: '', separator: true },
			{ value: 'open', label: 'Open...', icon: '📂', shortcut: '⌘O' },
			{ value: 'open-recent', label: 'Open Recent', icon: '🕒' },
			{ value: 'separator2', label: '', separator: true },
			{ value: 'save', label: 'Save', icon: '💾', shortcut: '⌘S' },
			{ value: 'save-as', label: 'Save As...', icon: '💾', shortcut: '⇧⌘S' },
			{ value: 'separator3', label: '', separator: true },
			{ value: 'import', label: 'Import', icon: '📥' },
			{ value: 'export', label: 'Export', icon: '📤' },
			{ value: 'separator4', label: '', separator: true },
			{ value: 'print', label: 'Print', icon: '🖨️', shortcut: '⌘P' },
			{ value: 'separator5', label: '', separator: true },
			{ value: 'close', label: 'Close', icon: '✖️', shortcut: '⌘W' },
			{ value: 'quit', label: 'Quit App', icon: '🚪', shortcut: '⌘Q' }
		],
		placeholder: 'File',
		variant: 'outline'
	}
};
