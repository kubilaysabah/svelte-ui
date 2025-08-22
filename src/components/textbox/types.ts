import type { HTMLInputAttributes } from 'svelte/elements';
import { cva, type VariantProps } from 'class-variance-authority';
import type { Snippet } from 'svelte';

export const textbox = cva('textbox', {
	variants: {
		color: {
			primary: 'textbox-primary',
			secondary: 'textbox-secondary',
			danger: 'textbox-danger',
			success: 'textbox-success',
			warning: 'textbox-warning'
		},
		size: {
			small: 'textbox-small',
			medium: 'textbox-medium',
			large: 'textbox-large'
		},
		disabled: {
			false: '',
			true: 'textbox-disabled'
		},
		prefix: {
			false: '',
			true: 'textbox-prefix'
		},
		suffix: {
			false: '',
			true: 'textbox-suffix'
		}
	}
});

export interface TextBoxProps
	extends Omit<HTMLInputAttributes, 'size' | 'color' | 'prefix' | 'suffix'>,
		Omit<VariantProps<typeof textbox>, 'prefix' | 'suffix'> {
			prefix?: string | Snippet;
			suffix?: string | Snippet;
		}
