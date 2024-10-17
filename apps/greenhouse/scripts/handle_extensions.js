const path = require("path")
const fs = require("fs")

/********************* HANDLE OWN EXTENSIONS ********************/
// copy them from monorepo to greenhouse/extensions

// Apps root
const APPS_ROOT = path.resolve(__dirname, "../../../", "apps")

// App source folders
const APPS = [path.resolve(APPS_ROOT, "supernova"), path.resolve(APPS_ROOT, "heureka"), path.resolve(APPS_ROOT, "doop")]

let outDir = path.resolve(APPS_ROOT, "greenhouse", "public", "extensions")

APPS.forEach((app) => {
  const pkg = require(`${app}/package.json`)
  const name = pkg.name?.startsWith("@") ? pkg.name.slice(1) : pkg.name
  const buildFile = pkg.main || pkg.module || "index.js"
  const buildDir = path.dirname(buildFile)
  const appPath = `${outDir}/${name}`
  // const relativePath = `/${path.basename(outDir)}/${name}/${buildFile}`

  // remove existing app folder (cleanup)
  if (fs.existsSync(appPath)) {
    fs.rmSync(appPath, { recursive: true })
  }
  // Create necessary directories and copy files
  fs.mkdirSync(appPath, { recursive: true })
  fs.cpSync(`${app}/${buildDir}`, `${appPath}/${buildDir}`, { recursive: true })
  fs.cpSync(`${app}/package.json`, `${appPath}/package.json`)
})

/********************* GENERATE MANIFEST ********************/

// find all package.json recursively in extensions folder
// recursive function to find package.json file
function findPackageJson(dir) {
  const files = fs.readdirSync(dir)
  let foundFiles = []
  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.lstatSync(filePath)
    if (stat.isDirectory()) {
      foundFiles = foundFiles.concat(findPackageJson(filePath))
    } else if (file === "package.json") {
      foundFiles.push(filePath)
      continue
    }
  }

  return foundFiles
}

const packageJsons = findPackageJson(outDir)

let manifest = {}
packageJsons.forEach((packageJson) => {
  const pkg = require(packageJson)
  const name = pkg.name?.startsWith("@") ? pkg.name.slice(1) : pkg.name
  const buildFile = pkg.main || pkg.module || "index.js"
  const relativePath = `/${path.basename(outDir)}/${name}/${buildFile}`

  const pkgInfos = {
    path: relativePath,
    version: pkg.version,
  }
  // Set manifest for the current package
  manifest[pkg.name] = pkgInfos
  // Set manifest for backward compatibility
  manifest[pkg.name.replace("@cloudoperators/juno-app-", "")] = pkgInfos
})

// write manifest to extensions folder
fs.writeFileSync(`${outDir}/manifest.json`, JSON.stringify(manifest, null, 2), { encoding: "utf-8" })
