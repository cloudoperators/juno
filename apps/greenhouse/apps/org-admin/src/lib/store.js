/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createStore } from "zustand"
import { devtools } from "zustand/middleware"

export default (options) => {
  return createStore(
    devtools((set, get) => ({
      isUrlStateSetup: false,
      apiEndpoint: options.apiEndpoint,
      active: "clusters",
      authData: {
        loggedIn: false,
        error: null,
        data: null,
      },
      authAppLoaded: false,

      actions: {
        setPluginActive: (pluginId) => {
          set(
            (state) => {
              state.active = pluginId
            },
            false,
            "setPluginActive"
          )
        },
        setIsUrlStateSetup: (isSetup) =>
          set(
            (state) => {
              state.isUrlStateSetup = isSetup
            },
            false,
            "setIsUrlStateSetup"
          ),
        setAuthData: (data) =>
          set(
            (state) => ({
              authData: {
                ...state.auth,
                loggedIn: data ? data.loggedIn : false,
                error: data ? data.error : null,
                data: data ? data.auth : null,
              },
            }),
            false,
            "setAuthData"
          ),
        setAuthAppLoaded: (loaded) =>
          set(
            (state) => {
              state.authAppLoaded = loaded
            },
            false,
            "setAuthAppLoaded"
          ),
      },
    }))
  )
}
