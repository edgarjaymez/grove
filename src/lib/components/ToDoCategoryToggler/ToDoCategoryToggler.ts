import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '../Icon/Icon.ts';

type Color = 'brand' | 'accent' | 'information' | 'gray';

@customElement('gv-todo-category-toggler')
export class ToDoCategoryToggler extends LitElement {
	@property({ type: String }) category = 'Category';
	@property({ type: String }) color: Color = 'brand';
	@property({ type: String }) count = '3';
	@property({ type: Boolean, reflect: true }) disabled = false;
	@property({ type: Boolean, attribute: 'is-selected', reflect: true }) isSelected = false;

	static styles = css`
		.btn {
			display: flex;
			flex-direction: column;
			gap: var(--soft-grid-4);
			padding: var(--soft-grid-12) var(--soft-grid-16);
			border-radius: var(--border-radius-lg);
			overflow: clip;
			border: none;
			cursor: pointer;
			text-align: left;
			width: 163px;
			transition:
				background 300ms ease-in-out,
				color 300ms ease-in-out,
				box-shadow 300ms ease-in-out;
		}

		.btn__header {
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
			width: 100%;
			flex-shrink: 0;
		}

		.btn__count {
			font: var(--typography-single-line-title-emphasis);
			letter-spacing: var(--letter-spacing-base);
			white-space: nowrap;
			flex-shrink: 0;
		}

		.btn__icon-wrap {
			font-size: var(--font-size-xl);
			flex-shrink: 0;
			display: flex;
			align-items: center;
		}

		.btn__category {
			font: var(--typography-single-line-subheading-base);
			letter-spacing: var(--letter-spacing-base);
			width: 100%;
			flex-shrink: 0;
		}

		.btn:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}

		/* Brand — default */
		.btn--brand {
			background: var(--semantic-color-surface-brand-terrace);
			color: var(--semantic-color-text-on-brand-terrace-subtle);
			box-shadow: var(--drop-shadow-under-brand-terrace);
		}
		.btn--brand .btn__count {
			color: var(--semantic-color-text-on-brand-terrace-base);
		}
		.btn--brand:not(:disabled):not(.btn--selected):hover,
		.btn--brand:not(:disabled):not(.btn--selected):active {
			background: var(--semantic-color-surface-brand-aurora);
			color: var(--semantic-color-text-on-brand-aurora-subtle);
			box-shadow: none;
		}
		.btn--brand:not(:disabled):not(.btn--selected):hover .btn__count,
		.btn--brand:not(:disabled):not(.btn--selected):active .btn__count {
			color: var(--semantic-color-text-on-brand-aurora-base);
		}

		/* Brand — selected */
		.btn--brand.btn--selected {
			background: var(--semantic-color-surface-brand-summit);
			color: var(--semantic-color-text-on-brand-summit-subtle);
			box-shadow: var(--drop-shadow-under-brand-summit);
		}
		.btn--brand.btn--selected .btn__count {
			color: var(--semantic-color-text-on-brand-summit-base);
		}

		/* Accent — default */
		.btn--accent {
			background: var(--semantic-color-surface-accent-terrace);
			color: var(--semantic-color-text-on-accent-terrace-subtle);
			box-shadow: var(--drop-shadow-under-accent-terrace);
		}
		.btn--accent .btn__count {
			color: var(--semantic-color-text-on-accent-terrace-base);
		}
		.btn--accent:not(:disabled):not(.btn--selected):hover,
		.btn--accent:not(:disabled):not(.btn--selected):active {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-subtle);
			box-shadow: none;
		}
		.btn--accent:not(:disabled):not(.btn--selected):hover .btn__count,
		.btn--accent:not(:disabled):not(.btn--selected):active .btn__count {
			color: var(--semantic-color-text-on-accent-aurora-base);
		}

		/* Accent — selected */
		.btn--accent.btn--selected {
			background: var(--semantic-color-surface-accent-summit);
			color: var(--semantic-color-text-on-accent-summit-subtle);
			box-shadow: var(--drop-shadow-under-accent-summit);
		}
		.btn--accent.btn--selected .btn__count {
			color: var(--semantic-color-text-on-accent-summit-base);
		}

		/* Information — default */
		.btn--information {
			background: var(--semantic-color-surface-information-terrace);
			color: var(--semantic-color-text-on-information-terrace-subtle);
			box-shadow: var(--drop-shadow-under-information-terrace);
		}
		.btn--information .btn__count {
			color: var(--semantic-color-text-on-information-terrace-base);
		}
		.btn--information:not(:disabled):not(.btn--selected):hover,
		.btn--information:not(:disabled):not(.btn--selected):active {
			background: var(--semantic-color-surface-information-aurora);
			color: var(--semantic-color-text-on-information-aurora-subtle);
			box-shadow: none;
		}
		.btn--information:not(:disabled):not(.btn--selected):hover .btn__count,
		.btn--information:not(:disabled):not(.btn--selected):active .btn__count {
			color: var(--semantic-color-text-on-information-aurora-base);
		}

		/* Information — selected */
		.btn--information.btn--selected {
			background: var(--semantic-color-surface-information-summit);
			color: var(--semantic-color-text-on-information-summit-subtle);
			box-shadow: var(--drop-shadow-under-information-summit);
		}
		.btn--information.btn--selected .btn__count {
			color: var(--semantic-color-text-on-information-summit-base);
		}

		/* Gray — default */
		.btn--gray {
			background: var(--semantic-color-surface-gray-terrace);
			color: var(--semantic-color-text-on-gray-terrace-subtle);
			box-shadow: var(--drop-shadow-under-gray-terrace);
		}
		.btn--gray .btn__count {
			color: var(--semantic-color-text-on-gray-terrace-base);
		}
		.btn--gray:not(:disabled):not(.btn--selected):hover,
		.btn--gray:not(:disabled):not(.btn--selected):active {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-subtle);
			box-shadow: none;
		}
		.btn--gray:not(:disabled):not(.btn--selected):hover .btn__count,
		.btn--gray:not(:disabled):not(.btn--selected):active .btn__count {
			color: var(--semantic-color-text-on-gray-aurora-base);
		}

		/* Gray — selected */
		.btn--gray.btn--selected {
			background: var(--semantic-color-surface-gray-summit);
			color: var(--semantic-color-text-on-gray-summit-subtle);
			box-shadow: var(--drop-shadow-under-gray-summit);
		}
		.btn--gray.btn--selected .btn__count {
			color: var(--semantic-color-text-on-gray-summit-base);
		}
	`;

	private _toggle() {
		this.isSelected = !this.isSelected;
		this.dispatchEvent(
			new CustomEvent('toggle', { detail: this.isSelected, bubbles: true, composed: true })
		);
	}

	render() {
		return html`
			<button
				type="button"
				class=${classMap({
					btn: true,
					[`btn--${this.color}`]: true,
					'btn--selected': this.isSelected
				})}
				?disabled=${this.disabled}
				aria-pressed=${this.isSelected ? 'true' : 'false'}
				@click=${this._toggle}
			>
				<div class="btn__header">
					<span class="btn__count">${this.count}</span>
					<div class="btn__icon-wrap">
						<gv-icon is-filled unicode=${''}></gv-icon>
					</div>
				</div>
				<span class="btn__category">${this.category}</span>
			</button>
		`;
	}
}
