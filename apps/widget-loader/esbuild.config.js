/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const esbuild = require("esbuild")
const fs = require("node:fs/promises")
const pkg = require("./package.json")
// this function generates app props based on package.json and propSecrets.json
const appProps = require("../../helpers/appProps")

if (!/.+\/.+\.js/.test(pkg.main))
  throw new Error(
    "module value is incorrect, use DIR/FILE.js like build/index.js"
  )

const isProduction = process.env.NODE_ENV === "production"
const IGNORE_EXTERNALS = process.env.IGNORE_EXTERNALS === "true"
const outfile = isProduction ? pkg.main : `public/${pkg.main}`
// get output from outputfile
let outdir = outfile.slice(0, outfile.lastIndexOf("/"))
const args = process.argv.slice(2)
const watch = args.indexOf("--watch") >= 0
const serve = args.indexOf("--serve") >= 0

// helpers for console log
const green = "\x1b[32m%s\x1b[0m"
const yellow = "\x1b[33m%s\x1b[0m"

esbuild
  .context({
    entryPoints: [pkg.source],
    outfile,
    bundle: true,
    minify: isProduction,
    target: ["es2020"],
    format: "iife",
    external:
      isProduction && !IGNORE_EXTERNALS
        ? Object.keys(pkg.peerDependencies || {})
        : [],
    plugins: [
      {
        name: "start/end",
        setup(build) {
          build.onStart(() => {
            console.clear()
            console.log(yellow, "Compiling...")
          })
          build.onEnd(() => console.log(green, "Done!"))
        },
      },
    ],
  })
  .then(async (ctx) => {
    // delete build folder and re-create it as an empty folder
    await fs.rm(outdir, { recursive: true, force: true })
    await fs.mkdir(outdir, { recursive: true })

    // watch and serve
    if (watch || serve) {
      if (watch) await ctx.watch()
      if (serve) {
        // generate app props based on package.json and secretProps.json
        await fs.writeFile(
          `./${outdir}/appProps.js`,
          `export default ${JSON.stringify(appProps())}`
        )

        let { host, port } = await ctx.serve({
          host: "0.0.0.0",
          port: parseInt(process.env.APP_PORT || 3000),
          servedir: "public",
        })
        console.log("serve on", `${host}:${port}`)
      }
    } else {
      await ctx.rebuild()
      await ctx.dispose()
    }
  })
  .catch((error) => console.error(error))
