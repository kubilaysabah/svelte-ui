import type { HTMLButtonAttributes } from 'svelte/elements';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const button = cva('button', {
	variants: {
		variant: {
			fill: 'button-fill',
			outline: 'button-outline',
			ghost: 'button-ghost'
		},
		color: {
			primary: 'button-primary',
			secondary: 'button-secondary'
		},
		size: {
			small: 'button-small',
			medium: 'button-medium',
			large: 'button-large'
		},
		disabled: {
			false: '',
			true: 'button-disabled'
		}
	}
});

export interface ButtonProps
	extends Omit<HTMLButtonAttributes, 'color' | 'size'>,
		VariantProps<typeof button> {}
