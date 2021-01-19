<script>
	export let title;
	export let description;
</script>

<main>
	<h1>{title}!</h1>
	<p>{description}</p>
	<p>Powered By Egg + Svelte</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;		
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>