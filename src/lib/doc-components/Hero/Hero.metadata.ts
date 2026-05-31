export const HeroMetadata = {
	component: {
		name: 'Hero',
		category: 'organisms',
		description:
			'Full-viewport documentation landing hero for the Grove design system page. Hardcoded content — "Grove" wordmark, tagline, author attribution, and version number — displayed on a brand-summit surface with a decorative Isotype and Texture overlay. Zero props.',
		type: 'display',
		path: 'src/lib/doc-components/Hero/Hero.ts',
		version: '1.0.0',
		created: '2026/05/30',
		modified: '2026/05/30'
	},

	usage: {
		useCases: ['grove-design-system-landing-page-hero'],

		requiredProps: [],

		commonPatterns: [
			{
				name: 'documentation-page-hero',
				description:
					'Placed as the first element of the documentation landing page, above gv-documentation',
				composition: `<gv-hero></gv-hero>`
			}
		],

		antiPatterns: [
			{
				scenario: 'Using gv-hero for a generic marketing or product hero',
				reason:
					'All content (title, tagline, author, version) is hardcoded — it is not a configurable hero component',
				alternative:
					'Build a new configurable hero component with title, subtitle, and CTA props if a reusable hero is needed'
			},
			{
				scenario: 'Placing gv-hero inside a constrained-height or overflow-hidden container',
				reason:
					'The component uses 100svh for its height with viewport-relative margin — it must be a direct child of a full-width page layout',
				alternative:
					'Mount it at the top level of the page route with no height constraints on the parent'
			}
		]
	},

	composition: {
		slots: null,
		nestedComponents: [
			{
				name: 'Isotype',
				source: '../../components/Isotype/Isotype.ts',
				role: 'Decorative brand mark positioned absolutely in the bottom-right corner; color="base" tone="dark" size="1000"'
			},
			{
				name: 'Texture',
				source: '../../components/Texture/Texture.ts',
				role: 'Full-bleed decorative texture overlay applied over the brand-summit surface'
			}
		],
		commonPartners: ['Documentation'],
		parentConstraints: [
			'Must be placed in a full-width context with no height restrictions — the main element fills 100svh minus responsive margins',
			'No background-color required on the parent — the component renders its own brand-summit surface'
		]
	},

	behavior: {
		states: ['DEFAULT'],

		interactions: {},

		responsive: {
			mobile: '8px margin, border-radius-2xl, 6rem h1, 3rem subtitle, 60svh isotype',
			tablet: '768px+ — 16px margin, border-radius-4xl, 8rem h1, 3.5rem subtitle, 70svh isotype',
			laptop:
				'1280px+ — 24px margin, border-radius-8xl, 12rem h1, 5rem subtitle, space-between layout, 100svh isotype',
			desktop: '1536px+ — 32px margin, border-radius-12xl, 15rem h1, 110svh isotype'
		},

		contentSource: {
			title: 'Hardcoded: "Grove"',
			tagline: 'Hardcoded: "Where living systems take root"',
			attribution: 'Hardcoded: "by Edgar Diaz"',
			version: 'Injected from the Vite define constant __APP_VERSION__ at build time'
		}
	},

	variants: null,

	accessibility: {
		role: 'main',
		keyboardSupport: 'No interactive elements',
		screenReader:
			'h1 announces "Grove" as the page title; version is rendered in a <data> element with a machine-readable value attribute',
		focusManagement: 'No focus management required — static display component',
		wcag: 'AA',
		notes: [
			'Decorative Isotype and Texture have aria-hidden applied by their own components',
			'The <data> element carries both the human-readable version string and a value attribute for machine consumers'
		]
	},

	aiHints: {
		priority: 'low',
		keywords: ['hero', 'landing', 'grove', 'documentation', 'full viewport', 'brand summit'],
		context:
			'Single-use page-level hero for the Grove documentation landing page. No props, no variants, no configurable content. Pair it with gv-documentation directly beneath it. Do not use for any other purpose — build a new hero component if generic hero functionality is needed.'
	}
};
