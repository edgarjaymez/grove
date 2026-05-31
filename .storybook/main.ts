import { defineMain } from '@storybook/web-components-vite/node';

export default defineMain({
	addons: [
		'@chromatic-com/storybook',
		'@storybook/addon-vitest',
		'@storybook/addon-a11y',
		'@storybook/addon-docs'
	],
	framework: '@storybook/web-components-vite',
	staticDirs: ['../static'],
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts)']
});
