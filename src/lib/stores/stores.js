import { writable, derived } from 'svelte/store';

export const nArticles = 35;

export const indexes = writable([0, nArticles]);
export const articlesSliced = writable([]);
export const articles = writable([]);
export const hasMoreArticles = derived(
	[articles, articlesSliced],
	([$articles, $articlesSliced]) => $articlesSliced.length < $articles.length
);
