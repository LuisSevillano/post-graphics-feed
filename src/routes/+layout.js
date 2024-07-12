export const prerender = true;

import { siteTitle, siteDescription, siteURL, siteImage } from '$lib/config';
const modified = import.meta.env.VITE_DATA_MODIFIED;

export async function load() {
	return {
		siteTitle,
		siteDescription,
		siteURL,
		siteImage,
		modified
	};
}
