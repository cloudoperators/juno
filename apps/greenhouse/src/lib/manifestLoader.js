const ROOT = new URL(import.meta.url)
let pathPrefix = ROOT.pathname.startsWith("/build") ? "/build" : ""

// Fetch the manifest once
export const getManifest = fetch(new URL(`${pathPrefix}/apps/manifest.json`, ROOT))
  .then((res) => res.json())
  .then((manifest) => {
    for (const key in manifest) {
      manifest[key] = new URL(`${pathPrefix}${manifest[key]}`.replace(/\/\//g, "/"), ROOT).href
    }
    return manifest
  })
