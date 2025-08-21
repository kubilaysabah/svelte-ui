<script lang="ts">
	import { Button, Input, Modal } from '$components';

	let showModal = $state(false);

	function openModal() {
		showModal = true;
	}

	function closeModal() {
		showModal = false;
	}
</script>

<main>
	<nav class="p-4">
		<Button size="small" color="primary" variant="fill">{'Primary Small'}</Button>
		<Button size="medium" color="primary" variant="fill">{'Primary Medium'}</Button>
		<Button size="large" color="primary" variant="fill">{'Primary Large'}</Button>

		<Button size="small" color="primary" variant="outline">{'Primary Outline Small'}</Button>
		<Button size="medium" color="primary" variant="outline">{'Primary Outline Medium'}</Button>
		<Button size="large" color="primary" variant="outline">{'Primary Outline Large'}</Button>

		<Button size="small" color="primary" variant="ghost">{'Primary Ghost Small'}</Button>
		<Button size="medium" color="primary" variant="ghost">{'Primary Ghost Medium'}</Button>
		<Button size="large" color="primary" variant="ghost">{'Primary Ghost Large'}</Button>

		<Button size="small" color="secondary" variant="fill">{'Secondary Small'}</Button>
		<Button size="medium" color="secondary" variant="fill">{'Secondary Medium'}</Button>
		<Button size="large" color="secondary" variant="fill">{'Secondary Large'}</Button>

		<Button size="small" color="secondary" variant="outline">{'Secondary Outline Small'}</Button>
		<Button size="medium" color="secondary" variant="outline">{'Secondary Outline Medium'}</Button>
		<Button size="large" color="secondary" variant="outline">{'Secondary Outline Large'}</Button>

		<Button size="small" color="secondary" variant="ghost">{'Secondary Ghost Small'}</Button>
		<Button size="medium" color="secondary" variant="ghost">{'Secondary Ghost Medium'}</Button>
		<Button size="large" color="secondary" variant="ghost">{'Secondary Ghost Large'}</Button>
	</nav>

	<div class="p-4">
		<h2 class="mb-4 text-lg font-semibold">Input Examples</h2>

		<!-- Primary inputs -->
		<div class="mb-4">
			<h3 class="text-md mb-2 font-medium">Primary</h3>
			<Input
				type="text"
				color="primary"
				size="small"
				placeholder="Small primary input"
				class="mb-2"
			/>
			<Input
				type="text"
				color="primary"
				size="medium"
				placeholder="Medium primary input"
				class="mb-2"
			/>
			<Input
				type="text"
				color="primary"
				size="large"
				placeholder="Large primary input"
				class="mb-2"
			/>
		</div>

		<!-- Secondary inputs -->
		<div class="mb-4">
			<h3 class="text-md mb-2 font-medium">Secondary</h3>
			<Input
				type="text"
				color="secondary"
				size="small"
				placeholder="Small secondary input"
				class="mb-2"
			/>
			<Input
				type="text"
				color="secondary"
				size="medium"
				placeholder="Medium secondary input"
				class="mb-2"
			/>
			<Input
				type="text"
				color="secondary"
				size="large"
				placeholder="Large secondary input"
				class="mb-2"
			/>
		</div>

		<!-- Other variants -->
		<div class="mb-4">
			<h3 class="text-md mb-2 font-medium">Other Colors</h3>
			<Input type="text" color="success" size="medium" placeholder="Success input" class="mb-2" />
			<Input type="text" color="warning" size="medium" placeholder="Warning input" class="mb-2" />
			<Input type="text" color="danger" size="medium" placeholder="Danger input" class="mb-2" />
		</div>

		<!-- Disabled -->
		<div class="mb-4">
			<h3 class="text-md mb-2 font-medium">Disabled</h3>
			<Input type="text" color="primary" size="medium" placeholder="Disabled input" disabled />
		</div>

		<!-- With Prefix and Suffix -->
		<div class="mb-4">
			<h3 class="text-md mb-2 font-medium">With Prefix and Suffix</h3>
			
			<!-- Input with prefix -->
			<Input type="text" color="primary" size="medium" placeholder="Enter amount" class="mb-2">
				{#snippet prefix()}
					<span class="px-2 text-gray-500">$</span>
				{/snippet}
			</Input>

			<!-- Input with suffix -->
			<Input type="email" color="primary" size="medium" placeholder="Enter your email" class="mb-2">
				{#snippet suffix()}
					<span class="px-2 text-gray-500">@example.com</span>
				{/snippet}
			</Input>

			<!-- Input with both prefix and suffix -->
			<Input type="text" color="primary" size="medium" placeholder="Search" class="mb-2">
				{#snippet prefix()}
					<span class="px-2 text-gray-500">🔍</span>
				{/snippet}
				{#snippet suffix()}
					<button class="px-2 text-blue-500 hover:text-blue-700">Clear</button>
				{/snippet}
			</Input>
		</div>

		<!-- Modal Test -->
		<div class="mb-4">
			<h3 class="text-md mb-2 font-medium">Modal Test</h3>
			<Button size="small" onclick={openModal} color="primary" variant="fill">Open Modal</Button>
		</div>

		{#if showModal}
			<Modal
				title="Test Modal"
				open={showModal}
				forceClose={closeModal}
				size="md"
				variant="default"
			>
				<p>This is a test modal content. You can add any content here.</p>
				<div class="mt-4">
					<Button onclick={closeModal} color="secondary" variant="outline">Close</Button>
				</div>
			</Modal>
		{/if}
	</div>
</main>
