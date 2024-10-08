/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const createGlobalsSlice = (set) => ({
  globals: {
    apiEndpoint: "",
    assetsHost: "",
    environment: "",
    isUrlStateSetup: false,
    demoMode: false,
    demoUserToken: null,

    actions: {
      setApiEndpoint: (value) =>
        set((state) => ({ globals: { ...state.globals, apiEndpoint: value } }), false, "globals/setApiEndpoint"),

      setEnvironment: (value) =>
        set((state) => ({ globals: { ...state.globals, environment: value } }), false, "globals/setEnvironment"),
      setAssetsHost: (value) =>
        set((state) => ({ globals: { ...state.globals, assetsHost: value } }), false, "globals/setAssetsHost"),
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
