<script>
	import { siteTitle, siteDescription, siteURL, siteImage } from '$lib/config';
	const modified = import.meta.env.VITE_DATA_MODIFIED;
</script>

<svelte:head>
	<!-- Search engines -->
	<title>{siteTitle}</title>
	<meta name="title" content={siteTitle} />
	<meta name="description" content={siteDescription} />

	<meta property="article:published_time" content="2024-06-20T17:41:11.215Z" />
	<meta property="article:modified_time" content={modified} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteURL} />
	<meta property="og:title" content={siteTitle} />
	<meta property="og:description" content={siteDescription} />
	<meta property="og:image" content={siteImage} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={siteURL} />
	<meta property="twitter:title" content={siteTitle} />
	<meta property="twitter:description" content={siteDescription} />
	<meta property="twitter:image" content={siteImage} />
</svelte:head>
