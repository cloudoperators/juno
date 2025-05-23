/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import packageData from "./package.json"

// here we define the extensions that are available in the greenhouse app
// all extensions begin with the prefix "@cloudoperators/juno-app-"
// are loaded from this repo.
// However, it is possible to load extensions from the extensions folder.
// This is done by adding the extension to the extensions folder and
// the extensionsManifest.js file.
// example:
//  copy to extensions/app-name
//  extensionsManifest.js: "app-name": import("./extensions/app-name")
export const extensionResolvers = {
  // @ts-ignore
  doop: import("@cloudoperators/juno-app-doop"),
  // @ts-ignore
  supernova: import("@cloudoperators/juno-app-supernova"),
  // @ts-ignore
  heureka: import("@cloudoperators/juno-app-heureka"),
}

// here we define the versions of the extensions
export const extensionVersions = {
  doop: packageData.dependencies["@cloudoperators/juno-app-doop"],
  heureka: packageData.dependencies["@cloudoperators/juno-app-heureka"],
  supernova: packageData.dependencies["@cloudoperators/juno-app-supernova"],
}
