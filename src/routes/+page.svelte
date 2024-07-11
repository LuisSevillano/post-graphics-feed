<script>
	import List from '$lib/components/List.svelte';
	import About from '$lib/components/About.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<main>
	<Header />
	<List />
	<About />
</main>

<style>
	main {
		margin: 0 auto;
		color: var(--text-color);
		padding: 1em;
		max-width: 1600px;
	}

	@media (min-width: 800px) {
		main {
			padding: 2em;
		}
	}

	@media (min-width: 1200px) {
		main {
			padding: 4em;
		}
	}
</style>
