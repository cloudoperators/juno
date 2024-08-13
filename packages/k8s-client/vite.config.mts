import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts", // or 'src/main.ts' if TypeScript
      name: "k8s-client", // Replace with your library's global name
      formats: ["es"], // Output formats: ESM and CommonJS
      fileName: (format) => `k8s-client.${format}.js`, // Output file names
    },
    outDir: "build",
  },
  plugins: [
    dts({
      exclude: ["./test/**/*.test.ts", "vitest.setup.ts"],
      insertTypesEntry: true, // Ensure types are properly exported
      outDir: "build/types", // Specify where to output the types
    }),
  ],
})
