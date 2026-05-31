<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ToDoCard from './ToDoCard.svelte'

	const { Story } = defineMeta({
		title: 'Components/ToDoCard',
		component: ToDoCard,
		tags: ['autodocs'],
		argTypes: {
			color: {
				control: { type: 'select' },
				options: ['brand', 'accent', 'information', 'gray']
			},
			class: { table: { disable: true } }
		},
		args: {
			category: 'Category',
			count: '3',
			color: 'brand'
		}
	})
</script>

<Story name="Default" />

<Story name="Brand" args={{ color: 'brand' }} />

<Story name="Accent" args={{ color: 'accent' }} />

<Story name="Information" args={{ color: 'information' }} />

<Story name="Gray" args={{ color: 'gray', category: 'Other' }} />
