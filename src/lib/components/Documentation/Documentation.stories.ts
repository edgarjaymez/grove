import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './Documentation.ts';

const meta: Meta = {
	title: 'Components/gv-documentation',
	tags: ['autodocs'],
	render: () => html`
		<div style="background-color: var(--semantic-color-surface-ground)">
			<gv-documentation></gv-documentation>
		</div>
	`
};
export default meta;

type Story = StoryObj;

export const Default: Story = {};
