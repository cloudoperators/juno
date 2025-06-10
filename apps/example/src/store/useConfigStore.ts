/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { create } from "zustand"

interface ConfigState {
  endpoint: string
  isQueryClientReady: boolean
  setEndpoint: (_newEndpoint: string) => void
  setIsQueryClientReady: (_readiness: boolean) => void
}

const useConfigStore = create<ConfigState>((set) => ({
  endpoint: "",
  isQueryClientReady: false,
  setEndpoint: (newEndpoint) => set({ endpoint: newEndpoint }),
  setIsQueryClientReady: (readiness) => set({ isQueryClientReady: readiness }),
}))

export default useConfigStore
