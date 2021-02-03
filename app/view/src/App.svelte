<script lang="ts">
	export let title: string;
	export let description: string;

	setTimeout(() => {
		title = 'Client-Render';
	}, 2000);
</script>

<main>
	<h1>{title}!</h1>
	<p>{description}</p>
	<p>Powered By Egg + Svelte</p>
</main>

<style>
	main {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
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