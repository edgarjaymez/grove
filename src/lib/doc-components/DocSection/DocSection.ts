import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

type SectionType = 'color' | 'shadows' | 'typography' | 'generic';

@customElement('gv-doc-section')
export class DocSection extends LitElement {
	@property({ type: String }) title = '';
	@property({ type: String }) body = '';
	@property({ type: String }) type: SectionType = 'generic';

	static styles = css`
		:host {
			display: block;
			padding-block: var(--soft-grid-64);
			padding-inline: var(--grid-landing-margin);
			border-top: var(--border-width-hairline) solid var(--semantic-color-divider-on-ground);
		}
		:host(:first-of-type) {
			border-top: none;
		}

		hr {
			display: none;
		}

		.doc-section-inner {
			display: grid;
			grid-template-columns: 1fr;
			gap: var(--soft-grid-32);
		}

		.doc-section-header {
			background-color: var(--semantic-color-surface-brand-summit);
			border-radius: var(--border-radius-md);
			box-shadow: var(--drop-shadow-brand-summit);
			padding: var(--soft-grid-28);
			display: flex;
			flex-direction: column;
			gap: var(--soft-grid-8);
			align-self: start;
		}

		h2 {
			font: var(--typography-single-line-title-emphasis);
			color: var(--semantic-color-text-on-brand-summit-base);
		}

		.doc-section-body {
			color: var(--semantic-color-text-on-ground-base);
			min-width: 0;
		}

		/* --- injected markdown content lives inside shadow DOM — no :global() needed --- */

		.doc-section-body h3 {
			font: var(--typography-single-line-heading-emphasis);
			color: var(--semantic-color-text-on-ground-emphasis);
			margin-block: var(--soft-grid-32) var(--soft-grid-12);
		}

		.doc-section-body h4 {
			font: var(--typography-single-line-subheading-base);
			color: var(--semantic-color-text-on-ground-base);
			margin-block: var(--soft-grid-24) var(--soft-grid-8);
		}

		.doc-section-body p {
			font: var(--typography-multi-line-base-base);
			margin-bottom: var(--soft-grid-16);
			max-width: 68ch;
		}

		.doc-section-body blockquote {
			border-left: var(--border-width-thick) solid var(--semantic-color-border-around-accent-summit);
			padding-block: var(--soft-grid-4);
			padding-left: var(--soft-grid-20);
			margin-block: var(--soft-grid-20);
			margin-left: 0;
		}

		.doc-section-body blockquote p {
			font: var(--typography-multi-line-quote-base);
			font-style: italic;
			color: var(--semantic-color-text-on-ground-base);
			margin-bottom: 0;
		}

		.doc-section-body ul,
		.doc-section-body ol {
			padding-left: var(--soft-grid-24);
			margin-bottom: var(--soft-grid-16);
		}

		.doc-section-body li {
			font: var(--typography-multi-line-base-base);
			margin-bottom: var(--soft-grid-4);
		}

		.doc-section-body pre {
			background-color: var(--semantic-color-surface-gray-terrace);
			border: var(--border-width-base) solid var(--semantic-color-border-around-gray-terrace);
			border-radius: var(--border-radius-base);
			box-shadow: var(--drop-shadow-gray-terrace);
			padding: var(--soft-grid-20) var(--soft-grid-24);
			overflow-x: auto;
			margin-bottom: var(--soft-grid-20);
		}

		.doc-section-body pre code {
			font-family: monospace;
			font-size: var(--font-size-sm);
			color: var(--semantic-color-text-on-gray-terrace-base);
			background: none;
			border: none;
			padding: 0;
			border-radius: 0;
		}

		.doc-section-body code {
			font-family: monospace;
			font-size: var(--font-size-sm);
			background-color: var(--semantic-color-surface-brand-terrace);
			border: var(--border-width-base) solid var(--semantic-color-border-around-brand-terrace);
			border-radius: var(--border-radius-sm);
			color: var(--semantic-color-text-on-brand-terrace-base);
			padding: 0.1em 0.35em;
		}

		.doc-section-body em {
			font-style: italic;
		}

		.doc-section-body a {
			color: var(--semantic-color-text-on-ground-unvisited-link);
			text-underline-offset: 0.2em;
		}

		.doc-section-body a:visited {
			color: var(--semantic-color-text-on-ground-visited-link);
		}

		.doc-section-body strong {
			font-weight: var(--font-weight-semi-bold);
			color: var(--semantic-color-text-on-ground-base);
		}

		.doc-section-body .doc-rule {
			display: block;
			border: none;
			height: var(--soft-grid-8);
			background-color: var(--semantic-color-surface-accent-terrace);
			border-radius: var(--border-radius-sm);
			margin-block: var(--soft-grid-24);
		}

		.doc-section-body .table-wrap {
			background-color: var(--semantic-color-surface-gray-terrace);
			border: var(--border-width-base) solid var(--semantic-color-border-around-gray-terrace);
			border-radius: var(--border-radius-md);
			box-shadow: var(--drop-shadow-gray-terrace);
			overflow: hidden;
			margin-bottom: var(--soft-grid-24);
		}

		.doc-section-body table {
			width: 100%;
			border-collapse: collapse;
			font: var(--typography-single-line-label-base);
		}

		.doc-section-body thead tr {
			background-color: var(--semantic-color-surface-gray-path);
			border-bottom: var(--border-width-hairline) solid
				var(--semantic-color-divider-on-gray-terrace);
		}

		.doc-section-body th {
			text-align: left;
			padding: var(--soft-grid-12) var(--soft-grid-16);
			color: var(--semantic-color-text-on-gray-path-base);
			font-weight: var(--font-weight-semi-bold);
			letter-spacing: var(--letter-spacing-loose);
			text-transform: uppercase;
			font-size: var(--font-size-xs);
			white-space: nowrap;
		}

		.doc-section-body td {
			padding: var(--soft-grid-12) var(--soft-grid-16);
			border-bottom: var(--border-width-hairline) solid
				var(--semantic-color-divider-on-gray-terrace);
			vertical-align: middle;
			color: var(--semantic-color-text-on-gray-terrace-base);
		}

		.doc-section-body tr:last-child td {
			border-bottom: none;
		}

		.doc-section-body .swatch {
			display: inline-block;
			width: 1rem;
			height: 1rem;
			border-radius: var(--border-radius-sm);
			vertical-align: middle;
			border: var(--border-width-base) solid var(--semantic-color-border-around-gray-terrace);
			flex-shrink: 0;
		}

		.doc-section-body .shadow-preview {
			display: inline-block;
			width: 2rem;
			height: 2rem;
			border-radius: var(--border-radius-base);
			background-color: var(--semantic-color-surface-ground);
			vertical-align: middle;
		}

		.doc-section-body .type-preview {
			display: inline-block;
			color: var(--semantic-color-text-on-ground-base);
			line-height: 1;
			vertical-align: middle;
		}

		@media (min-width: 1024px) {
			:host {
				padding-block: var(--soft-grid-80);
			}

			.doc-section-inner {
				grid-template-columns: 360px 1fr;
				gap: var(--soft-grid-64);
			}

			.doc-section-header {
				position: sticky;
				top: var(--soft-grid-24);
			}
		}
	`;

	private get _sectionId(): string {
		return this.title
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^a-z0-9-]/g, '');
	}

	private _escHtml(s: string): string {
		return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}

	private _inline(s: string): string {
		return this._escHtml(s)
			.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
			.replace(/\b_(.+?)_\b/g, '<em>$1</em>')
			.replace(/`([^`]+)`/g, '<code>$1</code>')
			.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
	}

	private _previewFor(token: string, sectionType: SectionType): string {
		if (
			sectionType === 'color' &&
			(token.startsWith('--color-') || token.startsWith('--semantic-color-'))
		) {
			return `<span class="swatch" style="background:var(${token})" aria-hidden="true"></span>`;
		}
		if (sectionType === 'shadows' && token.startsWith('--drop-shadow-')) {
			return `<span class="shadow-preview" style="box-shadow:var(${token})" aria-hidden="true"></span>`;
		}
		if (sectionType === 'typography' && token.startsWith('--typography-')) {
			return `<span class="type-preview" style="font:var(${token})">Aa</span>`;
		}
		return '';
	}

	private _enrichCell(cellHtml: string, sectionType: SectionType): string {
		const tokens = cellHtml.match(/--[\w-]+/g);
		if (!tokens) return cellHtml;
		const previews = tokens
			.map((t) => this._previewFor(t, sectionType))
			.filter(Boolean)
			.join('');
		return previews ? previews + ' ' + cellHtml : cellHtml;
	}

	private _parseTable(lines: string[], sectionType: SectionType): string {
		const rows = lines.filter((l) => l.trim().startsWith('|') && !l.match(/^\|[-| :]+\|/));
		if (rows.length === 0) return '';

		const [headerRow, ...bodyRows] = rows;
		const headers = headerRow
			.split('|')
			.slice(1, -1)
			.map((h) => `<th>${this._inline(h.trim())}</th>`)
			.join('');

		const tbody = bodyRows
			.map((row) => {
				const cells = row
					.split('|')
					.slice(1, -1)
					.map((c) => {
						const cellHtml = this._inline(c.trim());
						return `<td>${this._enrichCell(cellHtml, sectionType)}</td>`;
					})
					.join('');
				return `<tr>${cells}</tr>`;
			})
			.join('');

		return `<div class="table-wrap"><table><thead><tr>${headers}</tr></thead><tbody>${tbody}</tbody></table></div>`;
	}

	private _parseMarkdown(md: string, sectionType: SectionType): string {
		const blocks = md.split(/\n\n+/);
		const parts: string[] = [];

		let i = 0;
		while (i < blocks.length) {
			const block = blocks[i].trim();
			if (!block) {
				i++;
				continue;
			}

			if (block.startsWith('```')) {
				const code = block.replace(/^```[^\n]*\n?/, '').replace(/```\s*$/, '');
				parts.push(`<pre><code>${this._escHtml(code)}</code></pre>`);
				i++;
				continue;
			}

			if (block.startsWith('### ')) {
				parts.push(`<h3>${this._inline(block.slice(4).trim())}</h3>`);
				i++;
				continue;
			}

			if (block.startsWith('#### ')) {
				parts.push(`<h4>${this._inline(block.slice(5).trim())}</h4>`);
				i++;
				continue;
			}

			if (block.startsWith('> ')) {
				const text = block.replace(/^> /gm, '');
				parts.push(`<blockquote><p>${this._inline(text)}</p></blockquote>`);
				i++;
				continue;
			}

			if (/^---+$/.test(block)) {
				parts.push('<hr class="doc-rule" />');
				i++;
				continue;
			}

			if (block.includes('|')) {
				parts.push(this._parseTable(block.split('\n'), sectionType));
				i++;
				continue;
			}

			if (block.match(/^[-*] /m)) {
				const items = block
					.split('\n')
					.filter((l) => l.match(/^[-*] /))
					.map((l) => `<li>${this._inline(l.replace(/^[-*] /, '').trim())}</li>`)
					.join('');
				parts.push(`<ul>${items}</ul>`);
				i++;
				continue;
			}

			if (block.match(/^\d+\. /m)) {
				const items = block
					.split('\n')
					.filter((l) => l.match(/^\d+\. /))
					.map((l) => `<li>${this._inline(l.replace(/^\d+\. /, '').trim())}</li>`)
					.join('');
				parts.push(`<ol>${items}</ol>`);
				i++;
				continue;
			}

			const paraLines = block
				.split('\n')
				.map((l) => this._inline(l))
				.join(' ');
			parts.push(`<p>${paraLines}</p>`);
			i++;
		}

		return parts.join('\n');
	}

	render() {
		const renderedBody = this._parseMarkdown(this.body, this.type);
		return html`
			<section id=${this._sectionId} class="doc-section">
				<div class="doc-section-inner">
					<header class="doc-section-header">
						<h2>${this.title}</h2>
					</header>
					<div class="doc-section-body">${unsafeHTML(renderedBody)}</div>
				</div>
			</section>
		`;
	}
}
