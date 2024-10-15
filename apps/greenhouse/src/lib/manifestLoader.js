const ROOT = new URL(import.meta.url)

// Fetch the manifest once
export const getManifest = fetch(new URL(`/extensions/manifest.json`, ROOT))
  .then((res) => res.json())
  .then((manifest) => {
    for (const key in manifest) {
      manifest[key] = new URL(manifest[key]?.path, ROOT).href
    }
    return manifest
  })
  .catch((error) => {
    console.debug("COULD NOT LOAD THE MANIFEST", error)
    return {}
  })
