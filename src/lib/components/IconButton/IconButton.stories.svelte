<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { fn } from 'storybook/test';
	import IconButton from './IconButton.svelte';

	const { Story } = defineMeta({
		title: 'Components/IconButton',
		component: IconButton,
		tags: ['autodocs'],
		argTypes: {
			variant: {
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
			variant: 'filled',
			color: 'accent',
			size: 'lg',
			disabled: false,
			onclick: fn()
		}
	});
</script>

<!-- Canonical baseline with all defaults explicit -->
<Story name="Default" />

<!-- Variants -->
<Story name="Tonal" args={{ variant: 'tonal' }} />
<Story name="Outlined" args={{ variant: 'outlined' }} />
<Story name="Ghost" args={{ variant: 'ghost' }} />

<!-- Colors -->
<Story name="Gray" args={{ color: 'gray' }} />

<!-- Sizes -->
<Story name="Medium" args={{ size: 'md' }} />
<Story name="Small" args={{ size: 'sm' }} />

<!-- States -->
<Story name="Disabled" args={{ disabled: true }} />
