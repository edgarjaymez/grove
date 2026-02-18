<script lang="ts">
	import { Isotype, Texture } from '$lib/index.js';

	const version = __APP_VERSION__;
</script>

<main class="drop-shadow-brand-summit">
	<header>
		<h1 class="hero singleline">Grove</h1>
		<p class="display singleline">Where living systems take root</p>
		<span class="title singleline"
			>by <small class="title singleline emphasis">Edgar Diaz</small></span
		>
	</header>

	<data class="display singleline" value={version}>{version}</data>

	<Isotype class="isotype" color="base" size={1000} tone="dark" />

	<Texture />
</main>

<style>
	main {
		/* Mobile defaults */
		height: calc(100svh - var(--soft-grid-8) * 2);
		margin: var(--soft-grid-8);
		padding: var(--grid-landing-margin);
		border-radius: var(--border-radius-2xl);
		background-color: var(--semantic-color-surface-brand-summit);
		color: var(--semantic-color-text-on-brand-summit-base);
		display: flex;
		flex-direction: column;
		gap: var(--soft-grid-36);
		position: relative;
		overflow: hidden;

		header {
			display: flex;
			flex-direction: column;
			gap: var(--soft-grid-12);
			z-index: 2;

			h1.hero.singleline {
				font-size: 6rem;
				letter-spacing: 0.0625rem;
			}

			p.display.singleline {
				font-size: 3rem;
				letter-spacing: 0.0625rem;
			}

			span.title.singleline,
			small.title.singleline {
				font-size: 1.875rem;
			}

			p,
			span {
				color: var(--semantic-color-text-on-brand-summit-subtle);
			}
		}

		data.display.singleline {
			font-size: 3rem;
			letter-spacing: 0.0625rem;
			color: var(--semantic-color-text-on-brand-summit-base);
			z-index: 2;
		}

		:global(.isotype) {
			position: absolute;
			width: 60svh;
			height: 60svh;
			max-width: 1000px;
			max-height: 1000px;
			right: -8rem;
			bottom: -7rem;
			z-index: 1;
		}

		/* Tablet */
		@media (width >= 768px) {
			height: calc(100svh - var(--soft-grid-16) * 2);
			margin: var(--soft-grid-16);
			border-radius: var(--border-radius-4xl);
			gap: var(--soft-grid-60);

			header {
				gap: var(--soft-grid-20);

				h1.hero.singleline {
					font-size: 8rem;
					letter-spacing: 0.125rem;
				}

				p.display.singleline {
					font-size: 3.5rem;
					letter-spacing: 0.125rem;
				}

				span.title.singleline,
				small.title.singleline {
					font-size: 1.75rem;
				}
			}

			data.display.singleline {
				font-size: 3.5rem;
				letter-spacing: 0.125rem;
			}

			:global(.isotype) {
				width: 70svh;
				height: 70svh;
				right: -10rem;
				bottom: -9rem;
			}
		}

		/* Laptop */
		@media (width >= 1280px) {
			height: calc(100svh - var(--soft-grid-24) * 2);
			margin: var(--soft-grid-24);
			border-radius: var(--border-radius-8xl);
			gap: 0;
			justify-content: space-between;

			header {
				gap: var(--soft-grid-32);

				h1.hero.singleline {
					font-size: 12rem;
					letter-spacing: var(--letter-spacing-extra-loose);
				}

				p.display.singleline {
					font-size: 5rem;
					letter-spacing: var(--letter-spacing-loose);
				}

				span.title.singleline,
				small.title.singleline {
					font-size: 2.5rem;
				}
			}

			data.display.singleline {
				margin-left: auto;
				font-size: 5rem;
				letter-spacing: var(--letter-spacing-loose);
				text-align: right;
			}

			:global(.isotype) {
				width: 100svh;
				height: 100svh;
				right: -14rem;
				bottom: -10rem;
			}
		}

		/* Desktop */
		@media (width >= 1536px) {
			height: calc(100svh - var(--soft-grid-32) * 2);
			margin: var(--soft-grid-32);
			border-radius: var(--border-radius-12xl);

			header h1.hero.singleline {
				font-size: 15rem;
			}

			:global(.isotype) {
				width: 110svh;
				height: 110svh;
				right: -16rem;
				bottom: -12rem;
			}
		}
	}
</style>
