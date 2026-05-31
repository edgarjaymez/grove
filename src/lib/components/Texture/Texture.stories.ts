import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Texture.js';

interface Args {
	opacity: number;
}

const SURFACE_WRAPPER = (bg: string, opacity: number) => html`
	<div
		style="
			height: calc(100svh - var(--soft-grid-8) * 2);
			margin: var(--soft-grid-8);
			padding: var(--grid-landing-margin);
			border-radius: var(--border-radius-2xl);
			background-color: ${bg};
			position: relative;
			overflow: hidden;
		"
	>
		<gv-texture opacity=${opacity}></gv-texture>
	</div>
`;

const meta: Meta<Args> = {
	title: 'Components/gv-texture',
	tags: ['autodocs'],
	render: ({ opacity }) =>
		SURFACE_WRAPPER('var(--semantic-color-surface-brand-summit)', opacity),
	argTypes: {
		opacity: { control: { type: 'range', min: 0, max: 1, step: 0.01 } }
	},
	args: { opacity: 1 }
};
export default meta;

type Story = StoryObj<Args>;

export const Default: Story = {};

export const OnTerrace: Story = {
	render: ({ opacity }) =>
		SURFACE_WRAPPER('var(--semantic-color-surface-accent-terrace)', opacity),
	args: { opacity: 0.4 }
};

export const OnGround: Story = {
	render: ({ opacity }) =>
		SURFACE_WRAPPER('var(--semantic-color-surface-ground)', opacity),
	args: { opacity: 0.25 }
};
