import { relative, resolve as resolveDir } from 'node:path';
import { defineConfig } from 'tsup';

const esbuildOptions = (options, context) => {
	if (context.format === 'cjs') {
		options.banner = {
			js: '"use strict";'
		};
	}
};

export default defineConfig({
	clean: true,
	dts: false,
	entry: ['src/index.ts'],
	format: ['esm', 'cjs'],
	minify: false,
	skipNodeModulesBundle: true,
	target: 'es2021',
	tsconfig: relative(__dirname, resolveDir(process.cwd(), 'src', 'tsconfig.json')),
	keepNames: true,
	esbuildOptions
});
