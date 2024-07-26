/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const del = require("rollup-plugin-delete")
const pkg = require("./package.json")
const analyze = require("rollup-plugin-analyzer")
const terser = require("@rollup/plugin-terser")
const babel = require("@rollup/plugin-babel")
const { nodeResolve } = require("@rollup/plugin-node-resolve")
const commonjs = require("@rollup/plugin-commonjs")
const fs = require("fs")

if (!/.+\/.+\.js/.test(pkg.module)) throw new Error("module value is incorrect, use DIR/FILE.js like build/index.js")

const dirFileRegex = /(.+)\/([^/]+)/

if (!dirFileRegex.test(pkg.module))
  throw new Error('package.json: module not found or its format does not match "DIR/FILE.js"')

const [_, srcDir, entryFilename] = pkg.source.match(dirFileRegex)
const [__, buildDir, filename] = pkg.module.match(dirFileRegex)

const input = {}

// bundle every Component in separate file
// it allows to import single components
fs.readdirSync(`./${srcDir}/`)
  .filter((f) => !/.*\.test\..*/.test(f))
  .forEach((file) => {
    // map source file to output file
    let name = file === entryFilename ? filename : file
    name = name.slice(0, name.indexOf("."))
    console.log(file, name)
    input[name] = `./${srcDir}/${file}`
  })

const config = [
  {
    input,
    output: [
      {
        dir: buildDir,
        format: "esm",
        compact: true,
      },
    ],
    plugins: [
      nodeResolve(),
      babel({
        //exclude: "node_modules/**",
        babelHelpers: "bundled",
      }),
      commonjs(),
      del({ targets: [`${buildDir}/**/*`] }),
      terser(),
      analyze({ limit: 0, summaryOnly: true }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
]

module.exports = config
