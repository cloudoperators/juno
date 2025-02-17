/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createStore } from "zustand"
import { devtools } from "zustand/middleware"
import Plugin from "./plugin"

const validateURL = (string: any) => {
  try {
    new URL(string) // Try to create a URL object
    return string // If successful, it's a valid URL
  } catch {
    console.warn(`(greenhouse) Invalid URL provided: ${string}`) // Log a warning if URL is invalid
    return "" // If an error occurs, it's not a valid URL
  }
}

export default (options: any) => {
  const store = createStore(
    devtools(() => ({
      globals: {
        apiEndpoint: validateURL(options.apiEndpoint),
        assetsHost: validateURL(options.currentHost),
        isUrlStateSetup: false,
      },
    }))
  )

  const plugin = Plugin(options)

  return { store, plugin }
}
