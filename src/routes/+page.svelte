<script lang="ts">
	import Button from '$components//button/button.svelte';
</script>

<main>
	<nav class="p-4">
		<Button size="small" intent="primary" variant="fill">{'Primary Small'}</Button>
		<Button size="medium" intent="primary" variant="fill">{'Primary Medium'}</Button>
		<Button size="large" intent="primary" variant="fill">{'Primary Large'}</Button>

		<Button size="small" intent="primary" variant="outline">{'Primary Outline Small'}</Button>
		<Button size="medium" intent="primary" variant="outline">{'Primary Outline Medium'}</Button>
		<Button size="large" intent="primary" variant="outline">{'Primary Outline Large'}</Button>

		<Button size="small" intent="primary" variant="ghost">{'Primary Ghost Small'}</Button>
		<Button size="medium" intent="primary" variant="ghost">{'Primary Ghost Medium'}</Button>
		<Button size="large" intent="primary" variant="ghost">{'Primary Ghost Large'}</Button>

		<Button size="small" intent="secondary" variant="fill">{'Secondary Small'}</Button>
		<Button size="medium" intent="secondary" variant="fill">{'Secondary Medium'}</Button>
		<Button size="large" intent="secondary" variant="fill">{'Secondary Large'}</Button>

		<Button size="small" intent="secondary" variant="outline">{'Secondary Outline Small'}</Button>
		<Button size="medium" intent="secondary" variant="outline">{'Secondary Outline Medium'}</Button>
		<Button size="large" intent="secondary" variant="outline">{'Secondary Outline Large'}</Button>

		<Button size="small" intent="secondary" variant="ghost">{'Secondary Ghost Small'}</Button>
		<Button size="medium" intent="secondary" variant="ghost">{'Secondary Ghost Medium'}</Button>
		<Button size="large" intent="secondary" variant="ghost">{'Secondary Ghost Large'}</Button>
	</nav>
</main>