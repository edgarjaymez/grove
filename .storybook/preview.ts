import type { Preview } from '@storybook/sveltekit';
import '../src/lib/tokens/tokens.css';
import '../src/lib/styles/reset.css';
import '../src/lib/styles/globals.css';
import '../src/lib/styles/typography.css';
import '../src/lib/styles/effects.css';
import '../src/lib/fonts/fonts.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		options: {
			storySort: {
				order: ['Home', 'Components', 'Primitives', 'Layout', '*']
			}
		}
	}
};

export default preview;
