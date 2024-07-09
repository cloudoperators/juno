/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const esbuild = require("esbuild")
const pkg = require("./package.json")

if (!/.+\/.+\.js/.test(pkg.module))
  throw new Error(
    "module value is incorrect, use DIR/FILE.js like build/index.js"
  )

const isProduction = process.env.NODE_ENV === "production"
const IGNORE_EXTERNALS = process.env.IGNORE_EXTERNALS === "true"

esbuild.build({
  entryPoints: [pkg.source],
  outfile: pkg.module,
  bundle: true,
  minify: isProduction,
  target: ["es2020"],
  format: "esm",
  external:
    isProduction && !IGNORE_EXTERNALS
      ? Object.keys(pkg.peerDependencies || {})
      : [],
})
