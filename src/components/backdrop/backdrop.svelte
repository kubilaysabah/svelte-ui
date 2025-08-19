<script lang="ts">
	import type { BackdropProps } from './types';
	import { cn } from '$lib/utils';

	const { 
		class: className, 
		children, 
		close, 
		closeOnBackdropClick = true,
		closeOnEscape = true,
		...rest 
	}: BackdropProps = $props();

	let dialog = $state<HTMLDialogElement | undefined>(undefined);

	/**
	 * Handles backdrop clicks with proper event target validation
	 */
	function handleBackdropClick(event: MouseEvent): void {
		// Guard: Only proceed if backdrop click is enabled and close function exists
		if (!closeOnBackdropClick || !close) return;
		
		// Guard: Ensure event target is the dialog element itself (not its children)
		if (event.target === event.currentTarget && event.target === dialog) {
			event.preventDefault();
			close();
		}
	}

	/**
	 * Handles keyboard events with proper key validation
	 */
	function handleKeydown(event: KeyboardEvent): void {
		// Guard: Only proceed if escape key close is enabled and close function exists
		if (!closeOnEscape || !close) return;
		
		// Guard: Check for Escape key specifically
		if (event.key === 'Escape') {
			event.preventDefault();
			close();
		}
	}

	/**
	 * Public API: Shows the modal dialog
	 */
	export function showModal(): void {
		if (dialog && !dialog.open) {
			dialog.showModal();
		}
	}

	/**
	 * Public API: Closes the modal dialog
	 */
	export function closeModal(): void {
		if (dialog && dialog.open) {
			dialog.close();
		}
	}

	/**
	 * Public API: Gets the dialog element reference
	 */
	export function getDialog(): HTMLDialogElement | undefined {
		return dialog;
	}

	/**
	 * Public API: Checks if the dialog is currently open
	 */
	export function isOpen(): boolean {
		return dialog?.open ?? false;
	}
</script>

<dialog
	bind:this={dialog}
	{...rest}
	class={cn('backdrop', className)}
	onclick={handleBackdropClick}
	onkeydown={handleKeydown}
	aria-modal="true"
	tabindex="-1"
>
	<div class="backdrop-content" role="presentation" onclick={(e) => e.stopPropagation()}>
		{@render children?.()}
	</div>
</dialog>

<style lang="postcss">
	@reference "tailwindcss";
	
	.backdrop {
		@apply fixed top-0 left-0 grid h-full min-h-screen w-full place-items-center overflow-y-auto p-2 backdrop-blur-xs bg-black/50;
	}

	.backdrop-content {
		@apply contents;
	}
</style>
