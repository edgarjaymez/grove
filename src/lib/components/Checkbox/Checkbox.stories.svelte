<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { fn } from 'storybook/test';
	import Checkbox from './Checkbox.svelte';

	const { Story } = defineMeta({
		title: 'Components/Checkbox',
		component: Checkbox,
		tags: ['autodocs'],
		argTypes: {
			responsive: {
				control: { type: 'select' },
				options: ['default', 'xl']
			},
			checked: { control: 'boolean' },
			disabled: { control: 'boolean' },
			class: { table: { disable: true } }
		},
		args: {
			checked: false,
			responsive: 'default',
			disabled: false,
			onchange: fn()
		}
	});
</script>

<Story name="Default" />

<Story name="Checked" args={{ checked: true }} />

<Story name="XL" args={{ responsive: 'xl' }} />

<Story name="XL Checked" args={{ responsive: 'xl', checked: true }} />

<Story name="Disabled" args={{ disabled: true }} />

<Story name="Disabled Checked" args={{ disabled: true, checked: true }} />
