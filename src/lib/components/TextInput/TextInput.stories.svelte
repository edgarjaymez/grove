<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { fn } from 'storybook/test';
	import TextInput from './TextInput.svelte';

	const { Story } = defineMeta({
		title: 'Components/TextInput',
		component: TextInput,
		tags: ['autodocs'],
		argTypes: {
			color: {
				control: { type: 'select' },
				options: ['brand', 'gray']
			},
			type: {
				control: { type: 'select' },
				options: ['text', 'email', 'password', 'search', 'tel', 'url', 'number']
			},
			error: { control: 'boolean' },
			disabled: { control: 'boolean' },
			class: { table: { disable: true } }
		},
		args: {
			color: 'brand',
			value: '',
			placeholder: 'Placeholder',
			error: false,
			disabled: false,
			oninput: fn(),
			onchange: fn(),
			onfocus: fn(),
			onblur: fn()
		}
	});
</script>

<!-- Canonical baseline: brand, empty (placeholder shown) -->
<Story name="Default" />

<!-- Brand track with a typed value -->
<Story name="Filled" args={{ value: 'Typed text' }} />

<!-- Gray track, empty -->
<Story name="Gray" args={{ color: 'gray' }} />

<!-- Gray track with a typed value -->
<Story name="Gray Filled" args={{ color: 'gray', value: 'Typed text' }} />

<!-- Error state, brand, empty -->
<Story name="Error" args={{ error: true }} />

<!-- Error state, brand, with value -->
<Story name="Error Filled" args={{ error: true, value: 'Invalid value' }} />

<!-- Disabled, brand -->
<Story name="Disabled" args={{ disabled: true }} />

<!-- Disabled, gray -->
<Story name="Gray Disabled" args={{ color: 'gray', disabled: true }} />
