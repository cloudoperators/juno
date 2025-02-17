/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const createGlobalsSlice = (set: any) => ({
  globals: {
    urlStateKey: "",
    apiEndpoint: null,
    loggedIn: false,
    authData: null,

    actions: {
      setUrlStateKey: (newUrlStateKey: any) =>
        set((state: any) => ({
          globals: { ...state.globals, urlStateKey: newUrlStateKey },
        })),

      setLoggedIn: (loggedIn: any) =>
        set((state: any) => ({
          globals: { ...state.globals, loggedIn: loggedIn },
        })),

      setAuthData: (authData: any) =>
        set((state: any) => ({
          globals: { ...state.globals, authData: authData },
        })),

      setEndpoint: (apiEndpoint: any) =>
        set((state: any) => ({
          globals: { ...state.globals, apiEndpoint: apiEndpoint },
        })),
    },
  },
})

export default createGlobalsSlice
