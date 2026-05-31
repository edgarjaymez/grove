import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './DocSection.ts';

interface Args {
	title: string;
	body: string;
	type: 'color' | 'shadows' | 'typography' | 'generic';
}

const sampleBody = `
A section of the design system documentation. This is the introductory paragraph that describes the topic.

### Subsection Heading

Here is some body text explaining a concept. You can use \`inline code\` or **bold text** for emphasis.

#### Deeper Heading

> This is a blockquote callout for important notes or warnings.

---

| Token | Value | Usage |
| --- | --- | --- |
| \`--semantic-color-surface-brand-summit\` | oklch(85% 0.06 145) | Primary brand surface |
| \`--semantic-color-text-on-brand-summit-base\` | oklch(20% 0.04 145) | Body text on brand summit |

- First list item
- Second list item with \`code\`
- Third list item
`.trim();

const colorBody = `
The color system uses OKLCH throughout for perceptual uniformity.

| Token | Preview | Usage |
| --- | --- | --- |
| \`--semantic-color-surface-brand-summit\` | — | Brand surface |
| \`--semantic-color-surface-gray-terrace\` | — | Neutral surface |
`.trim();

const meta: Meta<Args> = {
	title: 'Components/gv-doc-section',
	tags: ['autodocs'],
	render: ({ title, body, type }) => html`
		<div style="background-color: var(--semantic-color-surface-ground)">
			<gv-doc-section title=${title} .body=${body} type=${type}></gv-doc-section>
		</div>
	`,
	argTypes: {
		type: { control: 'select', options: ['color', 'shadows', 'typography', 'generic'] }
	},
	args: {
		title: 'Section Title',
		body: sampleBody,
		type: 'generic'
	}
};
export default meta;

type Story = StoryObj<Args>;

export const Default: Story = {};

export const Color: Story = {
	args: { title: 'Color System', body: colorBody, type: 'color' }
};

export const Typography: Story = {
	args: {
		title: 'Typography',
		body: `
### Type Scale

| Token | Preview | Usage |
| --- | --- | --- |
| \`--typography-single-line-title-emphasis\` | — | Page titles |
| \`--typography-multi-line-base-base\` | — | Body copy |
`.trim(),
		type: 'typography'
	}
};
