<script>
	import Article from '$lib/components/Article.svelte';
	import Skeleton from '$lib/components/Skeleton.svelte';
	import ShowMore from './ShowMore.svelte';
	import { onMount } from 'svelte';

	import { indexes, articlesSliced, articles, nArticles } from '$lib/stores/stores.js';

	let isLoading = true;

	onMount(async () => {
		try {
			const response = await fetch(
				'https://raw.githubusercontent.com/LuisSevillano/post-graphics-feed/main/api/wapo_graphics_feed.json'
			);
			$articles = await response.json();
			$articlesSliced = $articles.slice(0, nArticles);
			isLoading = false;
		} catch (error) {
			console.error('Error loading articles:', error);
			isLoading = false;
		}
	});
</script>

<section>
	<!-- <div class="grid"> -->
	{#if isLoading}
		<Skeleton />
	{:else}
		{#each $articlesSliced as article}
			<Article data={article} />
		{/each}
	{/if}
	<!-- </div> -->
	<ShowMore />
</section>
<section></section>

<style>
	section {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1em;
		justify-content: center;
		grid-auto-flow: dense;
	}
	@media (min-width: 600px) {
		section {
			grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		}
	}
</style>
