<script>
	import { siteTitle, siteDescription } from '$lib/config';
</script>

<header>
	<h1>{siteTitle}</h1>
	<p>{siteDescription}</p>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin: 0 0 4rem 0;
	}
	p {
		margin-top: 1.5rem;
		font-size: 1rem;
		font-weight: 300;
		max-width: 310px;
	}
</style>
