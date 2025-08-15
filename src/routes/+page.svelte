<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';
	import Input from '$lib/components/ui/input.svelte';
	import Checkbox from '$lib/components/ui/checkbox.svelte';
	import Select from '$lib/components/ui/select.svelte';
	import Textarea from '$lib/components/ui/textarea.svelte';
	import Dropdown from '$lib/components/ui/dropdown.svelte';
	import { initTheme, toggleTheme, isDarkMode } from '$lib/utils/theme.js';
	import type { DropdownItem } from '$lib/types/dropdown.js';

	let isDark = $state(false);
	let inputValue = $state('');
	let checkboxChecked = $state(false);
	let selectValue = $state('');
	let textareaValue = $state('');
	let dropdownValue = $state(null);
	
	const selectOptions = [
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' }
	];

	const dropdownItems: DropdownItem[] = [
		{ value: 'profile', label: 'Profile', icon: '👤' },
		{ value: 'settings', label: 'Settings', icon: '⚙️' },
		{ value: 'separator1', label: '', separator: true },
		{ value: 'help', label: 'Help & Support', icon: '❓' },
		{ value: 'separator2', label: '', separator: true },
		{ value: 'logout', label: 'Logout', icon: '🚪' }
	];

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
			<h3 class="text-3xl font-bold mb-8 text-center">Form Components Demo</h3>
			
			<!-- Input Component -->
			<div class="rounded-xl border bg-card/50 p-8 mb-8">
				<h4 class="text-xl font-semibold mb-6">Input Component</h4>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<Input 
						bind:value={inputValue}
						placeholder="Default input"
						label="Default Input"
					/>
					<Input 
						variant="filled"
						placeholder="Filled input"
						label="Filled Input"
					/>
					<Input 
						variant="outline"
						placeholder="Outline input"
						label="Outline Input"
					/>
					<Input 
						type="email"
						placeholder="Email input"
						label="Email Input"
						helperText="Enter your email address"
					/>
					<Input 
						placeholder="Error input"
						label="Error Input"
						errorText="This field is required"
					/>
					<Input 
						placeholder="Disabled input"
						label="Disabled Input"
						disabled
					/>
				</div>
			</div>

			<!-- Checkbox Component -->
			<div class="rounded-xl border bg-card/50 p-8 mb-8">
				<h4 class="text-xl font-semibold mb-6">Checkbox Component</h4>
				<div class="space-y-3">
					<Checkbox 
						bind:checked={checkboxChecked}
						label="Default Checkbox"
					/>
					<Checkbox 
						checked={true}
						label="Checked Checkbox"
					/>
					<Checkbox 
						indeterminate={true}
						label="Indeterminate Checkbox"
					/>
					<Checkbox 
						disabled
						label="Disabled Checkbox"
					/>
				</div>
			</div>

			<!-- Select Component -->
			<div class="rounded-xl border bg-card/50 p-8 mb-8">
				<h4 class="text-xl font-semibold mb-6">Select Component</h4>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<Select 
						bind:value={selectValue}
						options={selectOptions}
						placeholder="Choose an option"
						label="Default Select"
					/>
					<Select 
						options={selectOptions}
						placeholder="Choose multiple"
						label="Multiple Select"
						multiple
					/>
					<Select 
						options={selectOptions}
						placeholder="Required select"
						label="Required Select"
						required
					/>
					<Select 
						options={selectOptions}
						placeholder="Disabled select"
						label="Disabled Select"
						disabled
					/>
				</div>
			</div>

			<!-- Textarea Component -->
			<div class="rounded-xl border bg-card/50 p-8 mb-8">
				<h4 class="text-xl font-semibold mb-6">Textarea Component</h4>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<Textarea 
						bind:value={textareaValue}
						placeholder="Default textarea"
						label="Default Textarea"
					/>
					<Textarea 
						variant="filled"
						placeholder="Filled textarea"
						label="Filled Textarea"
					/>
					<Textarea 
						resize="none"
						placeholder="No resize"
						label="No Resize Textarea"
					/>
					<Textarea 
						resize="vertical"
						placeholder="Vertical resize only"
						label="Vertical Resize Textarea"
					/>
					<Textarea 
						placeholder="Error textarea"
						label="Error Textarea"
						errorText="This field is required"
					/>
					<Textarea 
						placeholder="Disabled textarea"
						label="Disabled Textarea"
						disabled
					/>
				</div>
			</div>

			<!-- Dropdown Component -->
			<div class="space-y-6">
				<h4 class="text-xl font-semibold">Dropdown Component</h4>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<!-- Basic Dropdown -->
					<div class="space-y-3">
						<label for="dropdown-basic" class="text-sm font-medium">Basic Dropdown</label>
						<Dropdown 
							id="dropdown-basic"
							items={dropdownItems}
							bind:value={dropdownValue}
							placeholder="Select Action..."
							data-testid="dropdown-basic"
						/>
					</div>

					<!-- Dropdown Variants -->
					<div class="space-y-3">
						<label for="dropdown-outline" class="text-sm font-medium">Outline Variant</label>
						<Dropdown 
							id="dropdown-outline"
							items={dropdownItems}
							variant="outline"
							placeholder="Outline Dropdown"
							data-testid="dropdown-outline"
						/>
					</div>

					<div class="space-y-3">
						<label for="dropdown-ghost" class="text-sm font-medium">Ghost Variant</label>
						<Dropdown 
							id="dropdown-ghost"
							items={dropdownItems}
							variant="ghost"
							placeholder="Ghost Dropdown"
							data-testid="dropdown-ghost"
						/>
					</div>

					<div class="space-y-3">
						<label for="dropdown-destructive" class="text-sm font-medium">Destructive Variant</label>
						<Dropdown 
							id="dropdown-destructive"
							items={dropdownItems}
							variant="destructive"
							placeholder="Destructive Dropdown"
							data-testid="dropdown-destructive"
						/>
					</div>

					<!-- Dropdown Sizes -->
					<div class="space-y-3">
						<label for="dropdown-small" class="text-sm font-medium">Small Size</label>
						<Dropdown 
							id="dropdown-small"
							items={dropdownItems}
							size="sm"
							placeholder="Small Dropdown"
							data-testid="dropdown-small"
						/>
					</div>

					<div class="space-y-3">
						<label for="dropdown-large" class="text-sm font-medium">Large Size</label>
						<Dropdown 
							id="dropdown-large"
							items={dropdownItems}
							size="lg"
							placeholder="Large Dropdown"
							data-testid="dropdown-large"
						/>
					</div>

					<!-- With Icons and Shortcuts -->
					<div class="space-y-3">
						<label for="dropdown-icons" class="text-sm font-medium">With Icons & Shortcuts</label>
						<Dropdown 
							id="dropdown-icons"
							items={[
								{ value: 'new', label: 'New File', icon: '📄', shortcut: '⌘N' },
								{ value: 'open', label: 'Open...', icon: '📂', shortcut: '⌘O' },
								{ value: 'save', label: 'Save', icon: '💾', shortcut: '⌘S' },
								{ value: 'separator1', label: '', separator: true },
								{ value: 'delete', label: 'Delete', icon: '🗑️', shortcut: '⌫' }
							]}
							placeholder="File Actions"
							data-testid="dropdown-with-icons"
						/>
					</div>

					<!-- With Separators -->
					<div class="space-y-3">
						<label for="dropdown-separators" class="text-sm font-medium">With Separators</label>
						<Dropdown 
							id="dropdown-separators"
							items={[
								{ value: 'edit', label: 'Edit', icon: '✏️' },
								{ value: 'duplicate', label: 'Duplicate', icon: '📋' },
								{ value: 'separator1', label: '', separator: true },
								{ value: 'archive', label: 'Archive', icon: '📦' },
								{ value: 'separator2', label: '', separator: true },
								{ value: 'delete', label: 'Delete', icon: '🗑️' }
							]}
							placeholder="More Actions"
							data-testid="dropdown-with-separators"
						/>
					</div>

					<!-- With Selected Value -->
					<div class="space-y-3">
						<label for="dropdown-value" class="text-sm font-medium">With Pre-selected Value</label>
						<Dropdown 
							id="dropdown-value"
							items={[
								{ value: 'option1', label: 'First Option' },
								{ value: 'option2', label: 'Second Option' },
								{ value: 'option3', label: 'Third Option' }
							]}
							value="option2"
							placeholder="Choose Option"
							data-testid="dropdown-with-value"
						/>
					</div>

					<!-- Disabled Items -->
					<div class="space-y-3">
						<label for="dropdown-disabled-items" class="text-sm font-medium">With Disabled Items</label>
						<Dropdown 
							id="dropdown-disabled-items"
							items={[
								{ value: 'available1', label: 'Available Option 1' },
								{ value: 'available2', label: 'Available Option 2' },
								{ value: 'disabled1', label: 'Disabled Option 1', disabled: true },
								{ value: 'available3', label: 'Available Option 3' },
								{ value: 'disabled2', label: 'Disabled Option 2', disabled: true }
							]}
							placeholder="Mixed States"
							data-testid="dropdown-disabled-items"
						/>
					</div>

					<!-- No Close on Select -->
					<div class="space-y-3">
						<label for="dropdown-no-close" class="text-sm font-medium">Stays Open</label>
						<Dropdown 
							id="dropdown-no-close"
							items={[
								{ value: 'option1', label: 'Keep Open Option 1' },
								{ value: 'option2', label: 'Keep Open Option 2' },
								{ value: 'option3', label: 'Keep Open Option 3' }
							]}
							closeOnSelect={false}
							placeholder="Stays Open"
							data-testid="dropdown-no-close"
						/>
					</div>

					<!-- Disabled Dropdown -->
					<div class="space-y-3">
						<label for="dropdown-disabled" class="text-sm font-medium">Disabled Dropdown</label>
						<Dropdown 
							id="dropdown-disabled"
							items={dropdownItems}
							disabled
							placeholder="Disabled Dropdown"
							data-testid="dropdown-disabled"
						/>
					</div>
				</div>
			</div>

			<!-- Demo Values -->
			<div class="rounded-xl border bg-card/50 p-8">
				<h4 class="text-xl font-semibold mb-6">Current Form Values</h4>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
					<div class="space-y-2">
						<p><strong>Input Value:</strong> <code class="bg-muted px-2 py-1 rounded">{inputValue || 'empty'}</code></p>
						<p><strong>Checkbox Checked:</strong> <code class="bg-muted px-2 py-1 rounded">{checkboxChecked}</code></p>
						<p><strong>Dropdown Value:</strong> <code class="bg-muted px-2 py-1 rounded">{dropdownValue || 'empty'}</code></p>
					</div>
					<div class="space-y-2">
						<p><strong>Select Value:</strong> <code class="bg-muted px-2 py-1 rounded">{selectValue || 'empty'}</code></p>
						<p><strong>Textarea Value:</strong> <code class="bg-muted px-2 py-1 rounded">{textareaValue || 'empty'}</code></p>
					</div>
				</div>
			</div>
		</section>

		<!-- Button Examples -->
		<section class="mb-16">
			<h3 class="text-3xl font-bold mb-8 text-center">Interactive Button Examples</h3>
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
