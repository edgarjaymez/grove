<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Isotype from './Isotype.svelte';

	const { Story } = defineMeta({
		title: 'Components/Isotype',
		component: Isotype,
		tags: ['autodocs'],
		argTypes: {
			class: { table: { disable: true } },
			color: {
				control: { type: 'select' },
				options: ['base', 'brand', 'accent']
			},
			tone: {
				control: { type: 'select' },
				options: ['light', 'dark']
			}
		},
		args: {
			color: 'brand',
			size: 176,
			tone: 'light'
		}
	});
</script>

<Story name="Default" />

<Story name="Light/Brand" args={{ color: 'brand' }} />

<Story name="Light/Accent" args={{ color: 'accent' }} />

<Story name="Light/Base" args={{ color: 'base' }} />
