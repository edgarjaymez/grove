<script>
	import Icon from '$lib/components/Icon.svelte';
</script>

<main>
	<div class="title-container">
		<Icon unicode="" fillInHover class="display singleline" />
		<h1 class="display singleline">Welcome to your library project</h1>
	</div>
	<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
	<p>
		Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
	</p>
</main>

<style>
	.title-container {
		display: flex;
		gap: 1rem;
	}
</style>
