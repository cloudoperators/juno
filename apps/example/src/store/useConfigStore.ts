/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable no-unused-vars */

import { create } from "zustand"

interface ConfigState {
  endpoint: string
  isQueryClientReady: boolean
  setEndpoint: (newEndpoint: string) => void
  setIsQueryClientReady: (readiness: boolean) => void
}

const useConfigStore = create<ConfigState>((set) => ({
  endpoint: "",
  isQueryClientReady: false,
  setEndpoint: (newEndpoint) => set({ endpoint: newEndpoint }),
  setIsQueryClientReady: (readiness) => set({ isQueryClientReady: readiness }),
}))

export default useConfigStore
