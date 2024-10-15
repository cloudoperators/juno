/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const createGlobalsSlice = (set) => ({
  globals: {
    urlStateKey: "",
    apiEndpoint: null,
    token: "",
    namespace: "",
    showDefinitionPanel: false,
    panel: null,

    actions: {
      initialize: (apiEndpoint, token, namespace) =>
        set((state) => ({ globals: { ...state.globals, apiEndpoint, token, namespace } })),
      setUrlStateKey: (newUrlStateKey) =>
        set((state) => ({
          globals: { ...state.globals, urlStateKey: newUrlStateKey },
        })),

      // null, showPlugin, showPluginDefinition, showPluginDefinitionDetail, editPlugin
      setPanel: (showPanel) =>
        set((state) => ({
          globals: { ...state.globals, panel: showPanel },
        })),

      setEndpoint: (apiEndpoint) =>
        set((state) => ({
          globals: { ...state.globals, apiEndpoint: apiEndpoint },
        })),

      setShowDefinitionPanel: (showDefinitionPanel) =>
        set((state) => ({
          globals: {
            ...state.globals,
            showDefinitionPanel: showDefinitionPanel,
          },
        })),
    },
  },
})

export default createGlobalsSlice
