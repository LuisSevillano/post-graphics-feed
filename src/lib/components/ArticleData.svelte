<script>
	import { formatDate, formatAuthors } from '$lib/utils/utils';
	export let data;
</script>

<div class="article-data">
	<a href={data.url} aria-label="Link to article" target="_blank" rel="noopener noreferrer">
		<p class="date">{formatDate(data.date)}</p>
		<h3 class="headline">{data.headline}</h3>
	</a>

	{#if data.credits && data.credits.length > 0}
		<p class="authors">
			By {@html formatAuthors(data.credits)}
		</p>
	{/if}
</div>

<style>
	.date {
		margin: 0.5em 0 0.5em 0;
		font-size: 70%;
		text-transform: uppercase;
	}

	.headline {
		font-size: 1.1rem;
		margin: 0.5em 0 0.5em 0;
		font-weight: 600;
	}

	.authors {
		font-size: 80%;
		margin: 1em 0 0 0;
		opacity: 0.7;
	}
</style>
