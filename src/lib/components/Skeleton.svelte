<script>
	const n = 15;
</script>

{#each Array.from({ length: n }, (_, i) => i) as article}
	<div class="content">
		<a></a>
		<div class="article-data">
			<p class="date"></p>
			<h1 class="h1-ske"></h1>
			<p class="authors"></p>
		</div>
	</div>
{/each}

<style>
	.content {
		padding-top: 2rem;
	}

	.content > a {
		background: linear-gradient(110deg, #000000 8%, #1a1a1a 18%, #000000 33%);
		background-size: 200% 100%;
		-webkit-animation: 1.5s shine linear infinite;
		animation: 1.5s shine linear infinite;
		aspect-ratio: 16 / 9;
		overflow: hidden;
		display: block;
	}

	.article-data {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	h1,
	.date,
	.authors {
		background: linear-gradient(110deg, #000000 8%, #1a1a1a 18%, #000000 33%);
		background-size: 200% 100%;
		animation: shine 1.5s linear infinite;
		margin: 0;
	}

	h1 {
		font-size: 1.5rem;
		height: 48px;
		margin-top: 2.5rem;
	}

	.date {
		height: 20px;
		color: #595959;
		font-size: 1rem;
		font-weight: 100;
		margin-top: 0.75rem;
	}

	.authors {
		display: flex;
		flex-wrap: wrap;
		min-height: 40px;
		margin-top: 0.25rem;
	}

	@keyframes shine {
		to {
			background-position-x: -200%;
		}
	}

	@media (min-width: 600px) {
		.content {
			padding-top: 0;
			border: none;
		}

		h1 {
			font-size: 1.25rem;
			/* height: 85px; */
			margin: 0.5rem 0;
		}

		.article-data {
			/* height: 245px; */
		}
	}
</style>
