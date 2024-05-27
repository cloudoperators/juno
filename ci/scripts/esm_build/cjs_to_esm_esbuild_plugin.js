// convert named cjs exports to esm
// resolve named exports using node's require
// then get all keys from the required module
// and export them as named exports in the esm format
const cjs_to_esm_plugin = {
  name: "cjs-to-esm",
  setup(build) {
    build.onResolve({ filter: /.*/ }, (args) => {
      if (args.importer === "") return { path: args.path, namespace: "c2e" }
    })
    build.onLoad({ filter: /.*/, namespace: "c2e" }, (args) => {
      const keys = Object.keys(require(args.path)).join(", ")
      const path = JSON.stringify(args.path)
      const resolveDir = __dirname
      return {
        contents: `export { default, ${keys} } from ${path}`,
        resolveDir,
      }
    })
  },
}

module.exports = cjs_to_esm_plugin
