/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { getManifest } from "./manifestLoader.js"

export async function mount(containerElement, { name, url, appProps }) {
  if (!url) {
    // load the manifest
    const manifest = await getManifest.catch((error) => {
      console.debug("COULD NOT LOAD THE MANIFEST", error)
    })

    // get the path for the app
    url = manifest?.[name]
    if (!url) {
      console.debug("APP NOT FOUND IN MANIFEST", name)
      return false
    }
  }

  console.debug("===Load App:", name, url)
  try {
    // Dynamically import the module and extract its mount function
    const { mount } = await import(url)

    // Mount the module with the provided container element and props
    await mount(containerElement, { props: appProps })

    return true // Return true if the module was successfully mounted
  } catch (error) {
    console.debug(`Error loading or mounting ${name}:`, error)
    return false // Return false if there was an error during import or mount
  }
}
