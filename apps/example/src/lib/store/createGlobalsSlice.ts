/* eslint-disable no-unused-vars */

/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Globals {
  endpoint: string
  queryClientFnReady: boolean
  tabIndex: number
  currentModal: unknown
  currentPanel: unknown
  actions: GlobalsActions
}

interface GlobalsActions {
  setEndpoint: (newEndpoint: string) => void
  setTabIndex: (newTabIndex: number) => void
  setCurrentModal: (newModal: unknown) => void
  setCurrentPanel: (newPanel: unknown) => void
  setQueryClientFnReady: (readiness: boolean) => void
}

interface State {
  globals: Globals
}

const createGlobalsSlice = (set: (fn: (state: State) => State) => void, _get: () => State) => ({
  globals: {
    endpoint: "",
    queryClientFnReady: false,
    tabIndex: 0,
    currentModal: null,
    currentPanel: null,

    actions: {
      setEndpoint: (newEndpoint: string) =>
        set(
          (state) => ({
            globals: {
              ...state.globals,
              endpoint: newEndpoint,
            },
          }),
          // @ts-ignore
          false,
          "globals.setEndpoint"
        ),
      setTabIndex: (newTabIndex: number) =>
        set(
          (state) => ({
            globals: {
              ...state.globals,
              tabIndex: newTabIndex,
            },
          }),
          // @ts-ignore
          false,
          "globals.setTabIndex"
        ),
      setCurrentModal: (newModal: unknown) =>
        set(
          (state) => ({
            globals: {
              ...state.globals,
              currentModal: newModal,
            },
          }),
          // @ts-ignore
          false,
          "globals.setCurrentModal"
        ),
      setCurrentPanel: (newPanel: unknown) =>
        set(
          (state) => ({
            globals: {
              ...state.globals,
              currentPanel: newPanel,
            },
          }),
          // @ts-ignore
          false,
          "globals.setCurrentPanel"
        ),
      setQueryClientFnReady: (readiness: boolean) =>
        set(
          (state) => ({
            globals: {
              ...state.globals,
              queryClientFnReady: readiness,
            },
          }),
          // @ts-ignore
          false,
          "globals.setQueryClientFnReady"
        ),
    },
  },
})

export default createGlobalsSlice
