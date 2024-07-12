<script>
	import './app.css';
	import Meta from '$lib/components/Meta.svelte';
	export let data;
	const { siteTitle, siteDescription, siteURL, siteImage, modified } = data;
</script>

<Meta {siteTitle} {siteDescription} {siteURL} {siteImage} {modified} />

<slot />
