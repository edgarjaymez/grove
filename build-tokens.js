import StyleDictionary from 'style-dictionary';

// Base source: excludes ALL mode-specific files AND mode-dependent files (typography)
const baseSource =
	'src/lib/tokens/!(*.digital|*.print|*.mobile|*.tablet|*.laptop|*.desktop|*.light|*.dark|typography).tokens.json';

const dimensions = [
	{ modes: ['digital', 'print'], dependents: ['typography'] },
	{ modes: ['mobile', 'tablet', 'laptop', 'desktop'], dependents: [] },
	{ modes: ['light', 'dark'], dependents: [] }
];

// 1. Build base (shared) tokens only
const base = new StyleDictionary({
	source: [baseSource],
	log: { verbosity: 'verbose' },
	platforms: {
		css: {
			transformGroup: 'css',
			buildPath: 'static/css/',
			files: [{ destination: 'tokens.css', format: 'css/variables' }]
		}
	}
});
await base.buildAllPlatforms();

// 2. Build each mode variant
for (const { modes, dependents } of dimensions) {
	for (const mode of modes) {
		const dependentSources = dependents.map((name) => `src/lib/tokens/${name}.tokens.json`);

		const sd = new StyleDictionary({
			source: [baseSource, `src/lib/tokens/*.${mode}.tokens.json`, ...dependentSources],
			log: { verbosity: 'verbose' },
			platforms: {
				css: {
					transformGroup: 'css',
					buildPath: 'build/css/',
					files: [
						{
							destination: `tokens.${mode}.css`,
							format: 'css/variables',
							filter: (token) =>
								token.filePath.includes(`.${mode}.`) ||
								dependents.some((name) => token.filePath.includes(`/${name}.tokens.json`))
						}
					]
				}
			}
		});
		await sd.buildAllPlatforms();
	}
}
