/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const createGlobalsSlice = (set, _get) => ({
  globals: {
    endpoint: "",
    queryClientFnReady: false,
    tabIndex: 0,
    currentModal: null,
    currentPanel: null,

    actions: {
      setEndpoint: (newEndpoint) =>
        set(
          (state) => ({
            globals: {
              ...state.globals,
              endpoint: newEndpoint,
            },
          }),
          false,
          "globals.setEndpoint"
        ),
      setTabIndex: (newTabIndex) =>
        set(
          (state) => ({
            globals: {
              ...state.globals,
              tabIndex: newTabIndex,
            },
          }),
          false,
          "globals.setTabIndex"
        ),
      setCurrentModal: (newModal) =>
        set(
          (state) => ({
            globals: {
              ...state.globals,
              currentModal: newModal,
            },
          }),
          false,
          "globals.setCurrentModal"
        ),
      setCurrentPanel: (newPanel) =>
        set(
          (state) => ({
            globals: {
              ...state.globals,
              currentPanel: newPanel,
            },
          }),
          false,
          "globals.setCurrentPanel"
        ),
      setQueryClientFnReady: (readiness) =>
        set(
          (state) => ({
            globals: {
              ...state.globals,
              queryClientFnReady: readiness,
            },
          }),
          false,
          "globals.setQueryClientFnReady"
        ),
    },
  },
})

export default createGlobalsSlice
