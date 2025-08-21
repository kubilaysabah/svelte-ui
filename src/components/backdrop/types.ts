import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/**
 * Public instance methods available on the Backdrop component
 * These methods provide programmatic control over the backdrop state
 */
export interface BackdropInstance {
	/** 
	 * Opens the backdrop modal programmatically
	 * Equivalent to setting open = true
	 */
	showModal: () => void;
	
	/** 
	 * Closes the backdrop modal programmatically
	 * Equivalent to setting open = false
	 */
	closeModal: () => void;
	
	/** 
	 * Gets a reference to the underlying native dialog element
	 * Useful for advanced DOM manipulation or testing
	 * @returns The HTMLDialogElement or undefined if not mounted
	 */
	getDialog: () => HTMLDialogElement | undefined;
	
	/** 
	 * Checks if the backdrop is currently open
	 * @returns True if open, false if closed
	 */
	isOpen: () => boolean;
}

/**
 * Configuration props for the Backdrop component
 * Extends native HTMLDialogElement attributes for full flexibility
 */
export interface BackdropProps extends HTMLAttributes<HTMLDialogElement> {
	/** 
	 * Custom function to execute when the backdrop should close
	 * Takes precedence over the default closing behavior
	 * Useful for implementing confirmation dialogs or cleanup logic
	 */
	close?: () => void;
	
	/** 
	 * Svelte 5 snippet containing the modal content
	 * Rendered inside the backdrop overlay
	 */
	children?: Snippet;
	
	/** 
	 * Whether clicking outside the modal content should close the backdrop
	 * @default true
	 */
	closeOnBackdropClick?: boolean;
	
	/** 
	 * Whether pressing the Escape key should close the backdrop
	 * Follows accessibility best practices for modal dialogs
	 * @default true
	 */
	closeOnEscape?: boolean;
	
	/** 
	 * Controls the visibility state of the backdrop
	 * This prop is bindable, enabling two-way data binding
	 * @default false
	 */
	open?: boolean;
}
