export type TextareaVariant = 'default' | 'destructive' | 'filled';
export type TextareaSize = 'default' | 'sm' | 'lg';

export interface TextareaProps {
	variant?: TextareaVariant;
	size?: TextareaSize;
	placeholder?: string;
	value?: string;
	disabled?: boolean;
	readonly?: boolean;
	required?: boolean;
	error?: boolean;
	helperText?: string;
	errorText?: string;
	label?: string;
	id?: string;
	name?: string;
	rows?: number;
	cols?: number;
	maxlength?: number;
	minlength?: number;
	resize?: 'none' | 'both' | 'horizontal' | 'vertical';
	class?: string;
	'aria-label'?: string;
	'aria-describedby'?: string;
	'aria-invalid'?: boolean;
	onchange?: (event: Event) => void;
	oninput?: (event: Event) => void;
	onfocus?: (event: FocusEvent) => void;
	onblur?: (event: FocusEvent) => void;
}
