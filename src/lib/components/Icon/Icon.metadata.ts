export const IconMetadata = {
	component: {
		name: 'Icon',
		category: 'atoms',
		description:
			'Phosphor icon rendered as an SVG via @phosphor-icons/webcomponents, supports regular and filled weights',
		type: 'display',
		path: 'src/lib/components/Icon/Icon.ts',
		version: '2.0.0',
		created: '2026/02/15',
		modified: '2026/05/31'
	},

	usage: {
		useCases: [
			'inline-icon-in-button',
			'icon-in-navigation',
			'icon-in-form-field',
			'standalone-decorative-icon',
			'status-indicator'
		],
		requiredProps: ['name'],
		commonPatterns: [
			{
				name: 'regular',
				description: 'Default outlined weight — use in most contexts',
				composition: `<gv-icon name="tree"></gv-icon>`
			},
			{
				name: 'filled',
				description: 'Filled weight for selected, active, or toggled states',
				composition: `<gv-icon name="tree" is-filled></gv-icon>`
			},
			{
				name: 'fill-on-hover',
				description: 'Transitions from regular to filled on hover — use for interactive affordance',
				composition: `<gv-icon name="tree" fill-in-hover></gv-icon>`
			}
		],
		antiPatterns: [
			{
				scenario: 'Setting color directly on the Icon component',
				reason: 'The icon uses color: inherit — color must be set on the parent element',
				alternative:
					'Wrap in a parent that carries the correct text token, or rely on the surface text color cascade'
			},
			{
				scenario: 'Using isFilled and fillInHover together',
				reason:
					'isFilled renders the fill weight unconditionally; fillInHover is redundant and misleading when isFilled is already true',
				alternative:
					'Use isFilled for persistent filled state, fillInHover for hover-only transitions'
			},
			{
				scenario: 'Forgetting to register the named icon in the consuming app',
				reason:
					'gv-icon only emits the <ph-{name}> tag; the SVG comes from @phosphor-icons/webcomponents, which the app must import',
				alternative:
					'Import the icon you use, e.g. `import \'@phosphor-icons/webcomponents/PhTree\'` for name="tree"'
			}
		]
	},

	composition: {
		slots: null,
		nestedComponents: null,
		commonPartners: [
			{ name: 'Button', source: '../Button/Button.js' },
			{ name: 'IconButton', source: '../IconButton/IconButton.js' }
		],
		parentConstraints: [
			'Parent must set a color token — Icon inherits color from its nearest colored ancestor'
		]
	},

	behavior: {
		states: ['DEFAULT', 'hover (fill-on-hover only)'],
		interactions: {
			hover: 'Switches from the regular to the fill weight when fillInHover is true'
		}
	},

	variants: {
		weight: {
			options: ['regular', 'filled'],
			default: 'regular',
			purpose: {
				regular: 'Outlined icon. Default for all static and non-selected states.',
				filled: 'Solid icon. Use for selected, active, toggled, or high-emphasis states.'
			}
		}
	},

	accessibility: {
		role: 'presentation',
		keyboardSupport: 'None — decorative by default',
		screenReader:
			'Hidden from assistive technology when used inside a labelled parent (Button, IconButton). Add aria-label on the parent if the icon is the sole accessible label.',
		wcag: 'AA',
		notes: [
			'Do not put meaningful text alternatives on the Icon itself — label the interactive parent instead',
			'The icon renders as a decorative SVG; the name string is not read aloud by screen readers'
		]
	},

	aiHints: {
		priority: 'high',
		keywords: ['icon', 'symbol', 'glyph', 'phosphor', 'pictogram'],
		selectionCriteria: {
			use: 'Any time a Phosphor icon is needed — inside buttons, nav items, form fields, or as standalone decorative marks. Pass the kebab-case Phosphor icon name (e.g. "heart", "address-book", "gear").',
			skip: 'Do not render a raw <span> or <i> with a font class — always use this component to ensure correct sizing, color inheritance, and fill behavior'
		}
	}
};
