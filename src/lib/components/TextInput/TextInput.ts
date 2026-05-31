import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { componentReset } from '../../styles/component-reset.js';

type InputType = 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number';
type InputColor = 'brand' | 'gray';

@customElement('gv-text-input')
export class TextInput extends LitElement {
	@property({ type: String }) value = '';
	@property({ type: String }) color: InputColor = 'brand';
	@property({ type: Boolean, reflect: true }) error = false;
	@property({ type: Boolean, reflect: true }) disabled = false;
	@property({ type: String }) placeholder: string | undefined;
	@property({ type: String, attribute: 'input-id' }) inputId: string | undefined;
	@property({ type: String }) name: string | undefined;
	@property({ type: String }) type: InputType = 'text';
	@property({ type: String, attribute: 'aria-label' }) ariaLabel: string | null = null;
	@property({ type: String, attribute: 'aria-describedby' }) ariaDescribedby: string | null = null;

	static styles = [componentReset, css`
		:host {
			display: block;
		}

		.text-input {
			display: block;
			width: 100%;
			border: none;
			border-bottom: var(--border-width-heavy) solid transparent;
			border-radius: 0;
			padding: var(--soft-grid-8) var(--soft-grid-12);
			font: var(--typography-single-line-subtle-base);
			letter-spacing: var(--letter-spacing-base);
			outline: none;
			cursor: text;
			transition:
				background 300ms ease-in-out,
				border-color 300ms ease-in-out,
				color 300ms ease-in-out;
		}

		/* ---- brand ---- */
		.text-input--brand {
			background: var(--semantic-color-surface-brand-terrace);
			border-bottom-color: var(--semantic-color-border-around-brand-terrace);
			color: var(--semantic-color-text-on-brand-terrace-base);
		}
		.text-input--brand::placeholder {
			color: var(--semantic-color-text-on-brand-terrace-subtle);
		}
		.text-input--brand:not(:disabled):hover {
			border-bottom-color: var(--semantic-color-border-around-brand-summit);
		}
		.text-input--brand:not(:disabled):focus,
		.text-input--brand:not(:disabled):active {
			background: var(--semantic-color-surface-brand-summit);
			border-bottom-color: var(--semantic-color-border-around-brand-summit);
			color: var(--semantic-color-text-on-brand-summit-base);
		}
		.text-input--brand:not(:disabled):focus::placeholder,
		.text-input--brand:not(:disabled):active::placeholder {
			color: var(--semantic-color-text-on-brand-summit-subtle);
		}
		.text-input--brand:disabled {
			background: var(--semantic-color-surface-gray-terrace);
			border-bottom-color: var(--semantic-color-border-around-gray-terrace);
			color: var(--semantic-color-text-on-gray-path-subtle);
			cursor: not-allowed;
		}
		.text-input--brand:disabled::placeholder {
			color: var(--semantic-color-text-on-gray-path-subtle);
		}

		/* ---- gray ---- */
		.text-input--gray {
			background: var(--semantic-color-surface-ground);
			border-bottom-color: var(--semantic-color-border-around-ground);
			color: var(--semantic-color-text-on-gray-terrace-base);
		}
		.text-input--gray::placeholder {
			color: var(--semantic-color-text-on-gray-terrace-subtle);
		}
		.text-input--gray:not(:disabled):hover {
			background: var(--semantic-color-surface-gray-terrace);
			border-bottom-color: var(--semantic-color-border-around-gray-summit);
		}
		.text-input--gray:not(:disabled):focus,
		.text-input--gray:not(:disabled):active {
			background: var(--semantic-color-surface-gray-summit);
			border-bottom-color: var(--semantic-color-border-around-gray-summit);
			color: var(--semantic-color-text-on-gray-summit-base);
		}
		.text-input--gray:not(:disabled):focus::placeholder,
		.text-input--gray:not(:disabled):active::placeholder {
			color: var(--semantic-color-text-on-gray-summit-subtle);
		}
		.text-input--gray:disabled {
			background: var(--semantic-color-surface-gray-path);
			border-bottom-color: var(--semantic-color-border-around-gray-path);
			color: var(--semantic-color-text-on-gray-path-subtle);
			cursor: not-allowed;
		}
		.text-input--gray:disabled::placeholder {
			color: var(--semantic-color-text-on-gray-path-subtle);
		}

		/* ---- error (overrides color track) ---- */
		.text-input--error {
			background: var(--semantic-color-surface-danger-terrace);
			border-bottom-color: var(--semantic-color-border-around-danger-terrace);
			color: var(--semantic-color-text-on-danger-terrace-base);
		}
		.text-input--error::placeholder {
			color: var(--semantic-color-text-on-danger-terrace-subtle);
		}
		.text-input--error:not(:disabled):hover {
			border-bottom-color: var(--semantic-color-border-around-danger-summit);
		}
		.text-input--error:not(:disabled):focus,
		.text-input--error:not(:disabled):active {
			background: var(--semantic-color-surface-danger-terrace);
			border-bottom-color: var(--semantic-color-border-around-danger-summit);
		}
	`];

	private _handleInput(e: Event) {
		e.stopPropagation();
		this.value = (e.target as HTMLInputElement).value;
		this.dispatchEvent(
			new CustomEvent('input', { detail: this.value, bubbles: true, composed: true })
		);
	}

	private _handleChange(e: Event) {
		e.stopPropagation();
		this.value = (e.target as HTMLInputElement).value;
		this.dispatchEvent(
			new CustomEvent('change', { detail: this.value, bubbles: true, composed: true })
		);
	}

	render() {
		return html`
			<input
				class=${classMap({
					'text-input': true,
					[`text-input--${this.color}`]: true,
					'text-input--filled': !!this.value,
					'text-input--error': this.error
				})}
				.value=${this.value}
				?disabled=${this.disabled}
				placeholder=${ifDefined(this.placeholder)}
				id=${ifDefined(this.inputId)}
				name=${ifDefined(this.name)}
				type=${this.type}
				aria-invalid=${ifDefined(this.error ? 'true' : undefined)}
				aria-label=${this.ariaLabel ?? nothing}
				aria-describedby=${this.ariaDescribedby ?? nothing}
				@input=${this._handleInput}
				@change=${this._handleChange}
			/>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'gv-text-input': TextInput;
	}
}
