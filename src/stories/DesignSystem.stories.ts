import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../lib/components/Documentation/Documentation.ts';

const meta: Meta = {
	title: 'Design System',
	render: () => html`<gv-documentation></gv-documentation>`
};
export default meta;

type Story = StoryObj;

export const Default: Story = {};
