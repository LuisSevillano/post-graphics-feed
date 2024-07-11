export const authorBaselineURL = 'https://www.washingtonpost.com/people/';

export function formatDate(dateStr) {
	const date = new Date(dateStr);
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	return date.toLocaleDateString('en-US', options);
}

export function formatAuthors(authors) {
	if (!authors || authors.length === 0) {
		return 'Unknown';
	}
	if (authors.length === 1) {
		const author = authors[0];
		return `<a class="author" href="${authorBaselineURL}${author.slug}" aria-label="Link to author profile" target="_blank" rel="noopener noreferrer">${author.name}</a>`;
	}
	if (authors.length === 2) {
		return authors
			.map(
				(author) =>
					`<a class="author" href="${authorBaselineURL}${author.slug}" aria-label="Link to author profile" target="_blank" rel="noopener noreferrer">${author.name}</a>`
			)
			.join(' and ');
	}
	const allButLastAuthors = authors
		.slice(0, -1)
		.map(
			(author) =>
				`<a class="author" href="${authorBaselineURL}${author.slug}" aria-label="Link to author profile" target="_blank" rel="noopener noreferrer">${author.name}</a>`
		)
		.join(', ');
	const lastAuthor = authors[authors.length - 1];
	return `${allButLastAuthors} and <a class="author" href="${authorBaselineURL}${lastAuthor.slug}" aria-label="Link to author profile" target="_blank" rel="noopener noreferrer">${lastAuthor.name}</a>`;
}
