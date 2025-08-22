<script lang="ts">
	
</script>

<main>
	<article class="welcome">
		<h1 class="title">{"Welcome to Svelte UI"}</h1>
		<p class="subtitle">
			{"A modern, responsive, and accessible UI library for Svelte"}
		</p>
	</article>
</main>


<style lang="postcss">
	@reference "tailwindcss";

	.welcome {
		@apply flex flex-col items-center justify-center h-screen;
	}

	.title {
		@apply text-2xl font-bold text-center; 
	}

	.subtitle {
		@apply text-center;
	}
</style>