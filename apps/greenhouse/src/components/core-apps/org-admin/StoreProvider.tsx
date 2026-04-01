/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext } from "react"

import { useStore as create } from "zustand"
import createStoreFactory from "./lib/store"

const StoreContext = createContext<ReturnType<typeof createStoreFactory> | null>(null)
const StoreProvider = ({ children }: any) => (
  <StoreContext.Provider value={createStoreFactory()}>{children}</StoreContext.Provider>
)
const useAppStore = (selector: any) => {
  const store = useContext(StoreContext)
  if (!store) throw new Error("useAppStore must be used within StoreProvider")
  return create(store, selector)
}

export const useActivePlugin = () => useAppStore((state: any) => state.active)
export const useActions = () => useAppStore((state: any) => state.actions)

export default StoreProvider
