<script>
	import Img from './Img.svelte';
	import ArticleData from './ArticleData.svelte';
	export let data;
	const authorBaselineURL = 'https://www.washingtonpost.com/people/';
	// const defIMG = './YX6JDD2TTJF4XPVHIZPHF4SVD4.jpeg';

	function formatDate(dateStr) {
		const date = new Date(dateStr);
		const options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		};

		return date.toLocaleDateString('en-US', options);
	}
</script>

<div class="content">
	<a href={data.url} aria-label="Link to article" target="_blank" rel="noopener noreferrer">
		<Img src={data?.img} alt={data?.description} />
	</a>

	<ArticleData {data} />
</div>

<!-- <div class="content">
	<a href={data.url}>
		<div class="img">
			{#if data.img}
				<img loading="lazy" decoding="auto" src={data.img} alt={data.description} />
			{/if}
		</div>
	</a>
	<div class="article-data">
		<h1>{data.headline}</h1>
		<p class="flexible description">{data.description}</p>
		<p class="date">{formatDate(data.date)}</p>
		<p class="authors">
			<span>By&nbsp;</span>
			{#if data.credits.length > 1}
				{#each data.credits.filter((d, i) => i < data.credits.length - 1) as author, i}
					{#if author.slug}
						<span class="author-item">
							<a href="{authorBaselineURL}{author.slug}"><span>{author.name}</span></a>
							{#if i < data.credits.length - 1}
								<span>,&nbsp;</span>
							{/if}
						</span>
					{:else}
						<span class="author-item">
							<a><span>{author.name}</span></a>
							{#if i < data.credits.length - 1}
								<span>,&nbsp;</span>
							{/if}
						</span>
					{/if}
				{/each}
				{#if data.credits[data.credits.length - 1].slug}
					<span class="author-item">
						<a href={data.credits[data.credits.length - 1].slug}
							><span>{data.credits[data.credits.length - 1].name}</span></a
						>
					</span>
				{:else}
					<span class="author-item">
						<a><span>{data.credits[data.credits.length - 1].name}</span></a>
					</span>
				{/if}
			{:else}
				{#each data.credits as author}
					<a href="{authorBaselineURL}{author.slug}"><span>{author.name}</span></a>
				{/each}
			{/if}
		</p>
	</div>
</div> -->

<style>
	.content {
		margin: 0 0 2em 0;
	}
</style>
