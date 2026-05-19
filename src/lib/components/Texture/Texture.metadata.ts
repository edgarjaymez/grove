export const TextureMetadata = {
	component: {
		name: 'Texture',
		category: 'atoms',
		description: 'Absolutely positioned SVG noise overlay that adds organic grain to surfaces',
		type: 'display',
		path: 'src/lib/components/Texture/Texture.svelte',
		version: '1.1.0',
		created: '2026/02/18',
		modified: '2026/05/19'
	},

	usage: {
		useCases: [
			'surface-texture-on-summit',
			'surface-texture-on-terrace',
			'surface-texture-on-ground'
		],
		requiredProps: [],
		commonPatterns: [
			{
				name: 'on-brand',
				description: 'Full-strength grain on the darkest brand surface',
				composition: `<div style="position: relative; overflow: hidden; background-color: var(--semantic-color-surface-brand-summit);">
  <Texture />
</div>`
			},
			{
				name: 'on-accent',
				description: 'Reduced grain on terrace surfaces to avoid overpowering the surface',
				composition: `<div style="position: relative; overflow: hidden; background-color: var(--semantic-color-surface-accent-terrace);">
  <Texture opacity={0.4} />
</div>`
			},
			{
				name: 'on-ground',
				description: 'Subtle grain on light ground surfaces',
				composition: `<div style="position: relative; overflow: hidden; background-color: var(--semantic-color-surface-ground);">
  <Texture opacity={0.25} />
</div>`
			}
		],
		antiPatterns: [
			{
				scenario: 'Parent container lacks position: relative and overflow: hidden',
				reason:
					'Texture uses position: absolute; inset: 0 — without a positioned ancestor it escapes its intended bounds',
				alternative:
					'Always wrap Texture inside a container with position: relative and overflow: hidden'
			},
			{
				scenario: 'Using full opacity (1) on light surfaces',
				reason:
					'The green-tinted grain is too heavy on light backgrounds and dominates the surface',
				alternative: 'Scale opacity down — 0.4 for Accent, 0.25 or lower for Ground'
			}
		]
	},

	composition: {
		slots: null,
		nestedComponents: null,
		parentConstraints: [
			'Parent must have position: relative',
			'Parent must have overflow: hidden to clip the SVG to its shape',
			'Place Texture before sibling content so z-index: 0 keeps it behind'
		]
	},

	behavior: {
		states: ['DEFAULT'],
		interactions: {
			pointer: 'None — pointer-events: none ensures the texture never blocks clicks'
		}
	},

	accessibility: {
		role: 'presentation',
		keyboardSupport: 'None — decorative element with no interactive role',
		screenReader: 'Hidden from assistive technology (decorative only)',
		wcag: 'AA',
		notes: [
			'pointer-events: none ensures the overlay never interferes with interactive elements beneath it'
		]
	},

	aiHints: {
		priority: 'low',
		keywords: [
			'texture',
			'noise',
			'grain',
			'overlay',
			'decorative',
			'surface',
			'background',
			'depth'
		],
		selectionCriteria: {
			use: 'When a surface needs tactile, organic depth — especially Summit or Terrace surfaces in hero or feature sections',
			skip: 'Content-heavy surfaces where the grain could reduce legibility of small text or fine graphics'
		}
	}
};
