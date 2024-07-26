/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const babel = require("@rollup/plugin-babel")
const del = require("rollup-plugin-delete")
const pkg = require("./package.json")
const minify = require("rollup-plugin-babel-minify")
const analyze = require("rollup-plugin-analyzer")
const commonjs = require("@rollup/plugin-commonjs")
const { nodeResolve } = require("@rollup/plugin-node-resolve")

if (!/.+\/.+\.js/.test(pkg.module)) throw new Error("module value is incorrect, use DIR/FILE.js like build/index.js")
const buildDir = pkg.module.slice(0, pkg.module.lastIndexOf("/"))

const config = [
  {
    input: pkg.source,
    output: [
      {
        file: pkg.module,
        format: "esm",
        compact: true,
      },
    ],
    plugins: [
      nodeResolve(),

      babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
      }),
      del({ targets: [`${buildDir}/**/*`] }),
      minify({ comments: false }),
      analyze({ summaryOnly: true, limit: 0 }),
      commonjs(),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
]

module.exports = config
