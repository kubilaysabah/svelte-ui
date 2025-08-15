export type CheckboxSize = 'default' | 'sm' | 'lg';

export interface CheckboxProps {
	checked?: boolean;
	indeterminate?: boolean;
	disabled?: boolean;
	required?: boolean;
	size?: CheckboxSize;
	value?: string;
	name?: string;
	id?: string;
	label?: string;
	description?: string;
	error?: boolean;
	errorText?: string;
	class?: string;
	'aria-label'?: string;
	'aria-describedby'?: string;
	onchange?: (event: Event) => void;
}
