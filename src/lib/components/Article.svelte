<script>
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
</div>

<style>
	.img {
		aspect-ratio: 16 / 9;
		position: relative;
		overflow: hidden;
	}
	.content {
		padding-top: 2rem;
		border-top: 1px solid rgb(233, 233, 233);
	}

	.author-item {
		display: flex;
	}
	a span {
		border-bottom: 1px solid black;
	}
	.description {
		color: rgb(89, 89, 89);
		margin: 0;
	}
	.authors,
	.date {
		margin: 0;
	}
	.authors {
		display: flex;
		flex-wrap: wrap;
		min-height: 40px;
		margin-top: 0.25rem;
	}
	a:hover + div h1 {
		color: rgb(80, 80, 80);
	}
	a:hover img {
		transform: scale(1.01);
	}

	.flexible {
		flex-grow: 0;
	}

	.article-data {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}
	h1 {
		font-size: 1.5rem;
		height: auto;
		margin-top: 2.5rem;
		margin-bottom: 0.5rem;
	}
	.description,
	.date {
		font-size: 1rem;
	}

	.date {
		margin-top: 0.75rem;
		font-size: 1rem;
		font-weight: 100;
	}
	img {
		transition: all 250ms;
		width: 100%;
	}
	a {
		text-decoration: none;
		display: block;
	}
	.content > a {
		display: flex;
		background: rgb(235 235 235);
		align-items: center;
	}
	@media (min-width: 600px) {
		.content {
			padding-top: 0;
			border: none;
		}
		.flexible {
			flex-grow: 1;
		}
		h1 {
			height: 85px;
			margin: 0.5rem 0;
			font-size: 1.25rem;
		}
		.article-data {
			height: 245px;
		}
		.content > a {
			height: 210px;
			max-height: 210px;
			overflow: hidden;
		}
	}
</style>
