/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { create } from "zustand"
import { devtools } from "zustand/middleware"
import createGlobalsSlice, { GlobalsSlice } from "./createGlobalsSlice"
import createPluginSlice, { PluginSlice } from "./createPluginSlice"

type StoreState = GlobalsSlice & PluginSlice

const useStore = create<StoreState>()(
  devtools((set, get, store) => ({
    ...createGlobalsSlice(set, get, store),
    ...createPluginSlice(set, get, store),
  }))
)

export default useStore
