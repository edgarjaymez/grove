import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { componentReset } from '../../styles/component-reset.js';

export type ColorFamily =
	| 'brand'
	| 'accent'
	| 'gray'
	| 'information'
	| 'danger'
	| 'success'
	| 'base';
export type ColorShade =
	| '50'
	| '100'
	| '200'
	| '300'
	| '400'
	| '500'
	| '600'
	| '700'
	| '800'
	| '900'
	| '950'
	| 'light'
	| 'dark';
export type ColorText = 'dark' | 'light';

@customElement('gv-color-swatch')
export class ColorSwatch extends LitElement {
	@property({ type: String }) color: ColorFamily = 'brand';
	@property({ type: String }) shade: ColorShade = '50';
	@property({ type: String }) name = '';
	@property({ type: String }) text: ColorText = 'dark';
	@property({ type: String }) oklch = '';
	@property({ type: String }) hex = '';

	static styles = [
		componentReset,
		css`
			:host {
				display: block;
			}

			.swatch {
				display: flex;
				flex-direction: column;
				gap: var(--soft-grid-16);
				width: 9rem;
			}

			.visualizer {
				height: 9rem;
				width: 100%;
				overflow: hidden;
				padding: var(--soft-grid-8);
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				box-sizing: border-box;
			}

			.name {
				font: var(--typography-single-line-base-base);
				letter-spacing: var(--letter-spacing-base);
				white-space: nowrap;
			}

			.name--dark {
				color: var(--color-base-dark);
			}

			.name--light {
				color: var(--color-base-light);
			}

			.color-spaces {
				display: flex;
				flex-direction: column;
				gap: var(--soft-grid-4);
			}

			.oklch-group {
				display: flex;
				flex-direction: column;
				gap: var(--soft-grid-0);
			}

			.oklch-label,
			.oklch-value {
				font: var(--typography-single-line-label-emphasis);
				letter-spacing: var(--letter-spacing-base);
				color: var(--semantic-color-text-on-ground-base);
			}

			.hex-value {
				font: var(--typography-single-line-caption-base);
				letter-spacing: var(--letter-spacing-base);
				color: var(--semantic-color-text-on-ground-subtle);
			}
		`
	];

	render() {
		return html`
			<div class="swatch">
				<div
					class="visualizer"
					style=${styleMap({ 'background-color': `var(--color-${this.color}-${this.shade})` })}
				>
					<p class="name name--${this.text}">${this.name}</p>
				</div>
				<div class="color-spaces">
					<div class="oklch-group">
						<p class="oklch-label">oklch</p>
						<p class="oklch-value">${this.oklch}</p>
					</div>
					<p class="hex-value">${this.hex}</p>
				</div>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'gv-color-swatch': ColorSwatch;
	}
}
