export const ButtonMetadata = {
	component: {
		name: 'Button',
		category: 'atoms',
		description: 'Interactive button component for actions and form submissions',
		type: 'interactive',
		path: 'src/lib/components/Button/Button.svelte',
		version: '1.1.0',
		created: '2026/03/08',
		modified: '2026/05/19'
	},

	usage: {
		useCases: [
			'primary-call-to-action',
			'secondary-call-to-action',
			'tertiary-call-to-action',
			'actions-inside-inputs',
			'form-submission'
		],
		requiredProps: ['text'],
		commonPatterns: [
			{
				name: 'landing-cta',
				description: 'Main call-to-action button for non in-line rows',
				composition: `<Button text="Get Started" style="filled" color="accent" size="lg" icon="" />`
			},
			{
				name: 'form-submission-inline',
				description: 'Medium size button to match the height of inputs and other atoms',
				composition: `<Button text="Send" style="tonal" color="accent" size="md" icon="" />`
			},
			{
				name: 'cancel-button',
				description: 'Tertiary buttonfor actions that should have lower hierarchy',
				composition: `<Button text="No, go back" style="outlined" color="gray" size="md" />`
			}
		],
		antiPatterns: [
			{
				scenario: 'Multiple filled buttons in same section',
				reason: 'Creates visual hierarchy confusion',
				alternative: 'Use one filled for the main actions and tonal/outlined for other actions'
			},
			{
				scenario: 'Very long text labels',
				reason: 'Buttons should be concise and action-oriented',
				alternative: 'Use short, clear action verbs (max 2-4 words)'
			}
		]
	},

	composition: {
		slots: null,
		nestedComponents: [{ name: 'Icon', source: '../Icon/Icon.svelte' }],
		parentConstraints: null
	},

	behavior: {
		states: ['DEFAULT', 'hover', 'active', 'disabled'],

		interactions: {
			click: 'Action triggered',
			focus: 'Add ring around button according to the surface its being placed on'
		}
	},

	variants: {
		style: {
			options: ['filled', 'tonal', 'outlined', 'ghost'],
			default: 'filled',
			purpose: {
				filled:
					'Highest visual prominence with elevation shadow. Main call-to-action in a section.',
				tonal:
					'Medium prominence using a terrace surface. Secondary action that still needs presence.',
				outlined:
					'Low prominence with a border and transparent fill. Alternative or cancel actions.',
				ghost:
					'Minimal visual weight, no border or fill until interaction. Tertiary or in-context actions.'
			}
		},
		color: {
			options: ['accent', 'gray'],
			default: 'accent',
			purpose: {
				accent: 'Primary brand emphasis. Default for the main action a user should take.',
				gray: 'Neutral emphasis. Use when the action is present but should not compete with an accent action in the same section.'
			}
		},
		size: {
			options: ['lg', 'md', 'sm'],
			default: 'md',
			purpose: {
				lg: 'Default size. Standalone or primary actions, forms, page-level CTAs.',
				md: 'Denser contexts such as toolbars, cards, or grouped actions.',
				sm: 'Compact UI such as table rows, tags, or inline controls where space is constrained.'
			}
		}
	},

	accessibility: {
		role: 'button',
		keyboardSupport: 'Native browser support - Space/Enter',
		screenReader: 'Announces as button with text content',
		wcag: 'AA',
		notes: ['Always provide descriptive text content', 'For icon-only buttons, add aria-label']
	},

	aiHints: {
		priority: 'high',
		keywords: ['button', 'cta', 'submit', 'action', 'click'],
		selectionCriteria: {
			usePrimary: 'Main action user should take on page/section',
			useSecondary: 'Alternative actions, cancel buttons',
			useGhost: 'Tertiary actions, minimal visual weight',
			useDanger: 'Delete, remove, destructive actions'
		}
	}
};
