/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const createGlobalsSlice = (set: any) => ({
  globals: {
    endpoint: "",
    isUrlRead: false,

    actions: {
      setEndpoint: (endpoint: any) =>
        set(
          (state: any) => ({
            globals: { ...state.globals, endpoint: endpoint },
          }),
          false,
          "globals/setEndpoint"
        ),
      setIsUrlRead: () =>
        set(
          (state: any) => ({
            globals: { ...state.globals, isUrlRead: true },
          }),
          false
        ),
    },
  },
})

export default createGlobalsSlice
