export const IsotypeMetadata = {
	component: {
		name: 'Isotype',
		category: 'atoms',
		description: 'Brand logo mark rendered as an inline SVG, adapts fill to surface tone',
		type: 'display',
		path: 'src/lib/components/Isotype/Isotype.svelte',
		version: '1.0.0',
		created: '2026/02/15',
		modified: '2026/05/19'
	},

	usage: {
		useCases: [
			'navbar-brand-mark',
			'hero-logo',
			'footer-logo',
			'loading-screen',
			'favicon-substitute'
		],
		requiredProps: ['color', 'size', 'tone'],
		commonPatterns: [
			{
				name: 'brand-on-light',
				description: 'Brand color isotype on a light or ground surface',
				composition: `<Isotype color="brand" size={176} tone="light" />`
			},
			{
				name: 'brand-on-dark',
				description: 'Brand isotype on a dark surface',
				composition: `<Isotype color="brand" size={176} tone="dark" />`
			},
			{
				name: 'accent-on-light',
				description: 'Accent color variant for branded accent surfaces on light backgrounds',
				composition: `<Isotype color="accent" size={176} tone="light" />`
			},
			{
				name: 'base-neutral',
				description: 'Neutral monochrome isotype for low-emphasis contexts',
				composition: `<Isotype color="base" size={40} tone="light" />`
			}
		],
		antiPatterns: [
			{
				scenario: 'Using tone="light" on a dark background',
				reason:
					'Light-tone fills (500-level colors) are designed for light surfaces — they lose contrast on dark backgrounds',
				alternative:
					'Use tone="dark" when the parent surface is Summit, Terrace, or any dark background'
			},
			{
				scenario: 'Using tone="dark" on a light background',
				reason:
					'Dark-tone fills (50-level colors) are near-white and become invisible on light surfaces',
				alternative: 'Use tone="light" when the parent surface is Ground or any light background'
			}
		]
	},

	composition: {
		slots: null,
		nestedComponents: null,
		parentConstraints: null
	},

	behavior: {
		states: ['DEFAULT'],
		interactions: null
	},

	variants: {
		color: {
			options: ['brand', 'accent', 'base'],
			default: 'brand',
			purpose: {
				brand: 'Primary brand identity. Default for most logo placements.',
				accent: 'Accent palette variant for surfaces where the brand color would clash.',
				base: 'Neutral monochrome. Use when color should not compete with surrounding content.'
			}
		},
		tone: {
			options: ['light', 'dark'],
			default: 'light',
			purpose: {
				light: 'High-saturation fills (500-level) designed for light and ground surfaces.',
				dark: 'Low-saturation fills (50-level) designed for dark surfaces such as Summit or Terrace.'
			}
		}
	},

	accessibility: {
		role: 'img when label is provided, otherwise aria-hidden="true"',
		keyboardSupport: 'None — decorative or static brand mark',
		screenReader:
			'Pass label="Grove" for a standalone logo; omit label when the isotype is decorative or sits next to a visible wordmark',
		wcag: 'AA',
		notes: [
			'label prop drives semantics: provided → role="img" + aria-label; omitted → aria-hidden="true"',
			'Match tone to the surface contrast ratio to satisfy WCAG 1.4.3'
		]
	},

	aiHints: {
		priority: 'medium',
		keywords: ['logo', 'isotype', 'brand', 'mark', 'symbol', 'wordmark', 'identity'],
		selectionCriteria: {
			use: 'Whenever a brand logo mark is needed — navbars, hero sections, footers, loading states',
			skip: 'Do not recreate with a raw SVG or img tag — always use this component to ensure correct token-driven fill colors'
		}
	}
};
