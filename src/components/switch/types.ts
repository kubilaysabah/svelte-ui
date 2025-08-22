import type { HTMLInputAttributes } from 'svelte/elements';
import type { VariantProps } from 'class-variance-authority';
import type { Snippet } from 'svelte';
import { cva } from 'class-variance-authority';

/**
 * Switch component style variants using CVA (Class Variance Authority)
 * Provides consistent styling patterns across different switch sizes and colors
 */
export const switchVariants = cva('switch', {
	variants: {
		size: {
			small: 'switch-small',
			medium: 'switch-medium', 
			large: 'switch-large'
		},
		color: {
			primary: 'switch-primary',
			secondary: 'switch-secondary',
			success: 'switch-success',
			warning: 'switch-warning',
			danger: 'switch-danger'
		},
		disabled: {
			false: '',
			true: 'switch-disabled'
		}
	},
	defaultVariants: {
		size: 'medium',
		color: 'primary',
		disabled: false
	}
});

/**
 * Switch track style variants for different sizes
 */
export const switchTrack = cva('switch-track', {
	variants: {
		size: {
			small: 'switch-track-small',
			medium: 'switch-track-medium',
			large: 'switch-track-large'
		}
	},
	defaultVariants: {
		size: 'medium'
	}
});

/**
 * Switch component props interface
 * Extends native input attributes with custom styling options
 */
export interface SwitchProps
	extends Omit<HTMLInputAttributes, 'size' | 'type' | 'color'>,
		VariantProps<typeof switchVariants> {
	/** Whether the switch is checked */
	checked?: boolean;
	/** Callback when switch state changes */
	onchange?: (event: Event & { currentTarget: EventTarget & HTMLInputElement }) => void;
	/** Label text for the switch */
	label?: string;
	/** Content to render as label (takes precedence over label prop) */
	children?: Snippet;
	/** Whether the switch is disabled */
	disabled?: boolean;
	/** Switch size variant */
	size?: 'small' | 'medium' | 'large';
	/** Switch color variant */
	color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

/**
 * Switch size options
 */
export type SwitchSize = 'small' | 'medium' | 'large';

/**
 * Switch color options
 */
export type SwitchColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';