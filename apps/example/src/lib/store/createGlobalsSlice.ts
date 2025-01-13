/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// @ts-expect-error TS(7006): Parameter 'set' implicitly has an 'any' type.
const createGlobalsSlice = (set, _get) => ({
  globals: {
    endpoint: "",
    queryClientFnReady: false,
    tabIndex: 0,
    currentModal: null,
    currentPanel: null,

    actions: {
      setEndpoint: (newEndpoint: any) =>
        set(
          (state: any) => ({
            globals: {
              ...state.globals,
              endpoint: newEndpoint,
            },
          }),
          false,
          "globals.setEndpoint"
        ),
      setTabIndex: (newTabIndex: any) =>
        set(
          (state: any) => ({
            globals: {
              ...state.globals,
              tabIndex: newTabIndex,
            },
          }),
          false,
          "globals.setTabIndex"
        ),
      setCurrentModal: (newModal: any) =>
        set(
          (state: any) => ({
            globals: {
              ...state.globals,
              currentModal: newModal,
            },
          }),
          false,
          "globals.setCurrentModal"
        ),
      setCurrentPanel: (newPanel: any) =>
        set(
          (state: any) => ({
            globals: {
              ...state.globals,
              currentPanel: newPanel,
            },
          }),
          false,
          "globals.setCurrentPanel"
        ),
      setQueryClientFnReady: (readiness: any) =>
        set(
          (state: any) => ({
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
