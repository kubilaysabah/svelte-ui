<script lang="ts">
	import type { BackdropProps } from './types';
	import { cn } from '$lib/utils';
	import { untrack } from 'svelte';

	// Destructure props with default values using Svelte 5 $props()
	let { 
		class: className, 
		children, 
		close, 
		closeOnBackdropClick = true,
		closeOnEscape = true,
		open = $bindable(false),
		...rest 
	}: BackdropProps = $props();

	// Dialog element reference managed by Svelte 5 $state()
	let dialog = $state<HTMLDialogElement | undefined>(undefined);

	/**
	 * Synchronizes the dialog's DOM state with the reactive open prop
	 * This effect ensures that the native dialog element stays in sync with our reactive state
	 */
	$effect(() => {
		if (!dialog) return;

		if (shouldOpenDialog()) {
			dialog.showModal();
		} else if (shouldCloseDialog()) {
			dialog.close();
		}
	});

	/**
	 * Sets up event listeners for native dialog events
	 * Handles both 'close' and 'cancel' events to keep our state synchronized
	 */
	$effect(() => {
		if (!dialog) return;

		const handleNativeClose = () => {
			updateOpenState(false);
		};

		const handleNativeCancel = (event: Event) => {
			event.preventDefault();
			updateOpenState(false);
		};

		dialog.addEventListener('close', handleNativeClose);
		dialog.addEventListener('cancel', handleNativeCancel);

		// Cleanup function to remove event listeners
		return () => {
			if (dialog) {
				dialog.removeEventListener('close', handleNativeClose);
				dialog.removeEventListener('cancel', handleNativeCancel);
			}
		};
	});

	/**
	 * Determines if the dialog should be opened
	 * @returns True if dialog should be shown, false otherwise
	 */
	function shouldOpenDialog(): boolean {
		return open && !dialog?.open;
	}

	/**
	 * Determines if the dialog should be closed
	 * @returns True if dialog should be closed, false otherwise
	 */
	function shouldCloseDialog(): boolean {
		return !open && Boolean(dialog?.open);
	}

	/**
	 * Updates the open state without triggering reactive effects
	 * Uses untrack to prevent infinite reactivity loops
	 * @param newState - The new open state
	 */
	function updateOpenState(newState: boolean): void {
		untrack(() => {
			open = newState;
		});
	}

	/**
	 * Handles the closing logic with proper priority
	 * Custom close handler takes precedence over default behavior
	 */
	function executeCloseAction(): void {
		if (close) {
			close();
		} else {
			open = false;
		}
	}

	/**
	 * Validates if the click target is the backdrop itself (not its children)
	 * Ensures we only close when clicking outside the modal content
	 * @param event - The mouse event from the click
	 * @returns True if click is on backdrop, false otherwise
	 */
	function isBackdropClick(event: MouseEvent): boolean {
		return event.target === event.currentTarget && event.target === dialog;
	}

	/**
	 * Handles backdrop click events with proper validation
	 * Only processes clicks when backdrop closing is enabled and click is on backdrop itself
	 * @param event - The mouse click event
	 */
	function handleBackdropClick(event: MouseEvent): void {
		// Early return if backdrop clicking is disabled
		if (!closeOnBackdropClick) return;
		
		// Early return if click is not on the backdrop itself
		if (!isBackdropClick(event)) return;

		event.preventDefault();
		executeCloseAction();
	}

	/**
	 * Handles keyboard events for accessibility
	 * Processes Escape key to close the modal when enabled
	 * @param event - The keyboard event
	 */
	function handleKeydown(event: KeyboardEvent): void {
		// Early return if escape key closing is disabled
		if (!closeOnEscape) return;
		
		// Early return if key is not Escape
		if (event.key !== 'Escape') return;

		event.preventDefault();
		executeCloseAction();
	}

	/**
	 * Public API: Opens the backdrop modal
	 * Provides a programmatic way to show the modal
	 */
	export function showModal(): void {
		open = true;
	}

	/**
	 * Public API: Closes the backdrop modal
	 * Provides a programmatic way to hide the modal
	 */
	export function closeModal(): void {
		open = false;
	}

	/**
	 * Public API: Gets the underlying dialog element
	 * Useful for advanced manipulation or testing
	 * @returns The native HTMLDialogElement or undefined if not mounted
	 */
	export function getDialog(): HTMLDialogElement | undefined {
		return dialog;
	}

	/**
	 * Public API: Checks the current open state
	 * @returns True if the backdrop is currently open, false otherwise
	 */
	export function isOpen(): boolean {
		return open;
	}
</script>

<!-- 
	Native HTML dialog element with accessibility features
	Uses semantic dialog for proper screen reader support and focus management
-->
<dialog
	bind:this={dialog}
	{...rest}
	class={cn('backdrop', className)}
	onclick={handleBackdropClick}
	onkeydown={handleKeydown}
	aria-modal="true"
	tabindex="-1"
>
	<!-- 
		Content wrapper with event propagation control
		Prevents clicks within modal content from bubbling up to backdrop
	-->
	<div 
		class="backdrop-content" 
		role="presentation" 
		onclick={(event) => event.stopPropagation()}
	>
		{@render children?.()}
	</div>
</dialog>

<style lang="postcss">
	@reference "tailwindcss";
	
	/* Main backdrop overlay styling */
	.backdrop {
		@apply fixed top-0 left-0 grid h-full min-h-screen w-full place-items-center overflow-y-auto p-2 backdrop-blur-xs bg-black/50;
	}

	/* Content wrapper - uses CSS contents for layout transparency */
	.backdrop-content {
		@apply contents;
	}
</style>
