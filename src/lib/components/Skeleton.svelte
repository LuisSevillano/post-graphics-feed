<script>
	const n = 15;
</script>

{#each [...Array(n)].map((u, i) => i) as article}
	<div class="content">
		<a> </a>
		<div class="article-data">
			<h1 class="">
				<div class="h1-ske"></div>
			</h1>
			<p class="flexible description"></p>
			<p class="date"></p>
			<p class="authors"></p>
		</div>
	</div>
{/each}

<style>
	.content {
		padding-top: 2rem;
		border-top: 1px solid rgb(233, 233, 233);
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
	.description {
		height: 70px;
	}

	.date {
		margin-top: 0.75rem;
		color: #595959;
		font-size: 1rem;
		font-weight: 100;
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
	.date {
		height: 20px;
	}
	.authors,
	.date,
	.description,
	.h1-ske,
	.content > a {
		background: #eee;
		background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
		background-size: 200% 100%;
		-webkit-animation: 1.5s shine linear infinite;
		animation: 1.5s shine linear infinite;
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
		.flexible {
			flex-grow: 1;
		}
		.h1-ske {
			height: 48px;
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
