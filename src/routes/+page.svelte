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

<div class="min-h-screen bg-background text-foreground transition-colors duration-300">
	<div class="container mx-auto p-8">
		<!-- Header Section -->
		<header class="mb-12 text-center">
			<div class="mb-6 flex items-center justify-between">
				<div class="flex items-center gap-3">
					<div class="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
						<span class="text-primary-foreground font-bold text-lg">S</span>
					</div>
					<h1 class="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
						Svelte UI
					</h1>
				</div>
				<Button 
					variant="outline" 
					size="icon" 
					onclick={handleToggleTheme}
					class="transition-all duration-300 hover:scale-105"
				>
					{#if isDark}
						<span class="text-lg">☀️</span>
					{:else}
						<span class="text-lg">🌙</span>
					{/if}
				</Button>
			</div>
			
			<div class="mx-auto max-w-2xl">
				<h2 class="text-5xl font-bold mb-4">
					Beautiful UI Components
				</h2>
				<p class="text-xl text-muted-foreground mb-8">
					Modern, accessible, and customizable components built with Svelte and TailwindCSS.
					Perfect dark and light themes included.
				</p>
				<div class="flex gap-4 justify-center">
					<Button size="lg" class="px-8">
						Get Started
					</Button>
					<Button variant="outline" size="lg" class="px-8">
						View Components
					</Button>
				</div>
			</div>
		</header>

		<!-- Theme Showcase -->
		<section class="mb-16">
			<div class="rounded-xl border bg-card/50 backdrop-blur-sm p-8 text-card-foreground">
				<div class="flex items-center gap-3 mb-6">
					<div class="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
						{#if isDark}
							<span class="text-primary">🌙</span>
						{:else}
							<span class="text-primary">☀️</span>
						{/if}
					</div>
					<h3 class="text-2xl font-semibold">
						Current Theme: {isDark ? 'Dark Mode' : 'Light Mode'}
					</h3>
				</div>
				<p class="text-muted-foreground text-lg">
					Experience seamless theme switching with carefully crafted colors that ensure 
					perfect readability and visual harmony in both light and dark environments.
				</p>
			</div>
		</section>

		<!-- Color Palette Showcase -->
		<section class="mb-16">
			<h3 class="text-3xl font-bold mb-8 text-center">Color System</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div class="group relative overflow-hidden rounded-xl border bg-primary p-6 text-primary-foreground transition-transform hover:scale-105">
					<div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
					<div class="relative">
						<h4 class="font-bold text-xl mb-2">Primary</h4>
						<p class="text-primary-foreground/80">Main brand color for CTAs and key elements</p>
						<div class="mt-4 text-sm font-mono opacity-70">
							{isDark ? 'hsl(217.2 91.2% 59.8%)' : 'hsl(221.2 83.2% 53.3%)'}
						</div>
					</div>
				</div>

				<div class="group relative overflow-hidden rounded-xl border bg-secondary p-6 text-secondary-foreground transition-transform hover:scale-105">
					<div class="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent"></div>
					<div class="relative">
						<h4 class="font-bold text-xl mb-2">Secondary</h4>
						<p class="text-secondary-foreground/80">Supporting color for backgrounds</p>
						<div class="mt-4 text-sm font-mono opacity-70">
							{isDark ? 'hsl(217.2 32.6% 17.5%)' : 'hsl(210 40% 96%)'}
						</div>
					</div>
				</div>

				<div class="group relative overflow-hidden rounded-xl border bg-accent p-6 text-accent-foreground transition-transform hover:scale-105">
					<div class="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>
					<div class="relative">
						<h4 class="font-bold text-xl mb-2">Accent</h4>
						<p class="text-accent-foreground/80">Subtle highlights and emphasis</p>
						<div class="mt-4 text-sm font-mono opacity-70">
							{isDark ? 'hsl(217.2 32.6% 17.5%)' : 'hsl(210 40% 96%)'}
						</div>
					</div>
				</div>

				<div class="group relative overflow-hidden rounded-xl border bg-muted p-6 text-muted-foreground transition-transform hover:scale-105">
					<div class="absolute inset-0 bg-gradient-to-br from-muted/10 to-transparent"></div>
					<div class="relative">
						<h4 class="font-bold text-xl mb-2">Muted</h4>
						<p class="text-muted-foreground/80">Subtle text and disabled states</p>
						<div class="mt-4 text-sm font-mono opacity-70">
							{isDark ? 'hsl(215 20.2% 65.1%)' : 'hsl(215.4 16.3% 46.9%)'}
						</div>
					</div>
				</div>

				<div class="group relative overflow-hidden rounded-xl border bg-destructive p-6 text-destructive-foreground transition-transform hover:scale-105">
					<div class="absolute inset-0 bg-gradient-to-br from-destructive/10 to-transparent"></div>
					<div class="relative">
						<h4 class="font-bold text-xl mb-2">Destructive</h4>
						<p class="text-destructive-foreground/80">Error states and dangerous actions</p>
						<div class="mt-4 text-sm font-mono opacity-70">
							{isDark ? 'hsl(0 62.8% 30.6%)' : 'hsl(0 84.2% 60.2%)'}
						</div>
					</div>
				</div>

				<div class="group relative overflow-hidden rounded-xl border bg-card p-6 text-card-foreground transition-transform hover:scale-105">
					<div class="absolute inset-0 bg-gradient-to-br from-card/10 to-transparent"></div>
					<div class="relative">
						<h4 class="font-bold text-xl mb-2">Card</h4>
						<p class="text-muted-foreground">Elevated content containers</p>
						<div class="mt-4 text-sm font-mono text-muted-foreground">
							{isDark ? 'hsl(222.2 84% 4.9%)' : 'hsl(0 0% 100%)'}
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Button Showcase -->
		<section class="mb-16">
			<h3 class="text-3xl font-bold mb-8 text-center">Button Components</h3>
			
			<div class="space-y-8">
				<!-- Button Variants -->
				<div class="rounded-xl border bg-card/50 p-8">
					<h4 class="text-xl font-semibold mb-6">Variants</h4>
					<div class="flex flex-wrap gap-4">
						<Button variant="default">Default</Button>
						<Button variant="destructive">Destructive</Button>
						<Button variant="outline">Outline</Button>
						<Button variant="secondary">Secondary</Button>
						<Button variant="ghost">Ghost</Button>
						<Button variant="link">Link</Button>
					</div>
				</div>

				<!-- Button Sizes -->
				<div class="rounded-xl border bg-card/50 p-8">
					<h4 class="text-xl font-semibold mb-6">Sizes</h4>
					<div class="flex items-center gap-4">
						<Button size="sm">Small</Button>
						<Button size="default">Default</Button>
						<Button size="lg">Large</Button>
						<Button size="icon">🚀</Button>
					</div>
				</div>

				<!-- Button States -->
				<div class="rounded-xl border bg-card/50 p-8">
					<h4 class="text-xl font-semibold mb-6">States</h4>
					<div class="flex flex-wrap gap-4">
						<Button>Normal State</Button>
						<Button disabled>Disabled State</Button>
						<Button class="opacity-50 cursor-not-allowed">Loading State</Button>
					</div>
				</div>
			</div>
		</section>

		<!-- Interactive Examples -->
		<section class="mb-16">
			<h3 class="text-3xl font-bold mb-8 text-center">Interactive Examples</h3>
			<div class="rounded-xl border bg-card/50 p-8">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div class="space-y-4">
						<h4 class="text-lg font-semibold">Actions</h4>
						<div class="space-y-3">
							<Button 
								onclick={() => alert('Hello from Svelte UI!')} 
								class="w-full"
							>
								Show Alert
							</Button>
							<Button 
								variant="outline" 
								onclick={() => console.log('Button clicked at:', new Date().toLocaleTimeString())}
								class="w-full"
							>
								Log to Console
							</Button>
							<Button 
								variant="secondary" 
								onclick={handleToggleTheme}
								class="w-full"
							>
								Toggle Theme
							</Button>
						</div>
					</div>
					
					<div class="space-y-4">
						<h4 class="text-lg font-semibold">Combinations</h4>
						<div class="space-y-3">
							<div class="flex gap-2">
								<Button size="sm" variant="outline">Cancel</Button>
								<Button size="sm">Confirm</Button>
							</div>
							<div class="flex gap-2">
								<Button variant="destructive" size="sm">Delete</Button>
								<Button variant="ghost" size="sm">Archive</Button>
							</div>
							<div class="flex gap-2">
								<Button variant="secondary">Back</Button>
								<Button>Next Step</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Footer -->
		<footer class="text-center py-8 border-t">
			<p class="text-muted-foreground">
				Built with ❤️ using Svelte, TailwindCSS, and modern web standards.
			</p>
			<p class="text-sm text-muted-foreground mt-2">
				Theme system automatically adapts to your system preferences.
			</p>
		</footer>
	</div>
</div>
