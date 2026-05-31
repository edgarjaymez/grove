import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../Icon/Icon.js';

type ButtonVariant = 'filled' | 'tonal' | 'outlined' | 'ghost';
type ButtonColor = 'accent' | 'gray';
type ButtonSize = 'lg' | 'md' | 'sm';
type ButtonType = 'button' | 'submit' | 'reset';

@customElement('gv-button')
export class Button extends LitElement {
	@property({ type: String }) text = '';
	@property({ type: String }) variant: ButtonVariant = 'filled';
	@property({ type: String }) color: ButtonColor = 'accent';
	@property({ type: String }) size: ButtonSize = 'md';
	@property({ type: String }) icon?: string;
	@property({ type: String }) type: ButtonType = 'button';
	@property({ type: Boolean, reflect: true }) disabled = false;
	@property({ type: String, attribute: 'aria-label' }) ariaLabel: string | null = null;

	static styles = css`
		.btn {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			overflow: hidden;
			border-radius: var(--border-radius-8xl);
			border: none;
			cursor: pointer;
			white-space: nowrap;
			letter-spacing: var(--letter-spacing-base);
			text-decoration: none;
			transition:
				background 300ms ease-in-out,
				color 300ms ease-in-out,
				box-shadow 300ms ease-in-out,
				border-color 300ms ease-in-out;
		}

		.btn--outlined {
			border: var(--border-width-base) solid transparent;
		}

		/* Sizes */
		.btn--lg {
			gap: var(--soft-grid-8);
			padding: var(--soft-grid-12) var(--soft-grid-20);
			font: var(--typography-single-line-base-base);
		}
		.btn--lg.btn--has-icon {
			padding-inline-start: var(--soft-grid-16);
		}

		.btn--md {
			gap: var(--soft-grid-6);
			padding: var(--soft-grid-8) var(--soft-grid-16);
			font: var(--typography-single-line-subtle-emphasis);
		}
		.btn--md.btn--has-icon {
			padding-inline-start: var(--soft-grid-12);
		}

		.btn--sm {
			gap: var(--soft-grid-4);
			padding: var(--soft-grid-4) var(--soft-grid-12);
			font: var(--typography-single-line-label-base);
		}
		.btn--sm.btn--has-icon {
			padding-inline-start: var(--soft-grid-8);
		}

		/* Outlined: compensate vertical padding for border to preserve height */
		.btn--outlined.btn--lg {
			padding-block: calc(var(--soft-grid-12) - var(--border-width-base));
		}
		.btn--outlined.btn--md {
			padding-block: calc(var(--soft-grid-8) - var(--border-width-base));
		}
		.btn--outlined.btn--sm {
			padding-block: calc(var(--soft-grid-4) - var(--border-width-base));
		}

		/* ---- Filled ---- */
		.btn--filled.btn--accent {
			background: var(--semantic-color-surface-accent-summit);
			color: var(--semantic-color-text-on-accent-summit-base);
			box-shadow: var(--drop-shadow-under-accent-summit);
		}
		.btn--filled.btn--accent:not(:disabled):hover {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-base);
		}
		.btn--filled.btn--accent:not(:disabled):active {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-base);
			box-shadow: none;
		}

		.btn--filled.btn--gray {
			background: var(--semantic-color-surface-gray-summit);
			color: var(--semantic-color-text-on-gray-summit-base);
			box-shadow: var(--drop-shadow-under-gray-summit);
		}
		.btn--filled.btn--gray:not(:disabled):hover {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-base);
		}
		.btn--filled.btn--gray:not(:disabled):active {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-base);
			box-shadow: none;
		}

		/* ---- Tonal ---- */
		.btn--tonal.btn--accent {
			background: var(--semantic-color-surface-accent-terrace);
			color: var(--semantic-color-text-on-accent-terrace-base);
			box-shadow: var(--drop-shadow-under-accent-summit);
		}
		.btn--tonal.btn--accent:not(:disabled):hover {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-base);
		}
		.btn--tonal.btn--accent:not(:disabled):active {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-base);
			box-shadow: none;
		}

		.btn--tonal.btn--gray {
			background: var(--semantic-color-surface-gray-terrace);
			color: var(--semantic-color-text-on-gray-terrace-base);
			box-shadow: var(--drop-shadow-under-gray-summit);
		}
		.btn--tonal.btn--gray:not(:disabled):hover {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-base);
		}
		.btn--tonal.btn--gray:not(:disabled):active {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-base);
			box-shadow: none;
		}

		/* ---- Outlined ---- */
		.btn--outlined.btn--accent {
			background: transparent;
			border-color: var(--semantic-color-border-around-accent-aurora);
			color: var(--semantic-color-text-on-accent-terrace-base);
		}
		.btn--outlined.btn--accent:not(:disabled):hover {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-base);
			border-color: transparent;
			box-shadow: var(--drop-shadow-under-accent-summit);
		}
		.btn--outlined.btn--accent:not(:disabled):active {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-base);
			border-color: transparent;
			box-shadow: none;
		}

		.btn--outlined.btn--gray {
			background: transparent;
			border-color: var(--semantic-color-border-around-gray-aurora);
			color: var(--semantic-color-text-on-gray-terrace-base);
		}
		.btn--outlined.btn--gray:not(:disabled):hover {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-base);
			border-color: transparent;
			box-shadow: var(--drop-shadow-under-gray-summit);
		}
		.btn--outlined.btn--gray:not(:disabled):active {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-base);
			border-color: transparent;
			box-shadow: none;
		}

		/* ---- Ghost ---- */
		.btn--ghost.btn--accent {
			background: transparent;
			color: var(--semantic-color-text-on-accent-terrace-base);
		}
		.btn--ghost.btn--accent:not(:disabled):hover {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-base);
			box-shadow: var(--drop-shadow-under-accent-summit);
		}
		.btn--ghost.btn--accent:not(:disabled):active {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-base);
			box-shadow: none;
		}

		.btn--ghost.btn--gray {
			background: transparent;
			color: var(--semantic-color-text-on-gray-terrace-base);
		}
		.btn--ghost.btn--gray:not(:disabled):hover {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-base);
			box-shadow: var(--drop-shadow-under-gray-summit);
		}
		.btn--ghost.btn--gray:not(:disabled):active {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-base);
			box-shadow: none;
		}

		/* ---- Icon fill on hover (cross-shadow via CSS custom property) ---- */
		.btn:not(:disabled):hover gv-icon {
			--gv-icon-font-family: var(--font-family-icons-fill);
		}

		/* ---- Disabled ---- */
		.btn:disabled {
			opacity: 0.5;
		}
		.btn:disabled:hover {
			cursor: not-allowed;
		}
	`;

	render() {
		const hasIcon = Boolean(this.icon);
		return html`
			<button
				class=${classMap({
					btn: true,
					[`btn--${this.variant}`]: true,
					[`btn--${this.color}`]: true,
					[`btn--${this.size}`]: true,
					'btn--has-icon': hasIcon
				})}
				type=${this.type}
				?disabled=${this.disabled}
				aria-label=${this.ariaLabel ?? nothing}
			>
				${hasIcon ? html`<gv-icon unicode=${ifDefined(this.icon)}></gv-icon>` : nothing}
				${this.text}
			</button>
		`;
	}
}
