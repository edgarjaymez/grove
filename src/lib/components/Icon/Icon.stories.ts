import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './Icon.js';

interface Args {
	unicode: string;
	isFilled: boolean;
	fillInHover: boolean;
}

const meta: Meta<Args> = {
	title: 'Components/gv-icon',
	tags: ['autodocs'],
	render: ({ unicode, isFilled, fillInHover }) => html`
		<span
			style="background-color: var(--semantic-color-surface-ground); color: var(--semantic-color-text-on-ground-base)"
		>
			<gv-icon unicode=${unicode} ?is-filled=${isFilled} ?fill-in-hover=${fillInHover}></gv-icon>
		</span>
	`,
	argTypes: {
		unicode: { control: 'text' },
		isFilled: { control: 'boolean' },
		fillInHover: { control: 'boolean' }
	},
	args: {
		unicode: '',
		isFilled: false,
		fillInHover: false
	}
};
export default meta;

type Story = StoryObj<Args>;

export const Default: Story = {};

export const Filled: Story = {
	args: { isFilled: true }
};

export const FillOnHover: Story = {
	args: { fillInHover: true }
};
