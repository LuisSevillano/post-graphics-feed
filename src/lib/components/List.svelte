<script>
	import Article from '$lib/Article.svelte';
	import Skeleton from '$lib/Skeleton.svelte';
	import { onMount } from 'svelte';

	let articles = [];
	let articlesSliced = [];
	let nArticles = 35;
	let indexes = [0, nArticles];
	let isLoading = true;
	$: hasMoreArticles = articlesSliced.length < articles.length;

	onMount(async () => {
		try {
			const response = await fetch(
				'https://raw.githubusercontent.com/LuisSevillano/post-graphics-feed/main/api/wapo_graphics_feed.json'
			);
			articles = await response.json();
			articlesSliced = articles.slice(indexes[0], indexes[1]);
			isLoading = false;
		} catch (error) {
			console.error('Error loading articles:', error);
			isLoading = false;
		}
	});

	function updateIndexes() {
		indexes = [indexes[0] + nArticles, indexes[1] + nArticles];
		articlesSliced = articlesSliced.concat(articles.slice(indexes[0], indexes[1]));
	}
</script>

<section>
	<div class="grid">
		{#if isLoading}
			<Skeleton />
		{:else}
			{#each articlesSliced as article}
				<Article data={article} />
			{/each}
		{/if}
	</div>
</section>
<section>
	{#if hasMoreArticles}
		<div class="loading-button">
			<button on:click={updateIndexes}>Show more</button>
		</div>
	{/if}
</section>

<style>
	.loading-button {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 1.5rem;
	}
	button {
		margin: 1rem;
		width: 120px;
		height: 30px;
		cursor: pointer;
	}

	.grid {
		position: relative;
		display: grid;
		grid-template-columns: auto;
		grid-gap: 40px;
		justify-content: center;
		grid-auto-flow: dense;
		row-gap: 25px;
	}

	@media (min-width: 600px) {
		.grid {
			grid-template-columns: repeat(auto-fill, 280px);
			grid-gap: 1em;
		}
	}
</style>
