// import { defineConfig } from "vite"
// import react from "@vitejs/plugin-react"
// import svgr from "@svgr/rollup"
// // // import postcss from "./postcss.config.js"
// // import * as path from "path"
// // import fs from "fs/promises"

// // Get environment and package info
// const isProduction = process.env.NODE_ENV === "production"
// const pkg = require("./package.json")
// // const appProps = require("../../helpers/appProps")

// let outfile = `${isProduction ? "" : "public/"}${pkg.main || pkg.module}`

// // get output from outputfile
// // let [outdir, file] = outfile.split("/", 2)
// const outdir = outfile.slice(0, outfile.lastIndexOf("/"))

// // Vite config
// export default defineConfig({
//   root: "./", // Project root
//   build: {
//     outDir: outdir,
//     sourcemap: !isProduction, // Enable sourcemaps in development
//     target: "es2020", // Modern JS target
//     rollupOptions: {
//       input: pkg.source, // Entry file from package.json
//       output: {
//         format: "esm", // Use ESM format
//         entryFileNames: "[name].js",
//         chunkFileNames: "[name]-[hash].js",
//       },
//       external: isProduction ? Object.keys(pkg.peerDependencies || {}) : [],
//     },
//     minify: isProduction, // Minify in production
//   },
//   plugins: [
//     react(), // React plugin for JSX and HMR
//     svgr(), // Handle SVGs as React components
//   ],
//   css: {
//     preprocessorOptions: {
//       scss: {
//         // You can add SCSS options here if needed
//       },
//     },
//     postcss: {
//       plugins: {
//         tailwindcss: {}, // Use the default Tailwind CSS configuration
//         autoprefixer: {}, // Add Autoprefixer for cross-browser compatibility
//         "postcss-url": {
//           url: "inline", // Inline assets smaller than 10KB as data URLs
//         },
//       },
//     }, // Use the postcss.config.js file
//   },
//   server: {
//     host: "0.0.0.0",
//     port: parseInt(process.env.APP_PORT || process.env.PORT || "3000"),
//     open: true, // Open in browser
//     hmr: true, // Enable Hot Module Replacement
//   },
//   // resolve: {
//   //   alias: {
//   //     "@": path.resolve(__dirname, "./src"), // Alias for clean imports
//   //   },
//   // },
// })
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
