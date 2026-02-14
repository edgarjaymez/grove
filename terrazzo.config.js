import { defineConfig } from '@terrazzo/cli';
import css from '@terrazzo/plugin-css';

export default defineConfig({
	plugins: [
		css({
			filename: 'tokens.css',
			variableName: (token) => token.id.replace(/\./g, '-'),
			baseSelector: ':root',
			baseScheme: 'light' // Optional: support both light and dark themes
		})
	]
});
