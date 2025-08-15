export type InputVariant = 'default' | 'destructive' | 'filled';

export type InputSize = 'default' | 'sm' | 'lg';

export interface InputProps {
	variant?: InputVariant;
	size?: InputSize;
	type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'number' | 'date' | 'time' | 'datetime-local' | 'month' | 'week';
	placeholder?: string;
	value?: string | number;
	disabled?: boolean;
	readonly?: boolean;
	required?: boolean;
	error?: boolean;
	helperText?: string;
	errorText?: string;
	label?: string;
	id?: string;
	name?: string;
	autocomplete?: string;
	min?: number | string;
	max?: number | string;
	step?: number | string;
	maxlength?: number;
	minlength?: number;
	pattern?: string;
	class?: string;
	'aria-label'?: string;
	'aria-describedby'?: string;
	'aria-invalid'?: boolean;
	onchange?: (event: Event) => void;
	oninput?: (event: Event) => void;
	onfocus?: (event: FocusEvent) => void;
	onblur?: (event: FocusEvent) => void;
}
