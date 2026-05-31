import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Hero.js';

const meta: Meta = {
	title: 'Components/gv-hero',
	tags: ['autodocs'],
	render: () => html`<gv-hero></gv-hero>`,
};
export default meta;

type Story = StoryObj;

export const Default: Story = {};
