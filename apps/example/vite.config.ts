import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"

export default defineConfig(({ mode }) => {
  const sharedConfig = {
    root: "./",

    define: {
      "process.env": {},
    },

    plugins: [react()],
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },

    server: {
      host: "0.0.0.0",
      port: parseInt(process.env.PORT || "3000"),
    },

    /* enable jsx in js files */
    // esbuild: {
    //   loader: "jsx",
    //   include: /.*\.jsx?$/,
    //   exclude: [],
    // },
    // optimizeDeps: {
    //   esbuildOptions: {
    //     loader: {
    //       ".js": "jsx",
    //     },
    //   },
    // },
  }

  if (mode === "static") {
    return {
      ...sharedConfig,
      build: {
        outDir: "dist",
        rollupOptions: {
          //external: ["@cloudoperators/juno-ui-components"],
        },
      },
    }
  }

  // Default is a library
  return {
    ...sharedConfig,
    build: {
      outDir: "dist",

      lib: {
        entry: "src/index.js",
        formats: ["es"],
        fileName: (format) => `index.js`,
      },
    },
  }
})
