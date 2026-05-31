import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './ToDoCategoryToggler.ts';

interface Args {
	category: string;
	color: 'brand' | 'accent' | 'information' | 'gray';
	count: string;
	disabled: boolean;
	isSelected: boolean;
}

const meta: Meta<Args> = {
	title: 'Components/gv-todo-category-toggler',
	tags: ['autodocs'],
	render: ({ category, color, count, disabled, isSelected }) => html`
		<span
			style="background-color: var(--semantic-color-surface-ground); padding: 16px; display: inline-block"
		>
			<gv-todo-category-toggler
				category=${category}
				color=${color}
				count=${count}
				?disabled=${disabled}
				?is-selected=${isSelected}
			></gv-todo-category-toggler>
		</span>
	`,
	argTypes: {
		color: { control: 'select', options: ['brand', 'accent', 'information', 'gray'] },
		disabled: { control: 'boolean' },
		isSelected: { control: 'boolean' },
		count: { control: 'text' },
		category: { control: 'text' }
	},
	args: {
		category: 'Category',
		color: 'brand',
		count: '3',
		disabled: false,
		isSelected: false
	}
};
export default meta;

type Story = StoryObj<Args>;

export const Default: Story = {};
export const Brand: Story = { args: { color: 'brand', category: 'Design', count: '5' } };
export const Accent: Story = { args: { color: 'accent', category: 'Copy', count: '2' } };
export const Information: Story = { args: { color: 'information', category: 'Dev', count: '8' } };
export const Gray: Story = { args: { color: 'gray', category: 'Other', count: '1' } };
export const Selected: Story = { args: { isSelected: true } };
export const SelectedAccent: Story = {
	args: { isSelected: true, color: 'accent', category: 'Copy', count: '2' }
};
export const Disabled: Story = { args: { disabled: true } };
