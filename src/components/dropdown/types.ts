import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/**
 * Configuration for individual dropdown items
 */
export interface DropdownItem {
	/** Display text for the item */
	label: string;
	/** Optional value associated with the item */
	value?: string;
	/** Optional href for link items */
	href?: string;
	/** Whether the item is disabled */
	disabled?: boolean;
	/** Optional icon snippet to display */
	icon?: Snippet;
}

/**
 * Props for the Dropdown component
 * Extends native div attributes for full flexibility
 */
export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
	/** Current selected label to display */
	label?: string;
	/** Placeholder text when no label is set */
	placeholder?: string;
	/** Click handler for item selection */
	click?: (item: DropdownItem) => void;
	/** Array of dropdown items */
	items?: DropdownItem[];
	/** Whether the dropdown is disabled */
	disabled?: boolean;
	/** Controls the open state (bindable) */
	open?: boolean;
}

/**
 * Instance methods available on the Dropdown component
 */
export interface DropdownInstance {
	/** Opens the dropdown menu */
	open: () => void;
	/** Closes the dropdown menu */
	close: () => void;
	/** Toggles the dropdown state */
	toggle: () => void;
	/** Checks if dropdown is currently open */
	isOpen: () => boolean;
}
