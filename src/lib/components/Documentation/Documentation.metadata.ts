export const DocumentationMetadata = {
	component: {
		name: 'Documentation',
		category: 'organisms',
		description:
			'Full design system documentation page. Parses DESIGN_SYSTEM.md at build time, splits it into ## sections, and renders each as a gv-doc-section with the correct type for token preview injection. Zero props — the content is entirely driven by the source markdown file.',
		type: 'container',
		path: 'src/lib/components/Documentation/Documentation.ts',
		version: '1.0.0',
		created: '2026/05/30',
		modified: '2026/05/30'
	},

	usage: {
		useCases: ['full-design-system-documentation-page'],

		requiredProps: [],

		commonPatterns: [
			{
				name: 'drop-in-documentation-page',
				description:
					'Renders the entire DESIGN_SYSTEM.md as a structured, styled documentation page — no configuration needed',
				composition: `<gv-documentation></gv-documentation>`
			}
		],

		antiPatterns: [
			{
				scenario: 'Using gv-documentation to render arbitrary markdown',
				reason:
					'The component imports DESIGN_SYSTEM.md statically at build time — the content is not configurable via props',
				alternative:
					'Use gv-doc-section directly with a custom title, body, and type if you need to render a standalone section outside this page'
			},
			{
				scenario: 'Using gv-documentation multiple times on the same page',
				reason: 'It renders the full documentation every time it is mounted — duplicate content',
				alternative: 'Mount it once as the root of the documentation route'
			}
		]
	},

	composition: {
		slots: null,
		nestedComponents: [
			{
				name: 'DocSection',
				source: '../DocSection/DocSection.ts',
				role: 'Renders each ## heading block from DESIGN_SYSTEM.md as a full section'
			}
		],
		commonPartners: [],
		parentConstraints: [
			'Parent must set background-color to var(--semantic-color-surface-ground) for divider borders and text colors to render correctly'
		]
	},

	behavior: {
		states: ['DEFAULT'],

		interactions: {},

		contentSource: {
			file: 'src/DESIGN_SYSTEM.md',
			import:
				'Static raw import via Vite (?raw) — content is bundled at build time, not fetched at runtime',
			splitting:
				'The file is split on lines beginning with "## " — each h2 heading becomes one gv-doc-section',
			typeMapping: {
				description:
					'Section titles are matched against a hardcoded map to assign the correct SectionType for token previews',
				map: {
					'Color System': 'color',
					Typography: 'typography',
					Shadows: 'shadows',
					'(all other titles)': 'generic'
				}
			}
		}
	},

	variants: null,

	accessibility: {
		role: 'region (delegated to gv-doc-section children)',
		keyboardSupport: 'No interactive elements — keyboard focus passes through to section content',
		screenReader:
			'Each gv-doc-section renders a <section> with an id derived from its title, enabling in-page anchor navigation',
		focusManagement: 'No focus management required — static display component',
		wcag: 'AA',
		notes: [
			'To add a new documentation section, add an ## heading block to DESIGN_SYSTEM.md and rebuild',
			'To enable token previews in a new section, add its exact title to the typeMap in Documentation.ts'
		]
	},

	aiHints: {
		priority: 'low',
		keywords: ['documentation', 'design system docs', 'full page', 'DESIGN_SYSTEM.md', 'no props'],
		context:
			'Single-use page-level component — drop it in the documentation route and it renders itself. All content comes from DESIGN_SYSTEM.md. To change content, edit the markdown file, not this component. To add a new section with token previews, update the typeMap.'
	}
};
