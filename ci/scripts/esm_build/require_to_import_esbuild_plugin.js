// source: https://github.com/evanw/esbuild/issues/566
// This transformation isn't done automatically because it's impossible in the general
// case to preserve the semantics of the original code when you do this.
// It's a lossy transformation. Evaluation order would be changed and conditional
// imports would be changed into unconditional imports.
// If you are ok with changing the semantics of your code, another way to work around
// this is to use a plugin to convert require calls to import statements:
// convert require to import (cjs to esm)
const require2import = {
  name: "external",
  setup(build) {
    let escape = (text) => `^${text.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")}$`
    let filter = new RegExp(build.initialOptions.external.map(escape).join("|"))
    build.onResolve({ filter: /.*/, namespace: "external" }, (args) => ({
      path: args.path,
      external: true,
    }))
    build.onResolve({ filter }, (args) => ({
      path: args.path,
      namespace: "external",
    }))
    build.onLoad({ filter: /.*/, namespace: "external" }, (args) => {
      return {
        contents: `export * from ${JSON.stringify(args.path)}`,
      }
    })
  },
}

module.exports = require2import
