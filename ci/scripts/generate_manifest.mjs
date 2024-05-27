import { execSync } from "node:child_process"

// const glob = await import(`${root}/glob/glob.js`).then((m) => m.default)
import glob from "glob"
import fs from "fs"
import path from "path"
import url from "url"

const availableArgs = [
  "--base-url=URL_OF_ASSETS_SERVER",
  "--widget-loader-name=NAME",
  "--src=DIR_PATH",
  "--output=FILE_PATH",
  "--verbose|-v",
  "--help|-h",
]

const options = {
  baseUrl: "%BASE_URL%",
  widgetLoaderName: "widget-loader",
  src: path.dirname(url.fileURLToPath(import.meta.url)),
  output: "./manifest.json",
  verbose: false,
  v: false,
}

const args = process.argv.slice(2)

// PARSE ARGS
for (let arg of args) {
  const match = arg.match(/^-{1,2}([^=]+)=?(.*)/)
  if (match) {
    let key = match[1].replace(/\W+(.)/g, function (match, chr) {
      console.log(match, chr)
      return chr.toUpperCase()
    })

    options[key] = match[2] ? match[2] : true

    if (options[key] === "true") options[key] = true
    if (options[key] === "false") options[key] = false
    continue
  }
}
if (options.help || options.h) {
  console.log("Usage: " + availableArgs.join(" "))
}

const PACKAGES_PATHS = ["apps", "libs"]
const rootPath = path.resolve(options.src)
const globPattern = `${rootPath}/@(${PACKAGES_PATHS.join("|")})/**/package.json`
const pathRegex = new RegExp(`^${rootPath}/(.+)/package.json$`)
const files = glob.sync(globPattern, { ignore: [`node_modules/**`,'**/node_modules/**'] })

const manifest = {
  _global: {
    baseUrl: options.baseUrl,
    importMap: {},
  },
}

if (fs.existsSync(`${rootPath}/importmap.json`)) {
  manifest["_global"]["importMap"]["prod"] = `/importmap.json`
}

if (fs.existsSync(`${rootPath}/importmap.dev.json`)) {
  manifest["_global"]["importMap"]["dev"] = `/importmap.dev.json`
}

if (fs.existsSync(`${rootPath}/global/README.md`)) {
  manifest["_global"]["readme"] = "/global/README.md"
}

// console.log(files)
files.sort().forEach(async (file) => {
  // console.log("====", file)
  const pkg = JSON.parse(fs.readFileSync(file))
  const path = file.match(pathRegex)[1]
  let type = PACKAGES_PATHS.find((p) => path.indexOf(p) >= 0)
  type = type && type.slice(0, -1)
  const entryFile = pkg.module || pkg.main
  // console.log(":::", pkg.name, entryFile)
  const entryDir = entryFile.slice(0, entryFile.lastIndexOf("/"))
  const meta = fs.statSync(`${rootPath}/${path}`)

  let totalSize, totalSizeHuman
  try {
    totalSize = execSync(`du -bs ${rootPath}/${path}`).toString().split("\t")[0]
    totalSizeHuman = execSync(`du -bhs ${rootPath}/${path}`)
      .toString()
      .split("\t")[0]
  } catch (e) {
    console.log(e)
  }
  let version = path.indexOf("@latest") > 0 ? "latest" : pkg.version

  manifest[pkg.name] = manifest[pkg.name] || {}
  manifest[pkg.name][version] = {
    type,
    version: pkg.version,
    entryFile: "/" + path + "/" + entryFile,
    entryDir: "/" + path + "/" + entryDir,
    updatedAt: meta.mtime,
    size: totalSize,
    name: pkg.name,
    sizeHuman: totalSizeHuman,
    appProps: pkg.appProps || {},
    appDependencies: pkg.appDependencies,
    appPreview: pkg.appPreview || false,
    kind: pkg.kind,
    appPreview: pkg.appPreview || false,
    author: pkg.author,
    description: pkg.description,
    keywords: pkg.keywords || [],
    license: pkg.license,
    repository: pkg.repository,
  }

  if (fs.existsSync(`${rootPath}/${path}/README.md`)) {
    manifest[pkg.name][version]["readme"] = "/" + path + "/README.md"
  }

  if (fs.existsSync(`${rootPath}/${path}/package.tgz`)) {
    manifest[pkg.name][version]["tarball"] = "/" + path + "/package.tgz"
  }

  if (fs.existsSync(`${rootPath}/${path}/COMMUNICATOR.md`)) {
    manifest[pkg.name][version]["communicatorReadme"] =
      "/" + path + "/COMMUNICATOR.md"
  }
  // console.log(path + "/" + entryDir, meta)
})

if (manifest[options.widgetLoaderName]) {
  manifest["_global"]["widget-loader"] = {
    ...manifest[options.widgetLoaderName],
  }
  delete manifest[options.widgetLoaderName]
}

if (options.verbose || options.v) {
  console.log("==============MANIFEST==============")
  console.log(JSON.stringify(manifest, null, 2))
}

console.log("===", path.resolve(options.output))
fs.writeFileSync(
  path.resolve(options.output),
  JSON.stringify(manifest, null, 2)
)
