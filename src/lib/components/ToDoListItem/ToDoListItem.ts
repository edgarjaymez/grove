import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { componentReset } from '../../styles/component-reset.js';
import '../Checkbox/Checkbox.js';

@customElement('gv-todo-list-item')
export class ToDoListItem extends LitElement {
	@property({ type: String }) title = 'Task';
	@property({ type: String }) category = 'Category';
	@property({ type: Boolean, attribute: 'is-done', reflect: true }) isDone = false;

	static styles = [
		componentReset,
		css`
			:host {
				display: block;
			}

			.item {
				display: flex;
				flex-direction: row;
				gap: var(--soft-grid-8);
				align-items: flex-start;
				cursor: pointer;
			}

			.labels {
				display: flex;
				flex-direction: column;
				gap: var(--soft-grid-4);
				align-items: flex-start;
				justify-content: center;
				min-width: 0;
				flex: 1 0 0;
			}

			.title {
				font: var(--typography-single-line-base-base);
				letter-spacing: var(--letter-spacing-base);
				color: var(--semantic-color-text-on-ground-base);
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				width: 100%;
			}

			.category {
				font: var(--typography-single-line-subtle-base);
				letter-spacing: var(--letter-spacing-base);
				color: var(--semantic-color-text-on-ground-subtle);
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				width: 100%;
			}

			.title--done {
				text-decoration: line-through;
			}

			.category--done {
				text-decoration: line-through;
			}
		`
	];

	private _onCheckboxChange(e: CustomEvent<boolean>) {
		this.isDone = e.detail;
		this.dispatchEvent(
			new CustomEvent('change', { detail: this.isDone, bubbles: true, composed: true })
		);
	}

	private _handleItemClick(e: MouseEvent) {
		const checkbox = this.shadowRoot?.querySelector('gv-checkbox');
		if (checkbox && e.composedPath().includes(checkbox)) return;
		this.isDone = !this.isDone;
		this.dispatchEvent(
			new CustomEvent('change', { detail: this.isDone, bubbles: true, composed: true })
		);
	}

	render() {
		return html`
			<div class="item" @click=${this._handleItemClick}>
				<gv-checkbox ?checked=${this.isDone} @change=${this._onCheckboxChange}></gv-checkbox>
				<div class="labels">
					<p class=${classMap({ title: true, 'title--done': this.isDone })}>${this.title}</p>
					<p class=${classMap({ category: true, 'category--done': this.isDone })}>
						${this.category}
					</p>
				</div>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'gv-todo-list-item': ToDoListItem;
	}
}
