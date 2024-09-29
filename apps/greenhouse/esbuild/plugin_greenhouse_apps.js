const path = require("path")
const fs = require("fs")

// Apps root
const APPS_ROOT = path.resolve(__dirname, "../../../", "apps")

// App source folders
const APPS = [
  path.resolve(APPS_ROOT, "supernova"),
  path.resolve(APPS_ROOT, "heureka"),
  path.resolve(APPS_ROOT, "doop"),
  path.resolve(APPS_ROOT, "greenhouse/apps/org-admin"),
]

let envPlugin = {
  name: "env",
  setup(build) {
    let outDir = path.resolve(APPS_ROOT, "greenhouse", build.initialOptions.outdir, "apps")
    build.onStart(() => {
      console.log("copy apps")
      let manifest = {}

      APPS.forEach((app) => {
        const pkg = require(`${app}/package.json`)
        const name = pkg.name?.startsWith("@") ? pkg.name.slice(1) : pkg.name
        const buildFile = pkg.main || pkg.module || "index.js"
        const buildDir = path.dirname(buildFile)
        const appPath = `${outDir}/${name}`
        const relativePath = `/${path.basename(outDir)}/${name}/${buildFile}`

        // Create necessary directories and copy files
        fs.mkdirSync(appPath, { recursive: true })
        fs.cpSync(`${app}/${buildDir}`, `${appPath}/${buildDir}`, { recursive: true })

        // Set manifest for the current package
        manifest[pkg.name] = relativePath
        // Set manifest for backward compatibility
        manifest[pkg.name.replace("@cloudoperators/juno-app-", "")] = relativePath
      })

      // write manifest to appsFolder
      console.log(manifest)
      fs.writeFileSync(`${outDir}/manifest.json`, JSON.stringify(manifest, null, 2), { encoding: "utf-8" })
    })
  },
}

module.exports = envPlugin
