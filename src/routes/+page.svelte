<script lang="ts">
	import Isotype from '$lib/components/Isotype.svelte';

	const version = __APP_VERSION__;
</script>

<main>
	<header>
		<h1 class="hero singleline">Grove</h1>
		<p class="display singleline">Where living systems take root</p>
		<span class="title singleline"
			>By <small class="title singleline emphasis">Edgar Diaz</small></span
		>
	</header>

	<data class="display singleline" value={version}>{version}</data>

	<Isotype class="isotype" color="base" size={1000} tone="dark" />
</main>

<style>
	main {
		height: calc(100svh - var(--soft-grid-32) * 2);
		margin: var(--soft-grid-32);
		padding: var(--grid-landing-margin);
		border-radius: var(--border-radius-12xl);
		background-color: var(--semantic-color-surface-brand-summit);
		color: var(--semantic-color-text-on-brand-summit-base);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
		overflow: hidden;

		header {
			display: flex;
			flex-direction: column;
			gap: var(--soft-grid-32);

			p,
			span {
				color: var(--semantic-color-text-on-brand-summit-subtle);
			}
		}

		data {
			margin-left: auto;
			color: var(--semantic-color-text-on-brand-summit-base);
			text-align: right;
			z-index: 1;
		}

		:global(.isotype) {
			position: absolute;
			right: -15rem;
			bottom: -13.5rem;
			z-index: 0;
		}
	}
</style>
