<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ClassValue } from 'svelte/elements';
	import Texture from './Texture.svelte';

	const { Story } = defineMeta({
		title: 'Components/Texture',
		component: Texture,
		tags: ['autodocs'],
		argTypes: {
			class: { table: { disable: true } },
			opacity: { control: { type: 'range', min: 0, max: 1, step: 0.01 } }
		},
		args: {
			opacity: 1
		},
		render: template
	});
</script>

{#snippet template(args: { class?: ClassValue })}
	<div
		style="
			height: calc(100svh - var(--soft-grid-8) * 2);
			margin: var(--soft-grid-8);
			padding: var(--grid-landing-margin);
			border-radius: var(--border-radius-2xl);
			background-color: var(--semantic-color-surface-brand-summit);
			position: relative;
			overflow: hidden;
		"
	>
		<Texture {...args} />
	</div>
{/snippet}

<Story name="Default" />

<Story name="On terrace surface">
	{#snippet template(args: { class?: ClassValue })}
		<div
			style="
				height: calc(100svh - var(--soft-grid-8) * 2);
				margin: var(--soft-grid-8);
				padding: var(--grid-landing-margin);
				border-radius: var(--border-radius-2xl);
				background-color: var(--semantic-color-surface-accent-terrace);
				position: relative;
				overflow: hidden;
			"
		>
			<Texture {...args} opacity={0.4} />
		</div>
	{/snippet}
</Story>

<Story name="On ground surface">
	{#snippet template(args: { class?: ClassValue })}
		<div
			style="
				height: calc(100svh - var(--soft-grid-8) * 2);
				margin: var(--soft-grid-8);
				padding: var(--grid-landing-margin);
				border-radius: var(--border-radius-2xl);
				background-color: var(--semantic-color-surface-ground);
				position: relative;
				overflow: hidden;
			"
		>
			<Texture {...args} opacity={0.25} />
		</div>
	{/snippet}
</Story>
