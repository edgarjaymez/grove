import { defineConfig } from '@terrazzo/cli';
import css from '@terrazzo/plugin-css';

export default defineConfig({
	tokens: ['./src/lib/tokens/main.resolver.json'],
	outDir: './src/lib/tokens',

	lint: {
		rules: {
			'core/consistent-naming': ['error', { format: 'camelCase' }]
		}
	},

	plugins: [
		css({
			filename: 'tokens.css',
			// variableName: (token) => token.id.replace(/\./g, '-'),
			permutations: [
				// Base defaults (light + mobile + digital)
				{
					input: {},
					prepare: (css) =>
						`:root {
							color-scheme: light dark;
							${css}
						}`
				},

				// Theme: explicit light
				{
					input: { theme: 'light' },
					prepare: (css) =>
						`[data-theme="light"] {
							color-scheme: light;
							${css}
						}`
				},

				// Theme: dark
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

				// Breakpoint: tablet
				{
					input: { breakpoint: 'tablet' },
					prepare: (css) =>
						`@media (width >= 768px) {
							:root {
								${css}
							}
						}`
				},
				// Breakpoint: tablet + dark
				{
					input: { breakpoint: 'tablet', theme: 'dark' },
					prepare: (css) =>
						`@media (width >= 768px) and (prefers-color-scheme: dark) {
							:root {
								${css}
							}
						}

						@media (width >= 768px) {
							[data-theme="dark"] {
								${css}
							}
						}`
				},

				// Breakpoint: laptop
				{
					input: { breakpoint: 'laptop' },
					prepare: (css) =>
						`@media (width >= 1280px) {
							:root {
								${css}
							}
						}`
				},
				// Breakpoint: laptop + dark
				{
					input: { breakpoint: 'laptop', theme: 'dark' },
					prepare: (css) =>
						`@media (width >= 1280px) and (prefers-color-scheme: dark) {
							:root {
								${css}
							}
						}

						@media (width >= 1280px) {
							[data-theme="dark"] {
								${css}
							}
						}`
				},

				// Breakpoint: desktop
				{
					input: { breakpoint: 'desktop' },
					prepare: (css) =>
						`@media (width >= 1536px) {
							:root {
								${css}
							}
						}`
				},
				// Breakpoint: desktop + dark
				{
					input: { breakpoint: 'desktop', theme: 'dark' },
					prepare: (css) =>
						`@media (width >= 1536px) and (prefers-color-scheme: dark) {
							:root {
								${css}
							}
						}

						@media (width >= 1536px) {
							[data-theme="dark"] {
								${css}
							}
						}`
				},

				// Media: print
				{
					input: { media: 'print' },
					prepare: (css) =>
						`@media print {
							:root {
								${css}
							}
						}`
				},
				// Media: print + tablet
				{
					input: { media: 'print', breakpoint: 'tablet' },
					prepare: (css) =>
						`@media print and (width >= 768px) {
							:root {
								${css}
							}
						}`
				},
				// Media: print + laptop
				{
					input: { media: 'print', breakpoint: 'laptop' },
					prepare: (css) =>
						`@media print and (width >= 1280px) {
							:root {
								${css}
							}
						}`
				},
				// Media: print + desktop
				{
					input: { media: 'print', breakpoint: 'desktop' },
					prepare: (css) =>
						`@media print and (width >= 1536px) {
							:root {
								${css}
							}
						}`
				}
			]
		})
	]
});
