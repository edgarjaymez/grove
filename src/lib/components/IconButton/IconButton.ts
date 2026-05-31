import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '../Icon/Icon.js';
import { componentReset } from '../../styles/component-reset.js';

type IconButtonVariant = 'filled' | 'tonal' | 'outlined' | 'ghost';
type IconButtonColor = 'accent' | 'gray';
type IconButtonSize = 'lg' | 'md' | 'sm';

@customElement('gv-icon-button')
export class IconButton extends LitElement {
	@property({ type: String }) icon = '';
	@property({ type: String }) variant: IconButtonVariant = 'filled';
	@property({ type: String }) color: IconButtonColor = 'accent';
	@property({ type: String }) size: IconButtonSize = 'lg';
	@property({ type: Boolean, reflect: true }) disabled = false;
	@property({ type: String, attribute: 'aria-label' }) ariaLabel: string | null = null;

	static styles = [componentReset, css`
		.icon-btn {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			overflow: hidden;
			border-radius: var(--border-radius-8xl);
			border: none;
			cursor: pointer;
			transition:
				background 300ms ease-in-out,
				color 300ms ease-in-out,
				box-shadow 300ms ease-in-out,
				border-color 300ms ease-in-out;
		}

		.icon-btn--outlined {
			border: var(--border-width-base) solid transparent;
		}

		/* Sizes — font shorthand sets line-height context for Icon's 1lh sizing */
		.icon-btn--lg {
			padding: var(--soft-grid-12);
			font: var(--typography-single-line-base-base);
		}
		.icon-btn--md {
			padding: var(--soft-grid-8);
			font: var(--typography-single-line-subtle-emphasis);
		}
		.icon-btn--sm {
			padding: var(--soft-grid-4);
			font: var(--typography-single-line-label-base);
		}

		/* Outlined: compensate all-side padding for border to preserve dimensions */
		.icon-btn--outlined.icon-btn--lg {
			padding: calc(var(--soft-grid-12) - var(--border-width-base));
		}
		.icon-btn--outlined.icon-btn--md {
			padding: calc(var(--soft-grid-8) - var(--border-width-base));
		}
		.icon-btn--outlined.icon-btn--sm {
			padding: calc(var(--soft-grid-4) - var(--border-width-base));
		}

		/* ---- Filled ---- */
		.icon-btn--filled.icon-btn--accent {
			background: var(--semantic-color-surface-accent-summit);
			color: var(--semantic-color-text-on-accent-summit-base);
			box-shadow: var(--drop-shadow-under-accent-summit);
		}
		.icon-btn--filled.icon-btn--accent:not(:disabled):hover {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-base);
		}
		.icon-btn--filled.icon-btn--accent:not(:disabled):active {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-base);
			box-shadow: none;
		}

		.icon-btn--filled.icon-btn--gray {
			background: var(--semantic-color-surface-gray-summit);
			color: var(--semantic-color-text-on-gray-summit-base);
			box-shadow: var(--drop-shadow-under-gray-summit);
		}
		.icon-btn--filled.icon-btn--gray:not(:disabled):hover {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-base);
		}
		.icon-btn--filled.icon-btn--gray:not(:disabled):active {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-base);
			box-shadow: none;
		}

		/* ---- Tonal ---- */
		.icon-btn--tonal.icon-btn--accent {
			background: var(--semantic-color-surface-accent-terrace);
			color: var(--semantic-color-text-on-accent-terrace-base);
			box-shadow: var(--drop-shadow-under-accent-summit);
		}
		.icon-btn--tonal.icon-btn--accent:not(:disabled):hover {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-base);
		}
		.icon-btn--tonal.icon-btn--accent:not(:disabled):active {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-base);
			box-shadow: none;
		}

		.icon-btn--tonal.icon-btn--gray {
			background: var(--semantic-color-surface-gray-terrace);
			color: var(--semantic-color-text-on-gray-terrace-base);
			box-shadow: var(--drop-shadow-under-gray-summit);
		}
		.icon-btn--tonal.icon-btn--gray:not(:disabled):hover {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-base);
		}
		.icon-btn--tonal.icon-btn--gray:not(:disabled):active {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-base);
			box-shadow: none;
		}

		/* ---- Outlined ---- */
		.icon-btn--outlined.icon-btn--accent {
			background: transparent;
			border-color: var(--semantic-color-border-around-accent-aurora);
			color: var(--semantic-color-text-on-accent-terrace-base);
		}
		.icon-btn--outlined.icon-btn--accent:not(:disabled):hover {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-base);
			border-color: transparent;
			box-shadow: var(--drop-shadow-under-accent-summit);
		}
		.icon-btn--outlined.icon-btn--accent:not(:disabled):active {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-base);
			border-color: transparent;
			box-shadow: none;
		}

		.icon-btn--outlined.icon-btn--gray {
			background: transparent;
			border-color: var(--semantic-color-border-around-gray-aurora);
			color: var(--semantic-color-text-on-gray-terrace-base);
		}
		.icon-btn--outlined.icon-btn--gray:not(:disabled):hover {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-base);
			border-color: transparent;
			box-shadow: var(--drop-shadow-under-gray-summit);
		}
		.icon-btn--outlined.icon-btn--gray:not(:disabled):active {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-base);
			border-color: transparent;
			box-shadow: none;
		}

		/* ---- Ghost ---- */
		.icon-btn--ghost.icon-btn--accent {
			background: transparent;
			color: var(--semantic-color-text-on-accent-terrace-base);
		}
		.icon-btn--ghost.icon-btn--accent:not(:disabled):hover {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-base);
			box-shadow: var(--drop-shadow-under-accent-summit);
		}
		.icon-btn--ghost.icon-btn--accent:not(:disabled):active {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-base);
			box-shadow: none;
		}

		.icon-btn--ghost.icon-btn--gray {
			background: transparent;
			color: var(--semantic-color-text-on-gray-terrace-base);
		}
		.icon-btn--ghost.icon-btn--gray:not(:disabled):hover {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-base);
			box-shadow: var(--drop-shadow-under-gray-summit);
		}
		.icon-btn--ghost.icon-btn--gray:not(:disabled):active {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-base);
			box-shadow: none;
		}

		/* ---- Icon fill on hover (cross-shadow via CSS custom property) ---- */
		.icon-btn:not(:disabled):hover gv-icon {
			--gv-icon-font-family: var(--font-family-icons-fill);
		}

		/* ---- Disabled ---- */
		.icon-btn:disabled {
			opacity: 0.5;
		}
		.icon-btn:disabled:hover {
			cursor: not-allowed;
		}
	`];

	render() {
		return html`
			<button
				class=${classMap({
					'icon-btn': true,
					[`icon-btn--${this.variant}`]: true,
					[`icon-btn--${this.color}`]: true,
					[`icon-btn--${this.size}`]: true
				})}
				?disabled=${this.disabled}
				aria-disabled=${this.disabled}
				aria-label=${this.ariaLabel ?? nothing}
			>
				<gv-icon unicode=${this.icon}></gv-icon>
			</button>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'gv-icon-button': IconButton;
	}
}
