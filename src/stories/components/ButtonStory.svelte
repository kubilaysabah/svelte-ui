<script lang="ts">
	import Button from '../lib/components/ui/button.svelte';
	import { initTheme, toggleTheme, isDarkMode } from '../lib/utils/theme.js';

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

<div class="min-h-screen bg-background text-foreground p-8">
	<!-- Theme toggle -->
	<div class="mb-8 flex items-center justify-between">
		<h1 class="text-2xl font-bold">Button Component Showcase</h1>
		<Button variant="outline" size="icon" onclick={handleToggleTheme}>
			{#if isDark}
				☀️
			{:else}
				🌙
			{/if}
		</Button>
	</div>

	<div class="grid gap-8">
		<section>
			<h2 class="text-lg font-semibold mb-4">Variants</h2>
			<div class="flex flex-wrap gap-3">
				<Button>Default</Button>
				<Button variant="destructive">Destructive</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="ghost">Ghost</Button>
				<Button variant="link">Link</Button>
			</div>
		</section>

		<section>
			<h2 class="text-lg font-semibold mb-4">Sizes</h2>
			<div class="flex flex-wrap items-center gap-3">
				<Button size="sm">Small</Button>
				<Button>Default</Button>
				<Button size="lg">Large</Button>
				<Button size="icon">🔥</Button>
			</div>
		</section>

		<section>
			<h2 class="text-lg font-semibold mb-4">States</h2>
			<div class="flex flex-wrap gap-3">
				<Button>Normal</Button>
				<Button disabled>Disabled</Button>
			</div>
		</section>

		<!-- Theme showcase -->
		<section>
			<h2 class="text-lg font-semibold mb-4">Theme Colors</h2>
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				<div class="rounded-lg border bg-primary p-3 text-primary-foreground text-center">
					<div class="text-sm font-medium">Primary</div>
				</div>
				<div class="rounded-lg border bg-secondary p-3 text-secondary-foreground text-center">
					<div class="text-sm font-medium">Secondary</div>
				</div>
				<div class="rounded-lg border bg-muted p-3 text-muted-foreground text-center">
					<div class="text-sm font-medium">Muted</div>
				</div>
				<div class="rounded-lg border bg-accent p-3 text-accent-foreground text-center">
					<div class="text-sm font-medium">Accent</div>
				</div>
			</div>
		</section>
	</div>
</div>