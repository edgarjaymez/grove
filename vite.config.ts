import { readFileSync } from 'node:fs';
import { defineConfig } from 'vitest/config';
import dts from 'unplugin-dts/vite';

const pkg = JSON.parse(readFileSync('package.json', 'utf-8'));

export default defineConfig({
	define: {
		__APP_VERSION__: JSON.stringify(pkg.version)
	},
	plugins: [
		dts({
			include: ['src/lib/components', 'src/lib/index.ts'],
			outDir: 'dist',
			entryRoot: 'src/lib'
		}),
		{
			name: 'copy-static-assets',
			apply: 'build' as const,
			async closeBundle() {
				const { access, copyFile, cp, mkdir, constants } = await import('node:fs/promises')
				const tokensExist = await access('src/lib/tokens/tokens.css', constants.F_OK)
					.then(() => true)
					.catch(() => false)
				if (tokensExist) {
					await mkdir('dist/tokens', { recursive: true })
					await copyFile('src/lib/tokens/tokens.css', 'dist/tokens/tokens.css')
				}
				await cp('src/lib/fonts', 'dist/fonts', { recursive: true })
			}
		}
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
