/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const validateURL = (string) => {
  try {
    new URL(string) // Try to create a URL object
    return string // If successful, it's a valid URL
  } catch {
    console.warn(`(greenhouse) Invalid URL provided: ${string}`) // Log a warning if URL is invalid
    return "" // If an error occurs, it's not a valid URL
  }
}

const createGlobalsSlice = (set, get, options) => ({
  globals: {
    apiEndpoint: validateURL(options.apiEndpoint),
    assetsHost: validateURL(options.currentHost),
    isUrlStateSetup: false,

    actions: {
      setIsUrlStateSetup: (setup) =>
        set(
          (state) => ({
            globals: { ...state.globals, isUrlStateSetup: setup },
          }),
          false,
          "globals/setIsUrlStateSetup"
        ),
    },
  },
})

export default createGlobalsSlice
