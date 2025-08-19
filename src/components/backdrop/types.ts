import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export interface BackdropInstance {
	/** Shows the modal dialog */
	showModal: () => void;
	/** Closes the modal dialog */
	closeModal: () => void;
	/** Gets the dialog element reference */
	getDialog: () => HTMLDialogElement | undefined;
	/** Checks if the dialog is currently open */
	isOpen: () => boolean;
}

/**
 * Props for the Backdrop component
 */
export interface BackdropProps extends HTMLAttributes<HTMLDialogElement> {
	/** Function to call when the backdrop should close */
	close?: () => void;
	/** Child content to render inside the backdrop */
	children?: Snippet;
	/** Whether clicking outside should close the backdrop */
	closeOnBackdropClick?: boolean;
	/** Whether pressing Escape should close the backdrop */
	closeOnEscape?: boolean;
}
