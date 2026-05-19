<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ComponentProps } from 'svelte';
	import Icon from './Icon.svelte';

	const { Story } = defineMeta({
		title: 'Components/Icon',
		component: Icon,
		tags: ['autodocs'],
		argTypes: {
			class: { table: { disable: true } },
			isFilled: { control: 'boolean' },
			fillInHover: { control: 'boolean' }
		},
		args: {
			unicode: '',
			isFilled: false,
			fillInHover: false
		},
		render: template
	});
</script>

{#snippet template(args: ComponentProps<typeof Icon>)}
	<span
		style="background-color: var(--semantic-color-surface-ground); color: var(--semantic-color-text-on-ground-base)"
	>
		<Icon {...args} />
	</span>
{/snippet}

<Story name="Default" />

<Story name="Filled" args={{ isFilled: true }} />

<Story name="Fill on hover" args={{ fillInHover: true }} />
