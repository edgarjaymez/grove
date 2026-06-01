import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './ToDoListItem.js';

interface Args {
	title: string;
	category: string;
	isDone: boolean;
}

const meta: Meta<Args> = {
	title: 'Components/gv-todo-list-item',
	tags: ['autodocs'],
	render: ({ title, category, isDone }) => html`
		<gv-todo-list-item
			title=${title}
			category=${category}
			?is-done=${isDone}
		></gv-todo-list-item>
	`,
	argTypes: {
		title: { control: 'text' },
		category: { control: 'text' },
		isDone: { control: 'boolean' },
	},
	args: {
		title: 'Task',
		category: 'Category',
		isDone: false,
	},
};
export default meta;

type Story = StoryObj<Args>;

export const Default: Story = {};
export const Done: Story = { args: { isDone: true } };
