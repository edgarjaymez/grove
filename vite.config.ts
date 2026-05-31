import { readFileSync } from 'node:fs';
import { defineConfig } from 'vitest/config';
import dts from 'unplugin-dts/vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const pkg = JSON.parse(readFileSync('package.json', 'utf-8'));

export default defineConfig({
	define: {
		__APP_VERSION__: JSON.stringify(pkg.version)
	},
	plugins: [
		dts({
			include: ['src/lib/components', 'src/lib/index.ts'],
			outDir: 'dist',
			rollupTypes: true
		}),
		viteStaticCopy({
			targets: [
				{ src: 'src/lib/tokens/tokens.css', dest: 'tokens' },
				{ src: 'src/lib/fonts/**/*', dest: 'fonts' }
			]
		})
	],
	build: {
		lib: {
			entry: 'src/lib/index.ts',
			formats: ['es'],
			fileName: 'index'
		},
		rollupOptions: {
			external: ['lit', /^lit\//]
		},
		outDir: 'dist',
		emptyOutDir: true,
		sourcemap: true
	},
	test: {
		passWithNoTests: true,
		expect: { requireAssertions: true },
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'unit',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
