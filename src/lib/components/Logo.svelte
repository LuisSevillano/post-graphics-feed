<script>
	import { home } from '$lib/config';
</script>

<a href={home} title="Go to home page">
	<img src="favicon.png" alt="Go to home page" />
</a>

<style>
	a {
		z-index: 2;
		position: absolute;
		left: 0;
		top: 0;
		width: 30px;
		height: 30px;
		border: 1px solid gray;
		margin: 0.25rem;
		border-bottom-right-radius: 10px;
		cursor: pointer;
		overflow: hidden;
	}

	img {
		width: 100%;
		transition: all 1s;
	}
	a:hover {
		outline: 1px solid rgba(0, 0, 0, 0.25);
	}

	@media (min-width: 830px) {
		a {
			width: 30px;
			height: 30px;
		}
	}
</style>
