/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import glob from "glob"
import path from "path"
import fs from "fs"
import { exec } from "child_process"

const DIRNAME = path.dirname(process.argv[1])

const files = glob.sync(`${DIRNAME}/../libs/**/package.json`, {
  ignore: ["**/node_modules/**"],
})

files.forEach((pkgFile) => {
  const pkg = JSON.parse(fs.readFileSync(pkgFile))

  exec(`npm --workspace ${pkg.name} run build`, (error, stdout, stderr) => {
    console.log("----------------------------------")
    console.log("BUILD LIB", pkg.name)
    console.log("----------------------------------")
    if (error) {
      console.log(error.message)
      return
    }
    if (stderr) {
      console.log(stderr)
      return
    }
    console.log(stdout)
  })
})
