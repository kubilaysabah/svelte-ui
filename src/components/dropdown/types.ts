import type { Snippet } from 'svelte';

export interface DropdownItem {
	label: string;
	value?: string;
	href?: string;
	disabled?: boolean;
	icon?: Snippet;
}

export interface DropdownProps {
	label?: string;
	placeholder?: string;
    click?: (item: DropdownItem) => void;
	items?: DropdownItem[];
}
