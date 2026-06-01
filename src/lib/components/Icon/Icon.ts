import { LitElement, css, nothing } from 'lit';
import { html as staticHtml, unsafeStatic } from 'lit/static-html.js';
import { customElement, property } from 'lit/decorators.js';
import { componentReset } from '../../styles/component-reset.js';

/**
 * Renders a Phosphor icon as an SVG via `@phosphor-icons/webcomponents`.
 *
 * The consuming app must register the icons it uses, e.g.
 * `import '@phosphor-icons/webcomponents/PhHeart'` for `name="heart"`.
 * An un-imported (or empty) name renders nothing.
 */
@customElement('gv-icon')
export class Icon extends LitElement {
	@property({ type: String }) name = '';
	@property({ type: Boolean, attribute: 'is-filled' }) isFilled = false;
	@property({ type: Boolean, attribute: 'fill-in-hover' }) fillInHover = false;

	static styles = [
		componentReset,
		css`
			:host {
				display: inline-flex;
				justify-content: center;
				align-items: center;
				color: inherit;
			}

			/* Two stacked weights, toggled by inheriting custom properties so an
			   ancestor (e.g. a hovered button) can drive the regular→fill swap. */
			.regular {
				display: var(--gv-icon-regular-display, inline-flex);
			}
			.fill {
				display: var(--gv-icon-fill-display, none);
			}

			:host(:hover) {
				--gv-icon-regular-display: none;
				--gv-icon-fill-display: inline-flex;
			}
		`
	];

	render() {
		const safeName = this.name.toLowerCase().replace(/[^a-z0-9-]/g, '');
		if (!safeName) return nothing;

		const tag = unsafeStatic(`ph-${safeName}`);

		if (this.fillInHover) {
			return staticHtml`
				<${tag} class="regular" weight="regular"></${tag}>
				<${tag} class="fill" weight="fill"></${tag}>
			`;
		}

		return staticHtml`<${tag} weight=${this.isFilled ? 'fill' : 'regular'}></${tag}>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'gv-icon': Icon;
	}
}
