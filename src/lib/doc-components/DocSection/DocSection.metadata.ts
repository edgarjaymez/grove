export const DocSectionMetadata = {
	component: {
		name: 'DocSection',
		category: 'organisms',
		description:
			'Documentation page section that renders a sticky titled header alongside markdown-formatted body content. Used to structure design system documentation pages with consistent layout, typography, and token preview tables.',
		type: 'container',
		path: 'src/lib/doc-components/DocSection/DocSection.ts',
		version: '1.0.0',
		created: '2026/05/30',
		modified: '2026/05/30'
	},

	usage: {
		useCases: [
			'design-system-documentation-page',
			'token-reference-section',
			'component-usage-guidelines',
			'pattern-or-principle-writeup'
		],

		requiredProps: ['title', 'body'],

		commonPatterns: [
			{
				name: 'generic-prose-section',
				description: 'A general documentation section with markdown prose — no token previews',
				composition: `<gv-doc-section title="Overview" body={markdownString} type="generic"></gv-doc-section>`
			},
			{
				name: 'color-token-table',
				description:
					'Renders color swatches inline in table cells that reference --color-* or --semantic-color-* tokens',
				composition: `<gv-doc-section title="Color System" body={colorMarkdown} type="color"></gv-doc-section>`
			},
			{
				name: 'shadow-token-table',
				description: 'Renders box-shadow previews inline for --drop-shadow-* tokens in tables',
				composition: `<gv-doc-section title="Elevation & Shadows" body={shadowMarkdown} type="shadows"></gv-doc-section>`
			},
			{
				name: 'typography-token-table',
				description:
					'Renders live "Aa" type previews inline for --typography-* tokens in tables',
				composition: `<gv-doc-section title="Typography" body={typographyMarkdown} type="typography"></gv-doc-section>`
			}
		],

		antiPatterns: [
			{
				scenario: 'Passing raw HTML as the body prop',
				reason: 'The body prop expects markdown — raw HTML will be escaped and rendered as plain text',
				alternative: 'Always pass well-formed markdown strings to the body prop'
			},
			{
				scenario: 'Using type="color" for non-token tables',
				reason: 'The type prop activates token preview injection in table cells — mismatching it produces unexpected swatch/preview elements',
				alternative: 'Use type="generic" unless the table contains the matching token prefix (--color-*, --drop-shadow-*, --typography-*)'
			},
			{
				scenario: 'Nesting gv-doc-section inside another gv-doc-section',
				reason: 'The component is designed as a top-level page section with its own layout grid and divider border',
				alternative: 'Use h3/h4 headings in the body markdown to create sub-sections instead'
			}
		]
	},

	composition: {
		slots: null,
		nestedComponents: [],
		commonPartners: [],
		parentConstraints: [
			'Expects a parent with background-color set to var(--semantic-color-surface-ground) so the divider borders and text colors render correctly',
			'Multiple consecutive gv-doc-section elements display a hairline top border between them; :first-of-type suppresses the first border'
		]
	},

	behavior: {
		states: ['DEFAULT'],

		interactions: {
			scroll:
				'On viewports ≥1024px the header column becomes position:sticky, staying visible as the user scrolls through long body content'
		},

		responsive: {
			mobile: 'Single-column stacked layout — header above body',
			desktop: '1024px+ two-column grid: 360px sticky header | fluid body'
		},

		markdownSupport: {
			headings: 'h3 (###) and h4 (####)',
			inlineFormatting: '**bold**, _italic_, `code`, [link](url)',
			blocks: 'paragraphs, blockquotes (>), fenced code blocks (```), unordered lists (- *), ordered lists (1.)',
			tables:
				'Markdown pipe tables; cells containing token names get visual previews injected based on the type prop',
			dividers: '--- renders as a styled accent-surface rule (not a plain <hr>)'
		}
	},

	variants: {
		type: {
			options: ['generic', 'color', 'shadows', 'typography'],
			default: 'generic',
			purpose: {
				generic: 'No token preview injection — use for prose, component docs, or mixed content.',
				color: 'Injects color swatches next to --color-* and --semantic-color-* tokens in table cells.',
				shadows: 'Injects box-shadow preview boxes next to --drop-shadow-* tokens in table cells.',
				typography:
					'Injects live "Aa" type samples next to --typography-* tokens in table cells.'
			}
		}
	},

	accessibility: {
		role: 'region',
		keyboardSupport: 'No interactive elements — keyboard focus passes through to body content',
		screenReader:
			'Renders as a <section> with an id derived from the title prop (slugified), making it linkable and navigable by heading',
		focusManagement: 'No focus management required — static display component',
		wcag: 'AA',
		notes: [
			'The section id is auto-derived from the title prop using title.toLowerCase().replace(spaces, "-") — keep titles short and unique within a page',
			'Links within markdown body are rendered as standard <a> tags and inherit global link styles'
		]
	},

	aiHints: {
		priority: 'low',
		keywords: [
			'documentation',
			'doc section',
			'design system docs',
			'token table',
			'markdown',
			'two-column layout',
			'sticky header'
		],
		context:
			'Use only when building design system documentation pages. Not a general-purpose content component — it is tightly coupled to Grove doc layout conventions. The body prop accepts a markdown string; pass the type prop to unlock context-aware token preview injection in tables.'
	}
};
