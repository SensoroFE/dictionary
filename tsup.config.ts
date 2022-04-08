import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: true,
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
  platform: 'browser',
  legacyOutput: true,
});
