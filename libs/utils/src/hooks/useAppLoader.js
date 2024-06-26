/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback } from "react"

// load widget-loader with importmap-only attribute to
// ensure the importmap is loaded
const importmaps = {}
const loadWidgetLoaderWithImportmap = (assetsHost) => {
  if (!assetsHost) {
    console.warn(
      "utils#useAppLoader: assetsHost is undefined. Please prove a valid assetsHost"
    )
    return Promise.resolve(false)
  }

  importmaps[assetsHost] =
    importmaps[assetsHost] ||
    // this promise is resolved once!
    new Promise((resolve, reject) => {
      // create a script element into the head to load the importMaps
      const url = new URL("/apps/widget-loader@latest/build/app.js", assetsHost)
      const script = document.createElement("script")
      script.src = url.href
      script.setAttribute("data-importmap-only", "true")
      document.head.append(script)
      window.addEventListener("JUNO_IMPORTMAP_LOADED", (e) => {
        resolve(true)
      })
    })

  return importmaps[assetsHost]
}

/*
  @assetsHost: url of the assetsHost to be able to load the widget-loader with importMap
  ++mount++
  @param container: complete list of items to be displayed
  @param options: options to load the application
    @param options.name: the name of the application hosted in the assets server
    @param options.version: the version of the application hosted in the assets server or 'latest'
    @param options.url: url of the application when the application is not hosted in the assets server
    @param options.props: app props needed to run the application
*/
const useAppLoader = (assetsHost) => {
  const mount = useCallback(
    (container, options) => {
      if (!assetsHost) {
        console.warn(`useAppLoader:: assetsHost is not set`)
        return null
      }

      // check whether the user gave an url or the name of the application to fetch
      if (!options.name && !options.url) {
        console.warn(
          `useAppLoader:: options.name (name der App from assets server) or options.url (url where the app is hosted) is required. Got`,
          options
        )
        return null
      }
      // fetch first the widget-loader (with importMap) before we mount the application
      return loadWidgetLoaderWithImportmap(assetsHost).then(() => {
        console.log("useAppLoader: mount", options, assetsHost)
        const name = options?.name?.startsWith("@")
          ? options.name
          : `@juno/${options.name}`

        let url = options.url
          ? options.url
          : `${name}@${options?.version || "latest"}`
        return importShim(url).then(async (app) => {
          try {
            await app.mount(container, { props: { ...options.props } })
          } catch (error) {
            throw new Error(`useAppLoader:: mount:: ${error}`)
          }

          return app.unmount
        })
      })
    },
    [assetsHost]
  )
  return { mount }
}

export default useAppLoader
