import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './TextInput.js';

interface Args {
	color: 'brand' | 'gray';
	error: boolean;
	disabled: boolean;
	placeholder: string;
	type: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number';
}

const meta: Meta<Args> = {
	title: 'Components/gv-text-input',
	tags: ['autodocs'],
	render: ({ color, error, disabled, placeholder, type }) => html`
		<span
			style="background-color: var(--semantic-color-surface-ground); padding: 16px; display: inline-block; width: 300px"
		>
			<gv-text-input
				color=${color}
				?error=${error}
				?disabled=${disabled}
				placeholder=${placeholder}
				type=${type}
			></gv-text-input>
		</span>
	`,
	argTypes: {
		color: { control: 'select', options: ['brand', 'gray'] },
		error: { control: 'boolean' },
		disabled: { control: 'boolean' },
		type: { control: 'select', options: ['text', 'email', 'password', 'search', 'tel', 'url', 'number'] },
	},
	args: {
		color: 'brand',
		error: false,
		disabled: false,
		placeholder: 'Enter text…',
		type: 'text',
	},
};
export default meta;

type Story = StoryObj<Args>;

export const Default: Story = {};

export const Gray: Story = {
	args: { color: 'gray' },
};

export const Error: Story = {
	args: { error: true, placeholder: 'Invalid value' },
};

export const Disabled: Story = {
	args: { disabled: true, placeholder: 'Disabled field' },
};
