import type { HTMLButtonAttributes } from 'svelte/elements';
import type { VariantProps } from 'class-variance-authority';
import type { Snippet } from 'svelte';
import { cva } from 'class-variance-authority';

/**
 * Button component style variants using CVA (Class Variance Authority)
 * Provides consistent styling patterns across different button states
 */
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
	},
	defaultVariants: {
		variant: 'fill',
		color: 'primary',
		size: 'medium',
		disabled: false
	}
});

/**
 * Button component props interface
 * Extends native button attributes with custom styling options
 */
export interface ButtonProps
	extends Omit<HTMLButtonAttributes, 'color' | 'size'>,
		VariantProps<typeof button> {
	/** Content to render inside the button */
	children?: Snippet;
}

/**
 * Button variant types for style variations
 */
export type ButtonVariant = 'fill' | 'outline' | 'ghost';

/**
 * Button color schemes available
 */
export type ButtonColor = 'primary' | 'secondary';

/**
 * Button size options
 */
export type ButtonSize = 'small' | 'medium' | 'large';
