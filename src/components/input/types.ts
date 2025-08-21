import type { HTMLInputAttributes } from 'svelte/elements';
import { cva, type VariantProps } from 'class-variance-authority';
import type { Snippet } from 'svelte';

export const input = cva('input', {
	variants: {
		color: {
			primary: 'input-primary',
			secondary: 'input-secondary',
			danger: 'input-danger',
			success: 'input-success',
			warning: 'input-warning'
		},
		size: {
			small: 'input-small',
			medium: 'input-medium',
			large: 'input-large'
		},
		disabled: {
			false: '',
			true: 'input-disabled'
		}
	}
});

export interface InputProps
	extends Omit<HTMLInputAttributes, 'size' | 'color' | 'prefix'>,
		VariantProps<typeof input> {
			prefix?: Snippet;
			suffix?: Snippet;
		}
