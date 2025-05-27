/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, ReactNode } from "react"
import { useStore as create, StoreApi } from "zustand"

import createStore from "."

/* eslint-disable no-unused-vars */
interface Actions {
  setCurrentPanel: (panel: unknown) => void
  setCurrentModal: (modal: unknown) => void
  setTabIndex: (index: number) => void
}

interface StoreState {
  globals: {
    endpoint: string
    urlStateKey: string
    tabIndex: number
    queryClientFnReady: boolean
    currentModal: unknown
    currentPanel: unknown
    actions: Actions
  }
}

interface StoreProviderProps {
  children: ReactNode
}

const StoreContext = createContext<StoreApi<StoreState> | null>(null)

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => (
  // @ts-ignore
  <StoreContext.Provider value={createStore()}>{children}</StoreContext.Provider>
)

const useStore = <T,>(selector: (state: StoreState) => T) => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider")
  }
  return create(store, selector)
}

// Globals
export const useGlobalsEndpoint = () => useStore((s) => s.globals.endpoint)
export const useGlobalsTabIndex = () => useStore((s) => s.globals.tabIndex)
export const useGlobalsQueryClientFnReady = () => useStore((s) => s.globals.queryClientFnReady)
export const useGlobalsCurrentModal = () => useStore((s) => s.globals.currentModal)
export const useGlobalsCurrentPanel = () => useStore((s) => s.globals.currentPanel)
export const useGlobalsActions = () => useStore((s) => s.globals.actions)

export default StoreProvider
