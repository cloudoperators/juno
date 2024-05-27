/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { create } from "zustand"

// global zustand store. See how this works here: https://github.com/pmndrs/zustand
const useStore = create((set) => ({
  manifestUrl: "",
  setManifestUrl: (newUrl) => set((state) => ({ manifestUrl: newUrl })),
  assetsUrl: "",
  setAssetsUrl: (newUrl) => set((state) => ({ assetsUrl: newUrl })),
  origin: "",
  setOrigin: (newOrigin) => set((state) => ({ origin: newOrigin })),
  embedded: false,
  setEmbedded: (embedded) => set((state) => ({ embedded: embedded })),
  urlStateKey: "assets-overview",
  urlStateTestingKey: "assets-overview-testing",
}))

export default useStore
