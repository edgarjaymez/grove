import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('gv-icon')
export class Icon extends LitElement {
	@property({ type: String }) unicode = '';
	@property({ type: Boolean, attribute: 'is-filled' }) isFilled = false;
	@property({ type: Boolean, attribute: 'fill-in-hover' }) fillInHover = false;

	static styles = css`
		i {
			width: 1lh;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			font-style: normal;
			font-weight: var(--font-weight-regular);
			color: inherit;
		}

		i.regular {
			font-family: var(--gv-icon-font-family, var(--font-family-icons-regular)) !important;
		}
		i.fill,
		i.fill-hover:hover {
			font-family: var(--gv-icon-font-family, var(--font-family-icons-fill)) !important;
		}
	`;

	render() {
		return html`
			<i
				class=${classMap({
					regular: !this.isFilled,
					fill: this.isFilled,
					'fill-hover': this.fillInHover
				})}
				>${this.unicode}</i
			>
		`;
	}
}
