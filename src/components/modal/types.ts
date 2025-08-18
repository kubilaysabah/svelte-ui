import type { Snippet } from 'svelte';
import type { VariantProps } from 'class-variance-authority';

/**
 * Common modal configuration options
 */
export interface ModalConfig {
	/** Whether clicking outside should close the modal */
	closeOnBackdropClick?: boolean;
	/** Whether pressing Escape should close the modal */
	closeOnEscape?: boolean;
}

/**
 * Props for the Modal component
 */
export interface ModalProps extends VariantProps<typeof modal>, ModalConfig {
	/** Child content to render inside the modal */
	children?: Snippet;
	/** Modal title text */
	title?: string;
	/** Function to call when the modal should be closed */
	forceClose?: () => void;
	/** Whether the modal is open */
	open?: boolean;
}

/**
 * Modal size variants
 */
export type ModalSize = 'default' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fit';

/**
 * Modal variant types
 */
export type ModalVariant = 'default' | 'error' | 'success' | 'warning';
