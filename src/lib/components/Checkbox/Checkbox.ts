import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { componentReset } from '../../styles/component-reset.js';

type CheckboxResponsive = 'default' | 'xl';

@customElement('gv-checkbox')
export class Checkbox extends LitElement {
	@property({ type: Boolean, reflect: true }) checked = false;
	@property({ type: String }) responsive: CheckboxResponsive = 'default';
	@property({ type: Boolean, reflect: true }) disabled = false;

	static styles = [
		componentReset,
		css`
			.checkbox {
				position: relative;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				overflow: hidden;
				flex-shrink: 0;
				width: 24px;
				height: 24px;
				border-radius: var(--border-radius-sm);
				border: var(--border-width-base) solid var(--color-gray-800);
				background: var(--semantic-color-surface-ground);
				color: transparent;
				cursor: pointer;
				transition:
					background-color 200ms,
					border-color 200ms,
					color 200ms;
			}

			.checkbox.xl {
				width: 28px;
				height: 28px;
			}

			.checkbox[aria-checked='true'] {
				background: var(--semantic-color-surface-brand-summit);
				border-color: var(--semantic-color-surface-brand-summit);
				color: var(--semantic-color-text-on-brand-summit-base);
			}

			.checkbox:hover:not([aria-checked='true']):not([disabled]) {
				border-color: var(--semantic-color-border-around-gray-aurora);
			}

			.checkbox:hover[aria-checked='true']:not([disabled]) {
				background: var(--color-brand-600);
				border-color: var(--color-brand-600);
				color: var(--semantic-color-text-on-brand-aurora-base);
			}

			.checkbox:active[aria-checked='true']:not([disabled]) {
				background: var(--semantic-color-surface-brand-aurora);
				border-color: var(--semantic-color-surface-brand-aurora);
				color: var(--semantic-color-text-on-brand-aurora-base);
			}

			.checkbox[disabled] {
				background: var(--color-gray-50);
				border-color: var(--color-gray-800);
				cursor: not-allowed;
				opacity: 0.5;
			}

			.checkbox[disabled][aria-checked='true'] {
				color: var(--semantic-color-text-on-gray-summit-subtle);
			}

			.check {
				width: 12px;
				height: 8.862px;
			}

			.checkbox.xl .check {
				width: 16px;
				height: 11.816px;
			}
		`
	];

	private _toggle() {
		this.checked = !this.checked;
		this.dispatchEvent(
			new CustomEvent('change', { detail: this.checked, bubbles: true, composed: true })
		);
	}

	render() {
		return html`
			<button
				type="button"
				role="checkbox"
				aria-checked=${this.checked ? 'true' : 'false'}
				?disabled=${this.disabled}
				class=${classMap({ checkbox: true, xl: this.responsive === 'xl' })}
				@click=${this._toggle}
			>
				${this.checked
					? html`<svg class="check" viewBox="0 0 12 8.862" fill="none" aria-hidden="true">
							<path
								d="M1.5 4.431L4.5 7.431L10.5 1.431"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>`
					: nothing}
			</button>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'gv-checkbox': Checkbox;
	}
}
