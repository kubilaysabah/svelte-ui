<script lang="ts">
	import { Button, Input } from '$components';
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
			<h3 class="mb-2 text-md font-medium">Primary</h3>
			<Input type="text" color="primary" size="small" placeholder="Small primary input" class="mb-2" />
			<Input type="text" color="primary" size="medium" placeholder="Medium primary input" class="mb-2" />
			<Input type="text" color="primary" size="large" placeholder="Large primary input" class="mb-2" />
		</div>

		<!-- Secondary inputs -->
		<div class="mb-4">
			<h3 class="mb-2 text-md font-medium">Secondary</h3>
			<Input type="text" color="secondary" size="small" placeholder="Small secondary input" class="mb-2" />
			<Input type="text" color="secondary" size="medium" placeholder="Medium secondary input" class="mb-2" />
			<Input type="text" color="secondary" size="large" placeholder="Large secondary input" class="mb-2" />
		</div>

		<!-- Other variants -->
		<div class="mb-4">
			<h3 class="mb-2 text-md font-medium">Other Colors</h3>
			<Input type="text" color="success" size="medium" placeholder="Success input" class="mb-2" />
			<Input type="text" color="warning" size="medium" placeholder="Warning input" class="mb-2" />
			<Input type="text" color="danger" size="medium" placeholder="Danger input" class="mb-2" />
		</div>

		<!-- Disabled -->
		<div class="mb-4">
			<h3 class="mb-2 text-md font-medium">Disabled</h3>
			<Input type="text" color="primary" size="medium" placeholder="Disabled input" disabled />
		</div>
	</div>
</main>