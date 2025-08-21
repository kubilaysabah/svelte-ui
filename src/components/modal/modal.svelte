<script lang="ts">
	import { XIcon } from '@lucide/svelte';
	import { cva } from 'class-variance-authority';
	import { Button, Backdrop, type BackdropInstance } from '$components';
	import type { ModalProps } from './types';

	const modal = cva('modal', {
		variants: {
			size: {
				default: '',
				sm: 'modal-sm',
				md: 'modal-md',
				lg: 'modal-lg',
				xl: 'modal-xl',
				xxl: 'modal-xxl',
				fit: 'modal-fit'
			},
			variant: {
				default: 'modal-default',
				error: 'modal-error',
				success: 'modal-success',
				warning: 'modal-warning'
			}
		},
		defaultVariants: {
			size: 'md',
			variant: 'default'
		}
	});

	const {
		size,
		variant,
		title,
		children,
		forceClose,
		open = false,
		closeOnBackdropClick = true,
		closeOnEscape = true
	}: ModalProps = $props();

	// Type-safe backdrop component reference
	let backdrop: BackdropInstance | undefined = $state();

	/**
	 * Effect to handle modal open/close state changes
	 */
	$effect(() => {
		if (!backdrop) return;

		const dialog = backdrop.getDialog();
		if (!dialog) return;

		if (open && !backdrop.isOpen()) {
			backdrop.showModal();
		} else if (!open && backdrop.isOpen()) {
			backdrop.closeModal();
		}
	});
</script>

<Backdrop bind:this={backdrop} close={forceClose} {closeOnBackdropClick} {closeOnEscape}>
	<div class={modal({ size, variant })}>
		{#if title}
			<div class="modal-header">
				<h3 class="modal-title">{title}</h3>
				<Button size="large" variant="ghost" color="primary" onclick={forceClose}>
					<XIcon width={24} height={24} />
				</Button>
			</div>
		{/if}
		<div class="modal-body">
			{@render children?.()}
		</div>
	</div>
</Backdrop>

<style lang="postcss">
	@reference "tailwindcss";

	.modal {
		background-color: var(--color-background);
		@apply relative w-full rounded-2xl border shadow-lg;
	}

	.modal-header {
		@apply flex flex-wrap items-center justify-between border-b p-4;
	}

	.modal-title {
		color: var(--color-foreground);
		@apply text-xl font-semibold;
	}

	.modal-body {
		@apply p-4;
	}

	.modal-sm {
		@apply w-full lg:max-w-3xl;
	}

	.modal-md {
		@apply w-full lg:max-w-4xl;
	}

	.modal-lg {
		@apply w-full lg:max-w-5xl;
	}

	.modal-xl {
		@apply w-full lg:max-w-6xl;
	}

	.modal-xxl {
		@apply w-full lg:max-w-7xl;
	}

	.modal-fit {
		@apply w-full lg:max-w-fit;
	}
</style>
