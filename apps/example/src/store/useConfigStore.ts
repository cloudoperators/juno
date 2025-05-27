/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable no-unused-vars */

import { create } from "zustand"

interface ConfigState {
  endpoint: string
  queryClientFnReady: boolean
  setEndpoint: (newEndpoint: string) => void
  setQueryClientFnReady: (readiness: boolean) => void
}

const useConfigStore = create<ConfigState>((set) => ({
  endpoint: "",
  queryClientFnReady: false,
  setEndpoint: (newEndpoint) => set({ endpoint: newEndpoint }),
  setQueryClientFnReady: (readiness) => set({ queryClientFnReady: readiness }),
}))

export default useConfigStore
