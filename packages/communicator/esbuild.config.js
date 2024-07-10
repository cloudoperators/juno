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
const DEV_FOLDER = "dev"
const outfile = isProduction ? pkg.module : `${DEV_FOLDER}/build.js`
const args = process.argv.slice(2)
const watch = args.indexOf("--watch") >= 0

esbuild
  .context({
    entryPoints: [pkg.source],
    outfile,
    bundle: true,
    minify: isProduction,
    target: ["es2020"],
    format: "esm",
    sourcemap: true,
    external:
      isProduction && !IGNORE_EXTERNALS
        ? Object.keys(pkg.peerDependencies || {})
        : [],
  })
  .then(async (ctx) => {
    if (watch) {
      ctx.watch()
      console.log("watching...")
      ctx
        .serve({
          host: "0.0.0.0",
          port: parseInt(process.env.APP_PORT),
          servedir: DEV_FOLDER,
        })
        .then(({ host, port }) => console.log("serve on", `${host}:${port}`))
    } else {
      await ctx.rebuild()
      await ctx.dispose()
    }
  })
  .catch((error) => console.error(error))
