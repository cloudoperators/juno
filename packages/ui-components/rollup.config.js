/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */
const { babel } = require("@rollup/plugin-babel");
const del = require("rollup-plugin-delete");
const postcss = require("rollup-plugin-postcss");
const pkg = require("./package.json");
const fs = require("fs");
const minify = require("rollup-plugin-babel-minify");
const analyze = require("rollup-plugin-analyzer");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const svgr = require("@svgr/rollup");
const glob = require("glob");
const typescript = require("@rollup/plugin-typescript");
const { generateTailwindThemeClassesJson } = require("./src/docs/ColorPalette/generateTailwindThemeClassesJson");

// generates tailwind classes for documentation usages.
generateTailwindThemeClassesJson();

if (!/.+\/.+\.js/.test(pkg.module)) throw new Error("module value is incorrect, use DIR/FILE.js like dist/index.js");
const buildDir = 'dist'; // Ensure this matches the `outDir` in tsconfig.json
const filename = pkg.module.slice(pkg.module.lastIndexOf("/") + 1, pkg.module.lastIndexOf("."));

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
    minimize: false,
    inject: false,
    extensions: [".scss", ".css"],
    use: ["sass", "glob-imports"],
    loaders: [
      {
        name: "glob-imports",
        test: /\.(sass|scss)$/,
        process({ code }) {
          return new Promise((resolve, _reject) => {
            const match = [...code.matchAll(/@import\s+(.*\*+.*);/g)];
            match.forEach((m) => {
              const files = glob.sync("./src/" + m[1].replace(/"|'/g, ""));
              let result = files.map((f) => `@import "${f}";`).join("\n");
              code = code.replace(m[0], result);
            });
            resolve({ code });
          });
        },
      },
    ],
  }),

  nodeResolve(),
  babel({
    babelHelpers: "bundled",
  }),
  commonjs(),
  minify({ comments: false }),
  analyze({
    summaryOnly: true,
    limit: 0,
  }),
  typescript({ tsconfig: "./tsconfig.json" }), // Reference tsconfig.json
];

const input = fs.readdirSync("./src/components").reduce(
  (map, file) => {
    const componentName = file.replace(/\.[tj]sx?$/, '');
    map[componentName] = `src/components/${file}`;
    return map;
  },
  { [filename]: pkg.source }
);

const config = [
  {
    input,
    output: [
      {
        dir: buildDir, // Ensure this matches the `outDir` in tsconfig.json
        format: "esm",
        preserveModules: false,
        compact: true,
      },
    ],

    plugins: [del({ targets: [`${buildDir}/**/*`] }), ...plugins],

    external: Object.keys(pkg.peerDependencies || {}),
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
];

module.exports = config;