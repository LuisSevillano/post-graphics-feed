<script>
</script>

<footer>
	<h2>About this project</h2>
	<div class="cols">
		<p>
			There is currently no tag or page where all the articles published by The Washington Post's
			graphics team can be found. To address this, I have manually compiled an array of names of all
			the authors on the team and used the Post's API to fetch data about their articles, including
			the headline, subtitle, authors, date, image, and URL.
		</p>
		<p>
			The data is updated daily thanks to a GitHub Actions workflow. To avoid overloading the Post's
			API, only the latest five articles from each author are requested. The code that fetches and
			parses the data can be found in the api folder of the <a
				href="https://github.com/LuisSevillano/post-graphics-feed">repository</a
			>.
		</p>
		<p>
			This project is open source and aims to allow everyone to follow the incredible work published
			by this outstanding team. If you work here and are not on the <a
				href="https://github.com/LuisSevillano/post-graphics-feed/blob/main/api/authors.json"
				>list</a
			> or want to add someone, please open a pull request in the repository.
		</p>
	</div>
</footer>

<style>
	footer {
		margin-top: 4rem;
	}
	h2 {
		margin-bottom: 0.25rem;
	}
	.cols {
		display: flex;
		max-width: 630px;
		flex-direction: column;
	}
	p {
		margin-top: 0.75rem;
	}
	a {
		border-bottom: 1px solid rgb(121, 121, 121);
	}
</style>
