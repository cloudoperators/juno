const fs = require("fs")
const path = require("path")
const semverSatisfies = require("semver/functions/satisfies")
const semverCoerce = require("semver/functions/coerce")

function colorize(color, output) {
  return ["\x1b[", color, "m", output, "\x1b[0m"].join("")
}
const green = (text) => colorize(32, text)
const yellow = (text) => colorize(33, text)
const red = (text) => colorize(31, text)
const blue = (text) => colorize(34, text)
const cyan = (text) => colorize(36, text)

// read the command line arguments
const args = process.argv.slice(2)

// default options
const options = {
  manifest: null,
  src: "./",
}

// parse the command line arguments
args.forEach((arg) => {
  let [key, value] = arg.split("=")
  // convert dash-case to camelCase
  key = key.replace(/^-+/g, "").replace(/-([^-])/g, (_, a) => a.toUpperCase())
  options[key] = value
})

// log given options
console.log(cyan("INFO:"), "delete obsolete assets in " + options.src)
console.log(cyan("OPTIONS:"), options)
// exit if the manifest is not provided
if (!options.manifest) {
  console.error(
    "Please provide a source of the json file (manifest) containing the list of obsolete assets (e.g. --manifest=obsolete_assets.json."
  )
  process.exit(1)
}

async function deleteAssets(src, obsoleteAssets) {
  fs.readdirSync(src).forEach(async (file) => {
    // build absolute path of the file
    const filePath = path.join(src, file)
    // return if the path is a file
    if (fs.lstatSync(filePath).isFile()) return

    const match = file.match(/^(.*)@(.*)$/)
    if (match) {
      const name = match[1]
      const version = match[2]
      const obsoleteVersions = obsoleteAssets[name]

      if (obsoleteVersions) {
        process.stdout.write(
          cyan("FOUND:") +
            " " +
            blue(file) +
            ", " +
            yellow(`obsolete versions: ${obsoleteVersions} `)
        )

        if (
          obsoleteVersions === "*" ||
          semverSatisfies(semverCoerce(version), obsoleteVersions)
        ) {
          process.stdout.write(red("delete"))
          fs.rmSync(filePath, { recursive: true })
        } else {
          process.stdout.write(green("keep"))
        }
        process.stdout.write("\n")
      }
    } else {
      deleteAssets(filePath, obsoleteAssets)
    }
  })
}
const obsoleteAssetsString = fs.readFileSync(options.manifest, "utf-8")
console.log(cyan("OBSOLETE ASSETS:"), yellow(obsoleteAssetsString))
const obsoleteAssets = JSON.parse(obsoleteAssetsString)
deleteAssets(options.src, obsoleteAssets)
