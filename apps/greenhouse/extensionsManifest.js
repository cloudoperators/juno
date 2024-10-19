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
  doop: import("@cloudoperators/juno-app-doop"),
  heureka: import("@cloudoperators/juno-app-heureka"),
  supernova: import("@cloudoperators/juno-app-supernova"),
}
