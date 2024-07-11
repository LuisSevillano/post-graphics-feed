<script>
	import PlusIcon from '$lib/components/PlusIcon.svelte';
	import {
		indexes,
		articlesSliced,
		hasMoreArticles,
		articles,
		nArticles
	} from '$lib/stores/stores.js';

	function updateIndexes() {
		$indexes = [$indexes[0] + nArticles, $indexes[1] + nArticles];
		$articlesSliced = $articlesSliced.concat($articles.slice($indexes[0], $indexes[1]));
	}
	const data = {};
</script>

{#if hasMoreArticles}
	<button on:click={updateIndexes}>
		<div class="content">
			<PlusIcon />
			Load more
		</div>
	</button>
{/if}

<style>
	.content {
		opacity: 0.5;
		border: 1px solid white;
		color: white;
		aspect-ratio: 16 / 9;
		background: var(--c-img-bg);
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		cursor: pointer;
	}
	.content:hover {
		opacity: 0.7;
	}
	button {
		display: inherit;
		background: none;
		border: none;
		color: white;
	}
</style>
