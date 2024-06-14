<script>
	import List from '$lib/List.svelte';
	import About from '$lib/About.svelte';
	import { siteTitle, siteDescription } from '$lib/config';
</script>

<main>
	<header>
		<h1>{siteTitle}</h1>
		<h3>{siteDescription}</h3>
	</header>
	<List />
	<About />
</main>

<style>
	header {
		padding: 3rem 0 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		position: relative;
		margin-bottom: 3rem;
	}
	@media (min-width: 830px) {
		header {
			padding: 1rem 0;

			width: auto;
		}
	}
	h1 {
		font-size: 2.5rem;
	}
	h3 {
		font-size: 1.5rem;
	}
	h1,
	h3 {
		display: block;
		width: 100%;
		max-width: 50rem;
		margin: 0 auto;
	}
	h3 {
		color: black;
		font-weight: lighter;
		margin-top: 0.25rem;
	}
</style>
