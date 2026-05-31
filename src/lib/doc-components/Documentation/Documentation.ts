import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import raw from '../../../DESIGN_SYSTEM.md?raw';
import '../DocSection/DocSection.ts';

type SectionType = 'color' | 'shadows' | 'typography' | 'generic';

const typeMap: Record<string, SectionType> = {
	'Color System': 'color',
	Typography: 'typography',
	Shadows: 'shadows'
};

@customElement('gv-documentation')
export class Documentation extends LitElement {
	static styles = css`
		:host {
			display: block;
		}

		.documentation {
			display: flex;
			flex-direction: column;
		}
	`;

	private get _sections(): { title: string; body: string }[] {
		return raw
			.split(/\n(?=## )/)
			.filter((block) => block.trimStart().startsWith('## '))
			.map((block) => {
				const newline = block.indexOf('\n');
				const heading = newline === -1 ? block : block.slice(0, newline);
				const body = newline === -1 ? '' : block.slice(newline + 1).trim();
				return {
					title: heading.replace(/^## /, '').trim(),
					body
				};
			});
	}

	render() {
		return html`
			<div class="documentation">
				${this._sections.map(
					({ title, body }) => html`
						<gv-doc-section
							title=${title}
							.body=${body}
							type=${typeMap[title] ?? 'generic'}
						></gv-doc-section>
					`
				)}
			</div>
		`;
	}
}
