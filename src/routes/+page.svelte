<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';
</script>

<div class="container mx-auto p-8">
	<h1 class="text-4xl font-bold text-center mb-8 text-gray-900">Svelte UI Library Demo</h1>
	
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-6 text-gray-800">Button Variants</h2>
		<div class="flex flex-wrap gap-4 mb-6">
			<Button variant="default">Default</Button>
			<Button variant="destructive">Destructive</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="ghost">Ghost</Button>
			<Button variant="link">Link</Button>
		</div>
	</section>

	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-6 text-gray-800">Button Sizes</h2>
		<div class="flex items-center gap-4 mb-6">
			<Button size="sm">Small</Button>
			<Button size="default">Default</Button>
			<Button size="lg">Large</Button>
			<Button size="icon">🚀</Button>
		</div>
	</section>

	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-6 text-gray-800">Button States</h2>
		<div class="flex flex-wrap gap-4 mb-6">
			<Button>Normal</Button>
			<Button disabled>Disabled</Button>
		</div>
	</section>

	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-6 text-gray-800">Interactive Examples</h2>
		<div class="flex flex-wrap gap-4 mb-6">
			<Button onclick={() => alert('Button clicked!')}>Click Me</Button>
			<Button variant="outline" onclick={() => console.log('Outline button clicked')}>Console Log</Button>
		</div>
	</section>
</div>
