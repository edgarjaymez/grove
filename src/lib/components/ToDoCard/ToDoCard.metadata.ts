export const toDoCardMetadata = {
	component: {
		name: 'ToDoCard',
		category: 'molecules',
		description:
			'A compact summary card that shows a task count and category label. Used in dashboards and overview surfaces to surface task counts at a glance.',
		type: 'display'
	},

	usage: {
		useCases: [
			'Dashboard widgets showing task totals by category',
			'Task overview panels grouping items by type or status',
			'Summary rows listing pending counts per domain'
		],
		requiredProps: [],
		commonPatterns: [
			{
				name: 'Category summary row',
				description: 'A row of ToDoCards, one per task category, giving a cross-section view.',
				composition: `<ToDoCard color="brand" category="Design" count="5" />
<ToDoCard color="accent" category="Copy" count="2" />
<ToDoCard color="information" category="Dev" count="8" />
<ToDoCard color="gray" category="Other" count="1" />`
			},
			{
				name: 'Single highlighted category',
				description: 'A single card calling attention to a specific task bucket.',
				composition: `<ToDoCard color="brand" category="In Review" count="12" />`
			}
		],
		antiPatterns: [
			{
				scenario: 'Using ToDoCard for rich content or action items',
				reason: 'The card is a read-only count summary — it has no interactive affordance.',
				alternative: 'Use a full card component with action slots for interactive content.'
			},
			{
				scenario: 'Hardcoding a numeric count as text without binding to data',
				reason: 'The count prop is a display string; it should reflect live data, not a static label.',
				alternative: 'Pass a derived or reactive count value: count={String(tasks.length)}'
			},
			{
				scenario: 'Mixing color tracks to convey semantic meaning (e.g. gray = inactive)',
				reason:
					'Color tracks in Grove communicate identity/branding, not status. Do not use color to imply urgency or completion.',
				alternative: 'Use separate status indicators outside the card if status must be conveyed.'
			}
		]
	},

	composition: {
		slots: {},
		nestedComponents: ['Icon (CheckFat, fill weight — internal, not configurable)'],
		commonPartners: [
			'Other ToDoCard instances in a flex row',
			'Section headers labelling the group of cards',
			'Progress indicators showing overall completion'
		],
		parentConstraints: [
			'Best placed on a Ground surface; the card provides its own Terrace elevation.',
			'Avoid placing on Terrace or Summit — the shadow would conflict with an already-elevated parent.'
		]
	},

	behavior: {
		states: ['default (static display only — no hover, focus, or active states)'],
		interactions: {},
		responsive: {
			note: 'Fixed dimensions (163×112px). Wrap multiple cards in a flex container with wrapping enabled for narrow viewports.'
		}
	},

	accessibility: {
		role: 'presentation (decorative summary)',
		keyboardSupport: 'None — the component is non-interactive.',
		screenReader:
			'Renders as plain text. Consumers should wrap a group of cards in a <section> with an appropriate aria-label if they need to provide context.',
		focusManagement: 'Not applicable — no focusable children.',
		wcag: 'AA'
	},

	aiHints: {
		priority: 'medium',
		keywords: [
			'task count',
			'summary card',
			'todo',
			'category',
			'dashboard widget',
			'badge',
			'overview',
			'count display'
		],
		context:
			'Use ToDoCard when the UI needs a compact, color-coded count card for a category of tasks. Choose the color track that matches the surrounding design language — brand (green) for primary, accent (purple) for secondary, information (blue) for informational, gray for neutral/other. Never use it as a button or link.'
	}
}
