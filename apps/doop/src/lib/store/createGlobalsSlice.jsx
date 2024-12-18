/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const createGlobalsSlice = (set) => ({
  globals: {
    endpoint: "",

    actions: {
      setEndpoint: (endpoint) =>
        set((state) => ({ globals: { ...state.globals, endpoint: endpoint } }), false, "globals/setEndpoint"),
    },
  },
})

export default createGlobalsSlice
