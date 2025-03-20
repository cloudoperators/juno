/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import { StateCreator } from "zustand"

// Define the state structure
interface GlobalState {
  urlStateKey: string
  apiEndpoint: string | null
  token: string
  namespace: string
  showDefinitionPanel: boolean
  panel: string | null
}

// Define the actions (functions to modify state)
interface GlobalActions {
  initialize: (apiEndpoint: string, token: string, namespace: string) => void
  setUrlStateKey: (newUrlStateKey: string) => void
  setPanel: (showPanel: string | null) => void
  setEndpoint: (apiEndpoint: string) => void
  setShowDefinitionPanel: (showDefinitionPanel: boolean) => void
}

// Define the complete slice (state + actions)
export interface GlobalsSlice {
  globals: GlobalState & { actions: GlobalActions }
}

const createGlobalsSlice: StateCreator<GlobalsSlice, [], [], GlobalsSlice> = (set) => ({
  globals: {
    urlStateKey: "",
    apiEndpoint: null,
    token: "",
    namespace: "",
    showDefinitionPanel: false,
    panel: null,

    actions: {
      initialize: (apiEndpoint: any, token: any, namespace: any) =>
        set((state: any) => ({
          globals: { ...state.globals, apiEndpoint, token, namespace },
        })),
      setUrlStateKey: (newUrlStateKey: any) =>
        set((state: any) => ({
          globals: { ...state.globals, urlStateKey: newUrlStateKey },
        })),

      // null, showPlugin, showPluginDefinition, showPluginDefinitionDetail, editPlugin
      setPanel: (showPanel: any) =>
        set((state: any) => ({
          globals: { ...state.globals, panel: showPanel },
        })),

      setEndpoint: (apiEndpoint: any) =>
        set((state: any) => ({
          globals: { ...state.globals, apiEndpoint: apiEndpoint },
        })),

      setShowDefinitionPanel: (showDefinitionPanel: any) =>
        set((state: any) => ({
          globals: {
            ...state.globals,
            showDefinitionPanel: showDefinitionPanel,
          },
        })),
    },
  },
})

export default createGlobalsSlice
