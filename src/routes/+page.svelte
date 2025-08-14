<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';
	import { initTheme, toggleTheme, isDarkMode } from '$lib/utils/theme.js';

	let isDark = $state(false);

	// Initialize theme system
	$effect(() => {
		initTheme();
		isDark = isDarkMode();
	});

	function handleToggleTheme() {
		toggleTheme();
		isDark = isDarkMode();
	}
</script>

<div class="min-h-screen bg-background text-foreground">
	<div class="container mx-auto p-8">
		<!-- Header with theme toggle -->
		<div class="mb-8 flex items-center justify-between">
			<h1 class="text-4xl font-bold">Svelte UI Library Demo</h1>
			<Button variant="outline" size="icon" onclick={handleToggleTheme}>
				{#if isDark}
					☀️
				{:else}
					🌙
				{/if}
			</Button>
		</div>

		<!-- Theme showcase -->
		<div class="mb-12 rounded-lg border bg-card p-6 text-card-foreground">
			<h2 class="mb-4 text-xl font-semibold">Current Theme: {isDark ? 'Dark' : 'Light'}</h2>
			<p class="text-muted-foreground">
				This page automatically adapts to your theme preference. Use the toggle button above to
				switch between light and dark modes.
			</p>
		</div>

		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-semibold">Button Variants</h2>
			<div class="mb-6 flex flex-wrap gap-4">
				<Button variant="default">Default</Button>
				<Button variant="destructive">Destructive</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="ghost">Ghost</Button>
				<Button variant="link">Link</Button>
			</div>
		</section>

		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-semibold">Button Sizes</h2>
			<div class="mb-6 flex items-center gap-4">
				<Button size="sm">Small</Button>
				<Button size="default">Default</Button>
				<Button size="lg">Large</Button>
				<Button size="icon">🚀</Button>
			</div>
		</section>

		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-semibold">Button States</h2>
			<div class="mb-6 flex flex-wrap gap-4">
				<Button>Normal</Button>
				<Button disabled>Disabled</Button>
			</div>
		</section>

		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-semibold">Interactive Examples</h2>
			<div class="mb-6 flex flex-wrap gap-4">
				<Button onclick={() => alert('Button clicked!')}>Click Me</Button>
				<Button variant="outline" onclick={() => console.log('Outline button clicked')}
					>Console Log</Button
				>
			</div>
		</section>

		<!-- Color palette showcase -->
		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-semibold">Color Palette</h2>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<div class="rounded-lg border bg-primary p-4 text-primary-foreground">
					<h3 class="font-semibold">Primary</h3>
					<p class="text-sm opacity-90">Primary brand color</p>
				</div>
				<div class="rounded-lg border bg-secondary p-4 text-secondary-foreground">
					<h3 class="font-semibold">Secondary</h3>
					<p class="text-sm opacity-90">Secondary accent color</p>
				</div>
				<div class="rounded-lg border bg-muted p-4 text-muted-foreground">
					<h3 class="font-semibold">Muted</h3>
					<p class="text-sm opacity-90">Subtle background color</p>
				</div>
				<div class="rounded-lg border bg-accent p-4 text-accent-foreground">
					<h3 class="font-semibold">Accent</h3>
					<p class="text-sm opacity-90">Accent color</p>
				</div>
				<div class="rounded-lg border bg-destructive p-4 text-destructive-foreground">
					<h3 class="font-semibold">Destructive</h3>
					<p class="text-sm opacity-90">Error/danger color</p>
				</div>
				<div class="rounded-lg border bg-card p-4 text-card-foreground">
					<h3 class="font-semibold">Card</h3>
					<p class="text-sm text-muted-foreground">Card background</p>
				</div>
			</div>
		</section>
	</div>
</div>
