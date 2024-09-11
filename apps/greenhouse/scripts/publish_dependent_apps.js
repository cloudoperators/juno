/**
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 **/

// get directory of the script using vanilla javascript and __dirname
const path = require("path")
const fs = require("fs")

let WWW_DIR = process.argv[2] || path.resolve(__dirname, "../public")
let APPS_FOLDER = `${WWW_DIR}/apps`
// delete old app builds
if (fs.existsSync(APPS_FOLDER)) {
  fs.rmSync(APPS_FOLDER, { recursive: true })
}

// // collect app builds from REPO/apps and REPO/apps/greenhouse/apps and copy them to APPS_FOLDER
const APP_SRC = [
  path.resolve(__dirname, "../../../apps/supernova"),
  path.resolve(__dirname, "../../../apps/heureka"),
  path.resolve(__dirname, "../../../apps/doop"),
  path.resolve(__dirname, "../apps/org-admin"),
  path.resolve(__dirname, "../apps/cluster-admin"),
  path.resolve(__dirname, "../apps/plugin-admin"),
  path.resolve(__dirname, "../apps/secret-admin"),
  path.resolve(__dirname, "../apps/team-admin"),
]

const BACKWARD_COMPATIBILITY = {
  "@cloudoperators/juno-app-supernova": "supernova",
  "@cloudoperators/juno-app-heureka": "heureka",
  "@cloudoperators/juno-app-doop": "doop",
  "@cloudoperators/juno-app-greenhouse-org-admin": "greenhouse-org-admin",
  "@cloudoperators/juno-app-greenhouse-cluster-admin": "greenhouse-cluster-admin",
  "@cloudoperators/juno-app-greenhouse-plugin-admin": "greenhouse-plugin-admin",
  "@cloudoperators/juno-app-greenhouse-secret-admin": "greenhouse-secret-admin",
  "@cloudoperators/juno-app-greenhouse-team-admin": "greenhouse-team-admin",
}

const manifest = {}

APP_SRC.forEach((app) => {
  const pkg = require(`${app}/package.json`)
  const name = pkg.name?.startsWith("@") ? pkg.name.slice(1) : pkg.name
  const version = pkg.version
  // get build folder from package.json main or module
  const buildFile = pkg.main || pkg.module || "index.js"
  const buildDir = path.dirname(buildFile)
  const appPath = `${APPS_FOLDER}/${name}@${version}`
  fs.mkdirSync(appPath, { recursive: true })
  fs.cpSync(`${app}/${buildDir}`, `${appPath}/${buildDir}`, { recursive: true })

  manifest[pkg.name] = manifest[pkg.name] || {}
  manifest[pkg.name][version] = { path: `/${path.basename(APPS_FOLDER)}/${name}@${version}/${buildFile}`, version }
  manifest[pkg.name]["latest"] = { path: `/${path.basename(APPS_FOLDER)}/${name}@${version}/${buildFile}`, version }
  if (BACKWARD_COMPATIBILITY[pkg.name]) {
    manifest[BACKWARD_COMPATIBILITY[pkg.name]] = manifest[BACKWARD_COMPATIBILITY[pkg.name]] || {}
    manifest[BACKWARD_COMPATIBILITY[pkg.name]][version] = {
      path: `/${path.basename(APPS_FOLDER)}/${name}@${version}/${buildFile}`,
      version,
    }
    manifest[BACKWARD_COMPATIBILITY[pkg.name]]["latest"] = {
      path: `/${path.basename(APPS_FOLDER)}/${name}@${version}/${buildFile}`,
      version,
    }
  }
})

// write manifest to APPS_FOLDER
console.log(manifest)
fs.writeFileSync(`${WWW_DIR}/manifest.json`, JSON.stringify(manifest, null, 2), { encoding: "utf-8" })
