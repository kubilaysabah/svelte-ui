export type SelectVariant = 'default' | 'destructive' | 'filled';
export type SelectSize = 'default' | 'sm' | 'lg';

export interface SelectOption {
	value: string | number;
	label: string;
	disabled?: boolean;
}

export interface SelectProps {
	variant?: SelectVariant;
	size?: SelectSize;
	value?: string | number | string[] | number[];
	options: SelectOption[];
	placeholder?: string;
	disabled?: boolean;
	required?: boolean;
	multiple?: boolean;
	error?: boolean;
	helperText?: string;
	errorText?: string;
	label?: string;
	id?: string;
	name?: string;
	class?: string;
	'aria-label'?: string;
	'aria-describedby'?: string;
	onchange?: (event: Event) => void;
}
