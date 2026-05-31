import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../components/Isotype/Isotype.ts';
import '../../components/Texture/Texture.ts';

declare const __APP_VERSION__: string;

@customElement('gv-hero')
export class Hero extends LitElement {
	static styles = css`
		:host {
			display: block;
		}

		main {
			height: calc(100svh - var(--soft-grid-8) * 2);
			margin: var(--soft-grid-8);
			padding: var(--grid-landing-margin);
			border-radius: var(--border-radius-2xl);
			background-color: var(--semantic-color-surface-brand-summit);
			color: var(--semantic-color-text-on-brand-summit-base);
			box-shadow: var(--drop-shadow-under-brand-summit);
			display: flex;
			flex-direction: column;
			gap: var(--soft-grid-36);
			position: relative;
			overflow: hidden;
		}

		header {
			display: flex;
			flex-direction: column;
			gap: var(--soft-grid-12);
			z-index: 2;
		}

		header h1.hero.singleline {
			font-size: 6rem;
			letter-spacing: 0.0625rem;
		}

		header p.display.singleline {
			font-size: 3rem;
			letter-spacing: 0.0625rem;
		}

		header span.title.singleline,
		header small.title.singleline {
			font-size: 1.875rem;
		}

		header p,
		header span {
			color: var(--semantic-color-text-on-brand-summit-subtle);
		}

		data.display.singleline {
			font-size: 3rem;
			letter-spacing: 0.0625rem;
			color: var(--semantic-color-text-on-brand-summit-base);
			z-index: 2;
		}

		.isotype {
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
		@media (min-width: 768px) {
			main {
				height: calc(100svh - var(--soft-grid-16) * 2);
				margin: var(--soft-grid-16);
				border-radius: var(--border-radius-4xl);
				gap: var(--soft-grid-60);
			}

			header {
				gap: var(--soft-grid-20);
			}

			header h1.hero.singleline {
				font-size: 8rem;
				letter-spacing: 0.125rem;
			}

			header p.display.singleline {
				font-size: 3.5rem;
				letter-spacing: 0.125rem;
			}

			header span.title.singleline,
			header small.title.singleline {
				font-size: 1.75rem;
			}

			data.display.singleline {
				font-size: 3.5rem;
				letter-spacing: 0.125rem;
			}

			.isotype {
				width: 70svh;
				height: 70svh;
				right: -10rem;
				bottom: -9rem;
			}
		}

		/* Laptop */
		@media (min-width: 1280px) {
			main {
				height: calc(100svh - var(--soft-grid-24) * 2);
				margin: var(--soft-grid-24);
				border-radius: var(--border-radius-8xl);
				gap: 0;
				justify-content: space-between;
			}

			header {
				gap: var(--soft-grid-32);
			}

			header p {
				width: 50%;
			}

			header h1.hero.singleline {
				font-size: 12rem;
				letter-spacing: var(--letter-spacing-extra-loose);
			}

			header p.display.singleline {
				font-size: 5rem;
				letter-spacing: var(--letter-spacing-loose);
			}

			header span.title.singleline,
			header small.title.singleline {
				font-size: 2.5rem;
			}

			data.display.singleline {
				font-size: 5rem;
				letter-spacing: var(--letter-spacing-loose);
				text-align: left;
			}

			.isotype {
				width: 100svh;
				height: 100svh;
				right: -14rem;
				bottom: -10rem;
			}
		}

		/* Desktop */
		@media (min-width: 1536px) {
			main {
				height: calc(100svh - var(--soft-grid-32) * 2);
				margin: var(--soft-grid-32);
				border-radius: var(--border-radius-12xl);
			}

			header h1.hero.singleline {
				font-size: 15rem;
			}

			.isotype {
				width: 110svh;
				height: 110svh;
				right: -16rem;
				bottom: -12rem;
			}
		}
	`;

	render() {
		return html`
			<main>
				<header>
					<h1 class="hero singleline">Grove</h1>
					<p class="display singleline">Where living systems take root</p>
					<span class="title singleline"
						>by <small class="title singleline emphasis">Edgar Diaz</small></span
					>
				</header>

				<data class="display singleline" value=${__APP_VERSION__}>${__APP_VERSION__}</data>

				<gv-isotype class="isotype" color="base" size="1000" tone="dark"></gv-isotype>

				<gv-texture></gv-texture>
			</main>
		`;
	}
}
