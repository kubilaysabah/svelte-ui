<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Backdrop from './backdrop.svelte';
	import Modal from '../modal/modal.svelte';

	const { Story } = defineMeta({
		component: Backdrop,
		title: 'Components/Backdrop',
		tags: ['autodocs'],
		argTypes: {
			open: {
				control: 'boolean',
				description: 'Controls whether the backdrop is open (bindable)'
			},
			closeOnBackdropClick: {
				control: 'boolean',
				description: 'Whether clicking outside closes the backdrop'
			},
			closeOnEscape: {
				control: 'boolean',
				description: 'Whether pressing Escape closes the backdrop'
			}
		}
	});
</script>

<script lang="ts">
	// Reactive state for different story scenarios
	let defaultOpen = $state(false);
	let controlledOpen = $state(false);
	let customHandlerOpen = $state(false);
	let nonDismissibleOpen = $state(false);
	let message = $state('');

	/**
	 * Custom close handler that demonstrates advanced closing logic
	 * Shows a message before closing the modal
	 */
	const handleCustomClose = () => {
		message = 'Custom close handler executed! Closing in 1 second...';
		setTimeout(() => {
			customHandlerOpen = false;
			message = '';
		}, 1000);
	};
</script>

<Story name="Default Usage">
	<div class="space-y-4">
		<p class="text-gray-600">
			Basic backdrop with default settings. Click outside or press Escape to close.
		</p>
		
		<button 
			class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
			onclick={() => defaultOpen = true}
		>
			Open Default Backdrop
		</button>

		<Backdrop bind:open={defaultOpen}>
			{#snippet children()}
				<Modal title="Default Backdrop Modal" forceClose={() => defaultOpen = false}>
					{#snippet children()}
						<p class="mb-4 text-gray-600">
							This is a basic backdrop with default settings using the Modal component. 
							You can close it by clicking outside, pressing Escape, or using the close button.
						</p>
						<div class="flex gap-2">
							<button 
								class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
								onclick={() => defaultOpen = false}
							>
								Close Modal
							</button>
						</div>
					{/snippet}
				</Modal>
			{/snippet}
		</Backdrop>
	</div>
</Story>

<Story name="Controlled State">
	<div class="space-y-4">
		<p class="text-gray-600">
			Backdrop controlled via bindable prop. State is synchronized between component and parent.
		</p>
		
		<div class="flex gap-2">
			<button 
				class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
				onclick={() => controlledOpen = !controlledOpen}
			>
				Toggle Backdrop
			</button>
			
			<span class="px-3 py-2 bg-gray-100 rounded text-sm">
				Status: {controlledOpen ? 'Open' : 'Closed'}
			</span>
		</div>

		<Backdrop bind:open={controlledOpen}>
			{#snippet children()}
				<Modal 
					title="Controlled Backdrop Modal" 
					size="lg"
					forceClose={() => controlledOpen = false}
				>
					{#snippet children()}
						<div class="space-y-4">
							<p class="text-gray-600">
								This backdrop's state is controlled via the bindable open prop.
							</p>
							<div class="p-4 bg-gray-50 rounded border">
								<p class="font-mono text-sm">
									Current state: <span class="font-bold">{controlledOpen ? 'true' : 'false'}</span>
								</p>
							</div>
							<div class="flex gap-2">
								<button 
									class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
									onclick={() => controlledOpen = false}
								>
									Close
								</button>
								<button 
									class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
									onclick={() => controlledOpen = !controlledOpen}
								>
									Toggle State
								</button>
							</div>
						</div>
					{/snippet}
				</Modal>
			{/snippet}
		</Backdrop>
	</div>
</Story>

<Story name="Custom Close Handler">
	<div class="space-y-4">
		<p class="text-gray-600">
			Backdrop with custom close handler that executes additional logic before closing.
		</p>
		
		<button 
			class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
			onclick={() => customHandlerOpen = true}
		>
			Open Custom Handler Backdrop
		</button>

		<Backdrop bind:open={customHandlerOpen} close={handleCustomClose}>
			{#snippet children()}
				<Modal 
					title="Custom Close Handler Modal" 
					size="md"
					variant="warning"
					forceClose={handleCustomClose}
				>
					{#snippet children()}
						<div class="space-y-4">
							<p class="text-gray-600">
								This backdrop uses a custom close handler that shows a message before closing.
							</p>
							
							{#if message}
								<div class="p-4 bg-green-100 border border-green-300 rounded text-green-700">
									<p class="font-medium">{message}</p>
								</div>
							{/if}
							
							<div class="flex gap-2">
								<button 
									class="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
									onclick={handleCustomClose}
								>
									Trigger Custom Close
								</button>
								<button 
									class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
									onclick={() => customHandlerOpen = false}
								>
									Direct Close
								</button>
							</div>
						</div>
					{/snippet}
				</Modal>
			{/snippet}
		</Backdrop>
	</div>
</Story>

<Story name="Non-Dismissible Modal">
	<div class="space-y-4">
		<p class="text-gray-600">
			Backdrop that cannot be closed by clicking outside or pressing Escape. 
			Only the button can close it.
		</p>
		
		<button 
			class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
			onclick={() => nonDismissibleOpen = true}
		>
			Open Non-Dismissible Backdrop
		</button>

		<Backdrop 
			bind:open={nonDismissibleOpen} 
			closeOnBackdropClick={false} 
			closeOnEscape={false}
		>
			{#snippet children()}
				<Modal 
					title="Critical Action Required" 
					size="sm"
					variant="error"
					forceClose={() => nonDismissibleOpen = false}
					closeOnBackdropClick={false}
					closeOnEscape={false}
				>
					{#snippet children()}
						<div class="space-y-4">
							<p class="text-gray-600">
								This backdrop cannot be closed by clicking outside or pressing Escape. 
								You must use the button below to confirm your action.
							</p>
							
							<div class="p-4 bg-red-50 border border-red-200 rounded">
								<div class="flex items-center gap-2 text-red-700">
									<span class="text-xl">⚠️</span>
									<p class="font-medium">
										Try clicking outside or pressing Escape - it won't work!
									</p>
								</div>
							</div>
							
							<div class="flex gap-2">
								<button 
									class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
									onclick={() => nonDismissibleOpen = false}
								>
									I Understand (Only Way to Close)
								</button>
							</div>
						</div>
					{/snippet}
				</Modal>
			{/snippet}
		</Backdrop>
	</div>
</Story>

<Story name="Modal Component Integration">
	<div class="space-y-4">
		<p class="text-gray-600">
			Demonstration of how Backdrop integrates seamlessly with the Modal component system.
		</p>
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<div class="p-4 border rounded bg-gray-50">
				<h4 class="font-medium mb-2">✅ Benefits of Using Modal Component</h4>
				<ul class="text-sm text-gray-600 space-y-1">
					<li>• Consistent styling and theming</li>
					<li>• Built-in size variants (sm, md, lg, xl, xxl, fit)</li>
					<li>• Color variants (default, success, error, warning)</li>
					<li>• Automatic close button in header</li>
					<li>• Proper semantic structure</li>
					<li>• Accessibility features built-in</li>
				</ul>
			</div>
			
			<div class="p-4 border rounded bg-blue-50">
				<h4 class="font-medium mb-2">🎯 Backdrop Component Role</h4>
				<ul class="text-sm text-gray-600 space-y-1">
					<li>• Overlay management</li>
					<li>• Click outside detection</li>
					<li>• Keyboard event handling</li>
					<li>• Focus management</li>
					<li>• State synchronization</li>
					<li>• Native dialog API integration</li>
				</ul>
			</div>
		</div>
		
		<div class="mt-6 p-4 bg-amber-50 border border-amber-200 rounded">
			<h4 class="font-medium mb-2 text-amber-800">💡 Best Practice</h4>
			<p class="text-sm text-amber-700">
				Use Backdrop + Modal combination for maximum flexibility and consistency. 
				Backdrop handles the low-level interaction logic, while Modal provides the UI structure and theming.
			</p>
		</div>
	</div>
</Story>
