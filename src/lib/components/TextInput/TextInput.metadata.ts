export const TextInputMetadata = {
	component: {
		name: 'TextInput',
		category: 'atoms',
		description:
			'Single-line text field with bottom-border styling. Supports brand and gray color tracks, error state, and disabled state. Renders a native <input> element for full browser and assistive-technology compatibility.',
		type: 'input',
		path: 'src/lib/components/TextInput/TextInput.svelte',
		version: '1.0.0',
		created: '2026/05/20',
		modified: '2026/05/20'
	},

	usage: {
		useCases: [
			'form-text-field',
			'search-input',
			'login-email-or-password-field',
			'inline-edit',
			'filter-input',
			'registration-form-field'
		],

		requiredProps: [],

		commonPatterns: [
			{
				name: 'labeled-form-field',
				description: 'Standard labeled input — always pair with a <label> for accessibility',
				composition: `<label for="name">Full name</label>\n<TextInput id="name" bind:value placeholder="Jane Smith" />`
			},
			{
				name: 'error-field',
				description:
					'Validation error — pair with a message element linked via aria-describedby so screen readers announce the error',
				composition: `<label for="email">Email</label>\n<TextInput id="email" bind:value error aria-describedby="email-error" />\n<span id="email-error">Enter a valid email address</span>`
			},
			{
				name: 'gray-track',
				description:
					'Neutral track for surfaces where brand warmth would clash — e.g. inside a gray card or on a ground surface alongside brand content',
				composition: `<TextInput color="gray" bind:value placeholder="Search…" />`
			},
			{
				name: 'email-field',
				description: 'Email input — use type="email" for mobile keyboard and browser validation',
				composition: `<TextInput type="email" id="email" bind:value placeholder="you@example.com" autocomplete="email" />`
			},
			{
				name: 'password-field',
				description: 'Password input with browser autofill support',
				composition: `<TextInput type="password" id="password" bind:value placeholder="Password" autocomplete="current-password" />`
			}
		],

		antiPatterns: [
			{
				scenario: 'Using TextInput without a label',
				reason:
					'Screen readers have no accessible name for the field — users cannot understand what to type',
				alternative:
					'Always pair with a <label for="..."> or an explicit aria-label prop on the TextInput'
			},
			{
				scenario: 'Using TextInput for multi-line content',
				reason: 'Single-line <input> — content overflows horizontally, no line wrapping',
				alternative: 'Use a Textarea component for multi-line text entry'
			},
			{
				scenario: 'Setting error and disabled simultaneously',
				reason: 'Disabled inputs cannot be corrected — showing an error state is semantically misleading',
				alternative: 'Only set error on fields the user can currently interact with'
			},
			{
				scenario: 'Hardcoding a fixed width on TextInput',
				reason:
					'TextInput is width: 100% by default to fill its container — constraining width belongs on the parent element',
				alternative: 'Wrap TextInput in a container or form group and constrain width there'
			}
		]
	},

	composition: {
		slots: null,
		nestedComponents: [],
		commonPartners: ['Button', 'Form', 'Card'],
		parentConstraints: null
	},

	behavior: {
		states: ['DEFAULT', 'hover', 'focus', 'active', 'disabled', 'error'],

		interactions: {
			hover: 'Border steps up to summit weight; brand background unchanged, gray background transitions to terrace surface',
			focus: 'Background transitions to summit surface; border stays at summit weight; global focus ring applied by surface-scoped CSS',
			active: 'Same visual treatment as focus — active and focus share identical surface tokens',
			disabled:
				'brand: gray-terrace background / gray-terrace border. gray: gray-path background / gray-path border. Cursor changes to not-allowed.',
			error: 'Danger-terrace surface and border, regardless of color prop. Hover steps border to danger-summit. Focus keeps danger-terrace surface.',
			input: 'Updates bound value; isFilled class toggled automatically via $derived(!!value)'
		}
	},

	variants: {
		color: {
			options: ['brand', 'gray'],
			default: 'brand',
			purpose: {
				brand: 'Warm brand surface — use on ground or neutral surfaces where brand emphasis is appropriate. Default for most forms.',
				gray: 'Neutral gray surface — use when the field sits on a brand-colored parent or where brand warmth would be visually excessive.'
			}
		},
		error: {
			options: [true, false],
			default: false,
			purpose: {
				true: 'Signals validation failure — overrides the color track with danger tokens. Always pair with a visible error message linked via aria-describedby.',
				false: 'Normal field state.'
			}
		},
		type: {
			options: ['text', 'email', 'password', 'search', 'tel', 'url', 'number'],
			default: 'text',
			purpose: {
				text: 'General single-line text entry.',
				email: 'Email address — triggers email keyboard on mobile and enables browser email validation.',
				password: 'Password entry — masks characters. Supports autocomplete="current-password" or "new-password".',
				search: 'Search query — may show a clear button in some browsers.',
				tel: 'Phone number — triggers numeric keyboard on mobile.',
				url: 'URL entry — triggers URL keyboard on mobile.',
				number: 'Numeric entry — triggers numeric keyboard and adds browser step controls.'
			}
		}
	},

	accessibility: {
		role: 'textbox',
		keyboardSupport: 'Native browser support — Tab to focus, type to input, Shift+Tab to move back',
		screenReader:
			'Associates accessible name via <label for> or aria-label; announces aria-invalid when error=true; links error message via aria-describedby',
		focusManagement:
			'Focus ring applied by global surface-scoped CSS; component declares outline: none to suppress browser default and avoid double-ring',
		wcag: 'AA',
		notes: [
			'Always pair with a <label> element or aria-label prop — the component renders a bare <input> with no built-in label',
			'When error=true, link a visible error message via aria-describedby so assistive technologies announce it',
			'aria-invalid is set automatically when error=true — do not set it manually',
			'Disabled state uses the HTML disabled attribute; pointer events are blocked natively'
		]
	},

	aiHints: {
		priority: 'high',
		keywords: [
			'input',
			'text field',
			'form field',
			'text input',
			'entry',
			'type',
			'search',
			'email',
			'password',
			'login',
			'register',
			'filter'
		],
		context:
			'Use for any single-line text entry in a form or UI. Default color=brand fits most surfaces. Switch to color=gray when the parent background is brand-colored or the field should feel neutral. Set error=true with a linked aria-describedby message for validation feedback. Always wrap with a <label> or provide aria-label.'
	}
};
