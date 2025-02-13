/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const createGlobalsSlice = (set: any) => ({
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
