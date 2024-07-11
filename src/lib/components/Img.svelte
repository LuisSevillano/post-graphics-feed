<script>
	export let src;
	export let alt;
</script>

<div class="img">
	{#if src}
		<img loading="lazy" decoding="auto" {src} {alt} />
	{/if}
</div>

<style>
	.img {
		aspect-ratio: 16/9;
		background: var(--c-img-bg);
		position: relative;
		overflow: hidden;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		animation: fadeIn 2s forwards;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
