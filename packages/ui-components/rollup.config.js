/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const { babel } = require("@rollup/plugin-babel")
const del = require("rollup-plugin-delete")
const postcss = require("rollup-plugin-postcss")
const pkg = require("./package.json")
const fs = require("fs")
const minify = require("rollup-plugin-babel-minify")
const analyze = require("rollup-plugin-analyzer")
const { nodeResolve } = require("@rollup/plugin-node-resolve")
const commonjs = require("@rollup/plugin-commonjs")
const svgr = require("@svgr/rollup")
const glob = require("glob")
const {
  generateTailwindThemeClassesJson,
} = require("./src/docs/ColorPalette/generateTailwindThemeClassesJson")

// generates tailwind classes for documentation usages.
generateTailwindThemeClassesJson()

// IMPORTANT!
// package.json is single source of truth policy

if (!/.+\/.+\.js/.test(pkg.module))
  throw new Error(
    "module value is incorrect, use DIR/FILE.js like build/index.js"
  )
const buildDir = pkg.module.slice(0, pkg.module.lastIndexOf("/"))
// filename is extracted from module key in package.json
// because of single source of truth policy
const filename = pkg.module.slice(
  pkg.module.lastIndexOf("/") + 1,
  pkg.module.lastIndexOf(".")
)

const isProduction = process.env.NODE_ENV === "production"
const IGNORE_EXTERNALS = process.env.IGNORE_EXTERNALS === "true"

// define plugins here to use it in different configs
const plugins = [
  svgr({
    svgo: false,
    titleProp: true,
  }),
  postcss({
    config: {
      path: "./postcss.config.js",
    },
    extract: false,
    minimize: false, //true,
    inject: false,
    extensions: [".scss", ".css"],
    use: ["sass", "glob-imports"],
    loaders: [
      // custom loader!!! to load all scss files in globals.scss
      {
        name: "glob-imports",
        test: /\.(sass|scss)$/,
        process({ code }) {
          // handle glob import
          return new Promise((resolve, reject) => {
            const match = [...code.matchAll(/@import\s+(.*\*+.*);/g)]
            match.forEach((m) => {
              const files = glob.sync("./src/" + m[1].replace(/"|'/g, ""))
              let result = files.map((f) => `@import "${f}";`).join("\n")
              code = code.replace(m[0], result)
            })
            resolve({ code })
          })
        },
      },
    ],
  }),

  nodeResolve(),
  babel({
    // babelrc: false,
    // // exclude: "node_modules/**",
    // presets: ["@babel/preset-react"],
    babelHelpers: "bundled",
  }),
  commonjs(),
  minify({ comments: false }),
  analyze({
    summaryOnly: true,
    limit: 0,
  }),
]

// input is a map of all components of format { [componentName]: path }
// it is also contains the main entry point of the library (pkg.source)
const input = fs.readdirSync("./src/components").reduce(
  (map, file) => {
    map[file] = `src/components/${file}/index.js`
    return map
  },
  { [filename]: pkg.source }
)

const config = [
  // bundle all components
  {
    input,
    output: [
      // { dir: "lib", format: "cjs", preserveModules: false },
      {
        dir: buildDir,
        format: "esm",
        preserveModules: false,
        compact: true,
      },
    ],

    plugins: [del({ targets: [`${buildDir}/**/*`] }), ...plugins],

    external: ["react", "react-dom", "prop-types"].concat(
      isProduction && !IGNORE_EXTERNALS
        ? Object.keys(pkg.peerDependencies || {})
        : []
    ),
  },
  {
    input: "tailwind.config.js",
    output: {
      file: `${buildDir}/lib/tailwind.config.js`,
    },
  },
  {
    input: "lib/variables.scss",
    output: {
      file: `${buildDir}/lib/variables.css`,
    },
    plugins: [
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extract: true,
        minimize: true,
        inject: false,
      }),
    ],
  },
]

module.exports = config
