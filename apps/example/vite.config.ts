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
  }

  // with vite it is possible to have different configurations based on the mode
  // we can use this to create a static build for previewing the app in github pages
  // and also to create a docker image for the standalone app
  if (mode === "static") {
    return {
      ...sharedConfig,
      build: {
        outDir: "dist",
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
