import { defineConfig } from '@terrazzo/cli';
import css from '@terrazzo/plugin-css';

export default defineConfig({
	tokens: ['./src/lib/tokens/main.resolver.json'],
	outDir: './src/lib/tokens',

	plugins: [
		css({
			filename: 'tokens.css',
			// variableName: (token) => token.id.replace(/\./g, '-'),
			permutations: [
				{
					input: {}, // default
					prepare: (css) =>
						`:root {
							color-scheme: light dark;
							${css}
						}`
				},
				{
					input: { theme: 'light' },
					prepare: (css) =>
						`[data-theme="light"] {
							color-scheme: light;
							${css}
						}`
				},
				{
					input: { theme: 'dark' },
					prepare: (css) =>
						`@media (prefers-color-scheme: dark) {
							:root {
								color-scheme: dark;
								${css}
							}
						}

						[data-theme="dark"] {
							color-scheme: dark;
							${css}
						}`
				},
				{
					input: { breakpoint: 'tablet' },
					prepare: (css) =>
						`@media (width >= 768px) {
							:root {
								${css}
							}
						}`
				},
				{
					input: { breakpoint: 'laptop' },
					prepare: (css) =>
						`@media (width >= 1280px) {
							:root {
								${css}
							}
						}`
				},
				{
					input: { breakpoint: 'desktop' },
					prepare: (css) =>
						`@media (width >= 1536px) {
							:root {
								${css}
							}
						}`
				},
				{
					input: { media: 'print' },
					prepare: (css) =>
						`@media print {
							:root {
								${css}
							}
						}`
				}
			]
		})
	]
});
