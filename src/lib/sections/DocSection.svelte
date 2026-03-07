<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	type SectionType = 'color' | 'shadows' | 'typography' | 'generic';

	interface IDocSection {
		title: string;
		summary?: string;
		body: string;
		type?: SectionType;
		class?: ClassValue;
	}

	let { title, summary, body, type = 'generic', class: className }: IDocSection = $props();

	const sectionId = $derived(
		title
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^a-z0-9-]/g, '')
	);

	// ── Markdown parser ──────────────────────────────────────────────────────────

	/** Escape HTML entities in a string */
	function escHtml(s: string): string {
		return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}

	/** Inline markdown: **bold**, _italic_, `code`, [link](url) */
	function inline(s: string): string {
		return escHtml(s)
			.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
			.replace(/\b_(.+?)_\b/g, '<em>$1</em>')
			.replace(/`([^`]+)`/g, '<code>$1</code>')
			.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
	}

	/** Detect CSS custom property tokens in a string */
	const TOKEN_RE = /--[\w-]+/g;

	/** Build a live preview element for a token string */
	function previewFor(token: string, sectionType: SectionType): string {
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

	/** Inject live previews into a table cell's HTML */
	function enrichCell(cellHtml: string, sectionType: SectionType): string {
		const tokens = cellHtml.match(TOKEN_RE);
		if (!tokens) return cellHtml;
		const previews = tokens
			.map((t) => previewFor(t, sectionType))
			.filter(Boolean)
			.join('');
		return previews ? previews + ' ' + cellHtml : cellHtml;
	}

	/** Parse a markdown table block into an HTML table string */
	function parseTable(lines: string[], sectionType: SectionType): string {
		const rows = lines.filter((l) => l.trim().startsWith('|') && !l.match(/^\|[-| :]+\|/));
		if (rows.length === 0) return '';

		const [headerRow, ...bodyRows] = rows;
		const headers = headerRow
			.split('|')
			.slice(1, -1)
			.map((h) => `<th>${inline(h.trim())}</th>`)
			.join('');

		const tbody = bodyRows
			.map((row) => {
				const cells = row
					.split('|')
					.slice(1, -1)
					.map((c) => {
						const cellHtml = inline(c.trim());
						return `<td>${enrichCell(cellHtml, sectionType)}</td>`;
					})
					.join('');
				return `<tr>${cells}</tr>`;
			})
			.join('');

		return `<div class="table-wrap"><table><thead><tr>${headers}</tr></thead><tbody>${tbody}</tbody></table></div>`;
	}

	/** Parse markdown body into HTML */
	function parseMarkdown(md: string, sectionType: SectionType): string {
		const blocks = md.split(/\n\n+/);
		const parts: string[] = [];

		let i = 0;
		while (i < blocks.length) {
			const block = blocks[i].trim();
			if (!block) {
				i++;
				continue;
			}

			// Code fence
			if (block.startsWith('```')) {
				const code = block.replace(/^```[^\n]*\n?/, '').replace(/```\s*$/, '');
				parts.push(`<pre><code>${escHtml(code)}</code></pre>`);
				i++;
				continue;
			}

			// ### heading
			if (block.startsWith('### ')) {
				parts.push(`<h3>${inline(block.slice(4).trim())}</h3>`);
				i++;
				continue;
			}

			// #### heading
			if (block.startsWith('#### ')) {
				parts.push(`<h4>${inline(block.slice(5).trim())}</h4>`);
				i++;
				continue;
			}

			// Blockquote
			if (block.startsWith('> ')) {
				const text = block.replace(/^> /gm, '');
				parts.push(`<blockquote><p>${inline(text)}</p></blockquote>`);
				i++;
				continue;
			}

			// Horizontal rule
			if (/^---+$/.test(block)) {
				parts.push('<hr class="doc-rule" />');
				i++;
				continue;
			}

			// Table (collect consecutive table-like lines)
			if (block.includes('|')) {
				const tableLines = block.split('\n');
				parts.push(parseTable(tableLines, sectionType));
				i++;
				continue;
			}

			// Unordered list
			if (block.match(/^[-*] /m)) {
				const items = block
					.split('\n')
					.filter((l) => l.match(/^[-*] /))
					.map((l) => `<li>${inline(l.replace(/^[-*] /, '').trim())}</li>`)
					.join('');
				parts.push(`<ul>${items}</ul>`);
				i++;
				continue;
			}

			// Numbered list
			if (block.match(/^\d+\. /m)) {
				const items = block
					.split('\n')
					.filter((l) => l.match(/^\d+\. /))
					.map((l) => `<li>${inline(l.replace(/^\d+\. /, '').trim())}</li>`)
					.join('');
				parts.push(`<ol>${items}</ol>`);
				i++;
				continue;
			}

			// Paragraph
			const paraLines = block
				.split('\n')
				.map((l) => inline(l))
				.join(' ');
			parts.push(`<p>${paraLines}</p>`);
			i++;
		}

		return parts.join('\n');
	}

	const renderedBody = $derived(parseMarkdown(body, type));
</script>

<section class={['doc-section', className]}>
	<div class="doc-section-inner">
		<header class="doc-section-header">
			{#if type !== 'generic'}
				<span class="section-tag">{type}</span>
			{/if}
			<h2>{title}</h2>
			<!-- <p class="section-summary">{summary ?? 'A comprehensive overview of this design system section and how to apply its tokens and patterns.'}</p> -->
		</header>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<div class="doc-section-body">{@html renderedBody}</div>
	</div>
</section>

<style>
	:global(hr) {
		display: none;
	}

	.doc-section {
		padding-block: var(--soft-grid-64);
		padding-inline: var(--grid-landing-margin);
		border-top: var(--border-width-hairline) solid var(--semantic-color-divider-on-ground);

		&:first-of-type {
			border-top: none;
		}
	}

	.doc-section-inner {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--soft-grid-32);
	}

	.doc-section-header {
		background-color: var(--semantic-color-surface-brand-summit);
		/* border: var(--border-width-base) solid var(--semantic-color-border-around-brand-summit); */
		border-radius: var(--border-radius-md);
		box-shadow: var(--drop-shadow-brand-summit);
		padding: var(--soft-grid-28);
		display: flex;
		flex-direction: column;
		gap: var(--soft-grid-8);
		align-self: start;
	}

	.section-tag {
		font: var(--typography-single-line-label-emphasis);
		letter-spacing: var(--letter-spacing-loose);
		text-transform: uppercase;
		color: var(--semantic-color-text-on-brand-terrace-subtle);
	}

	h2 {
		font: var(--typography-single-line-title-emphasis);
		color: var(--semantic-color-text-on-brand-summit-base);
	}

	.section-summary {
		font: var(--typography-multi-line-subtle-base);
		color: var(--semantic-color-text-on-brand-summit-subtle);
		margin: 0;
	}

	.doc-section-body {
		color: var(--semantic-color-text-on-ground-base);
		min-width: 0;

		:global(h3) {
			font: var(--typography-single-line-heading-emphasis);
			color: var(--semantic-color-text-on-ground-emphasis);
			margin-block: var(--soft-grid-32) var(--soft-grid-12);
		}

		:global(h4) {
			font: var(--typography-single-line-subheading-base);
			color: var(--semantic-color-text-on-ground-base);
			margin-block: var(--soft-grid-24) var(--soft-grid-8);
		}

		:global(p) {
			font: var(--typography-multi-line-base-base);
			margin-bottom: var(--soft-grid-16);
			max-width: 68ch;
		}

		:global(blockquote) {
			border-left: var(--border-width-thick) solid var(--semantic-color-border-around-accent-summit);
			padding-block: var(--soft-grid-4);
			padding-left: var(--soft-grid-20);
			margin-block: var(--soft-grid-20);
			margin-left: 0;

			:global(p) {
				font: var(--typography-multi-line-quote-base);
				font-style: italic;
				color: var(--semantic-color-text-on-ground-base);
				margin-bottom: 0;
			}
		}

		:global(ul),
		:global(ol) {
			padding-left: var(--soft-grid-24);
			margin-bottom: var(--soft-grid-16);

			:global(li) {
				font: var(--typography-multi-line-base-base);
				margin-bottom: var(--soft-grid-4);
			}
		}

		:global(pre) {
			background-color: var(--semantic-color-surface-gray-terrace);
			border: var(--border-width-base) solid var(--semantic-color-border-around-gray-terrace);
			border-radius: var(--border-radius-base);
			box-shadow: var(--drop-shadow-gray-terrace);
			padding: var(--soft-grid-20) var(--soft-grid-24);
			overflow-x: auto;
			margin-bottom: var(--soft-grid-20);

			:global(code) {
				font-family: monospace;
				font-size: var(--font-size-sm);
				color: var(--semantic-color-text-on-gray-terrace-base);
				background: none;
				border: none;
				padding: 0;
				border-radius: 0;
			}
		}

		:global(code) {
			font-family: monospace;
			font-size: var(--font-size-sm);
			background-color: var(--semantic-color-surface-brand-terrace);
			border: var(--border-width-base) solid var(--semantic-color-border-around-brand-terrace);
			border-radius: var(--border-radius-sm);
			color: var(--semantic-color-text-on-brand-terrace-base);
			padding: 0.1em 0.35em;
		}

		:global(em) {
			font-style: italic;
		}

		:global(a) {
			color: var(--semantic-color-text-on-ground-unvisited-link);
			text-underline-offset: 0.2em;

			&:visited {
				color: var(--semantic-color-text-on-ground-visited-link);
			}
		}

		:global(strong) {
			font-weight: var(--font-weight-semi-bold);
			color: var(--semantic-color-text-on-ground-base);
		}

		:global(.doc-rule) {
			border: none;
			height: var(--soft-grid-8);
			background-color: var(--semantic-color-surface-accent-terrace);
			border-radius: var(--border-radius-sm);
			margin-block: var(--soft-grid-24);
		}

		:global(.table-wrap) {
			background-color: var(--semantic-color-surface-gray-terrace);
			border: var(--border-width-base) solid var(--semantic-color-border-around-gray-terrace);
			border-radius: var(--border-radius-md);
			box-shadow: var(--drop-shadow-gray-terrace);
			overflow: hidden;
			margin-bottom: var(--soft-grid-24);
		}

		:global(table) {
			width: 100%;
			border-collapse: collapse;
			font: var(--typography-single-line-label-base);

			:global(thead tr) {
				background-color: var(--semantic-color-surface-gray-path);
				border-bottom: var(--border-width-hairline) solid
					var(--semantic-color-divider-on-gray-terrace);
			}

			:global(th) {
				text-align: left;
				padding: var(--soft-grid-12) var(--soft-grid-16);
				color: var(--semantic-color-text-on-gray-path-base);
				font-weight: var(--font-weight-semi-bold);
				letter-spacing: var(--letter-spacing-loose);
				text-transform: uppercase;
				font-size: var(--font-size-xs);
				white-space: nowrap;
			}

			:global(td) {
				padding: var(--soft-grid-12) var(--soft-grid-16);
				border-bottom: var(--border-width-hairline) solid
					var(--semantic-color-divider-on-gray-terrace);
				vertical-align: middle;
				color: var(--semantic-color-text-on-gray-terrace-base);
			}

			:global(tr:last-child td) {
				border-bottom: none;
			}
		}

		/* Live previews */
		:global(.swatch) {
			display: inline-block;
			width: 1rem;
			height: 1rem;
			border-radius: var(--border-radius-sm);
			vertical-align: middle;
			border: var(--border-width-base) solid var(--semantic-color-border-around-gray-terrace);
			flex-shrink: 0;
		}

		:global(.shadow-preview) {
			display: inline-block;
			width: 2rem;
			height: 2rem;
			border-radius: var(--border-radius-base);
			background-color: var(--semantic-color-surface-ground);
			vertical-align: middle;
		}

		:global(.type-preview) {
			display: inline-block;
			color: var(--semantic-color-text-on-ground-base);
			line-height: 1;
			vertical-align: middle;
		}
	}

	@media (width >= 1024px) {
		.doc-section {
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
</style>
