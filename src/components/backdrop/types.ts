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
