import type { Snippet } from 'svelte';

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
 * Modal size variants
 */
export type ModalSize = 'default' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fit';

/**
 * Modal variant types
 */
export type ModalVariant = 'default' | 'error' | 'success' | 'warning';

/**
 * Props for the Modal component
 */
export interface ModalProps extends ModalConfig {
	/** Child content to render inside the modal */
	children?: Snippet;
	/** Modal title text */
	title?: string;
	/** Function to call when the modal should be closed */
	forceClose?: () => void;
	/** Whether the modal is open */
	open?: boolean;
	/** Modal size variant */
	size?: ModalSize;
	/** Modal style variant */
	variant?: ModalVariant;
}
