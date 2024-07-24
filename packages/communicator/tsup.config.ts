import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entryPoints: ["src/index.ts"],
  clean: true,
  sourcemap: true,
  dts: true,
  format: ['esm'],
  ...options,
}));