const fs = require('fs');
const authors = require('./authors.json');

const currentDate = new Date().toISOString();
const limit = 5; // number of articles per author

// build and encode urls
const urls = authors.map(({ slug }) =>
	encodeURI(
		`https://www.washingtonpost.com/prism/api/author-feed?_website=washpost&query={"slug":"${slug}","from":"2014","to":"${currentDate}","limit":${limit}}`
	)
);

// function to fetch author data from a URL
async function getAuthorData(url) {
	try {
		const response = await fetch(url).then((res) => res.json());
		return response.items.map((item) => {
			return {
				id: item._id,
				headline: item.headlines.basic,
				description: item.description.basic,
				url: item.canonical_url,
				credits: item.credits.by.map((d) => ({ name: d.name, slug: d.slug })),
				date: item.first_publish_date,
				img:
					item.additional_properties.lead_art?.additional_properties?.thumbnailResizeUrl ||
					item.additional_properties.lead_art?.additional_properties?.originalUrl ||
					item.additional_properties.lead_art?.url,
				label: {
					text: item.label_display?.basic?.headline_prefix,
					url: item.label_display?.basic?.url
				}
			};
		});
	} catch (error) {
		console.error(`\n* Error fetching author data from ${url}. Error:\n\n`, error);
		return [];
	}
}

// Function to read existing JSON file if it exists
function readExistingJson(filePath) {
	try {
		if (fs.existsSync(filePath)) {
			const data = fs.readFileSync(filePath, 'utf8');
			return JSON.parse(data);
		}
	} catch (error) {
		console.error(`Error reading existing JSON file: ${error}`);
	}
	return [];
}

// Main function to get data from all authors, merge and sort articles by publication date, and write the resulting JSON to a file
async function main() {
	const existingArticles = readExistingJson('api/wapo_graphics_feed.json');
	let allArticles = [...existingArticles];

	for (const url of urls) {
		const authorData = await getAuthorData(url);

		if (authorData.length > 0) {
			allArticles = allArticles.concat(authorData);
		}
	}

	// Remove duplicates based on the 'id' property
	const uniqueArticles = Array.from(new Set(allArticles.map((article) => article.id))).map((id) =>
		allArticles.find((article) => article.id === id)
	);

	// Sort articles by publication date in descending order
	uniqueArticles.sort((a, b) => new Date(b.date) - new Date(a.date));

	// Compose the final JSON
	const finalJson = JSON.stringify(uniqueArticles, null, 2);

	// Write the JSON to a file only if new articles were added
	if (uniqueArticles.length > existingArticles.length) {
		const outputFile = 'api/wapo_graphics_feed.json';
		fs.writeFile(outputFile, finalJson, 'utf8', (err) => {
			if (err) {
				console.error('Error writing file:', err);
			} else {
				console.log(`File ${outputFile} created successfully.`);
			}
		});
	} else {
		console.log('No new articles to update.');
	}
}

// Execute the main function
main();
