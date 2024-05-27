/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const createGlobalsSlice = (set, get, options) => ({
  globals: {
    urlStateKey: options.urlStateKey || "template",

    actions: {
      setUrlStateKey: (newUrlStateKey) =>
        set((state) => ({
          globals: { ...state.globals, urlStateKey: newUrlStateKey },
        })),
    },
  },
})

export default createGlobalsSlice
