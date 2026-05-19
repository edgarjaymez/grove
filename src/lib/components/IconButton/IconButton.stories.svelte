<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { fn } from 'storybook/test';
	import IconButton from './IconButton.svelte';

	const { Story } = defineMeta({
		title: 'Components/IconButton',
		component: IconButton,
		tags: ['autodocs'],
		argTypes: {
			style: {
				control: { type: 'select' },
				options: ['filled', 'tonal', 'outlined', 'ghost']
			},
			color: {
				control: { type: 'select' },
				options: ['accent', 'gray']
			},
			size: {
				control: { type: 'select' },
				options: ['lg', 'md', 'sm']
			},
			disabled: { control: 'boolean' },
			icon: { control: 'text' },
			class: { table: { disable: true } }
		},
		args: {
			icon: '',
			style: 'filled',
			color: 'accent',
			size: 'lg',
			disabled: false,
			onclick: fn()
		}
	});
</script>

<!-- Canonical baseline with all defaults explicit -->
<Story name="Default" />

<!-- Style -->
<Story name="Tonal" args={{ style: 'tonal' }} />
<Story name="Outlined" args={{ style: 'outlined' }} />
<Story name="Ghost" args={{ style: 'ghost' }} />

<!-- Colors -->
<Story name="Gray" args={{ color: 'gray' }} />

<!-- Sizes -->
<Story name="Medium" args={{ size: 'md' }} />
<Story name="Small" args={{ size: 'sm' }} />

<!-- States -->
<Story name="Disabled" args={{ disabled: true }} />
