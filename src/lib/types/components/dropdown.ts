export type DropdownVariant = 'default' | 'destructive' | 'outline' | 'ghost';
export type DropdownSize = 'default' | 'sm' | 'lg';
export type DropdownAlign = 'start' | 'center' | 'end';

export interface DropdownItem {
	value: string | number;
	label: string;
	disabled?: boolean;
	separator?: boolean;
	icon?: string;
	shortcut?: string;
}

export interface DropdownProps {
	variant?: DropdownVariant;
	size?: DropdownSize;
	align?: DropdownAlign;
	items: DropdownItem[];
	placeholder?: string;
	disabled?: boolean;
	open?: boolean;
	trigger?: string;
	value?: string | number | null;
	closeOnSelect?: boolean;
	class?: string;
	triggerClass?: string;
	menuClass?: string;
	id?: string;
	'aria-label'?: string;
	onselect?: (item: DropdownItem) => void;
	onopen?: () => void;
	onclose?: () => void;
}
