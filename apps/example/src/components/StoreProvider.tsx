/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, ReactNode } from "react"
import { useStore as create, StoreApi } from "zustand"

import createStore from "../lib/store"

interface AuthParsedData {
  fullName: string
  avatarUrl: {
    small: string
  }
}

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
  auth: {
    data: {
      parsed?: AuthParsedData
    }
    isProcessing: boolean
    loggedIn: boolean
    error: unknown
    lastAction: unknown
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
export const useGlobalsUrlStateKey = () => useStore((s) => s.globals.urlStateKey)
export const useGlobalsTabIndex = () => useStore((s) => s.globals.tabIndex)
export const useGlobalsQueryClientFnReady = () => useStore((s) => s.globals.queryClientFnReady)
export const useGlobalsCurrentModal = () => useStore((s) => s.globals.currentModal)
export const useGlobalsCurrentPanel = () => useStore((s) => s.globals.currentPanel)
export const useGlobalsActions = () => useStore((s) => s.globals.actions)

// Auth
export const useAuthData = () => useStore((state) => state.auth.data)
export const useAuthIsProcessing = () => useStore((state) => state.auth.isProcessing)
export const useAuthLoggedIn = () => useStore((state) => state.auth.loggedIn)
export const useAuthError = () => useStore((state) => state.auth.error)
export const useAuthLastAction = () => useStore((state) => state.auth.lastAction)
export const useAuthActions = () => useStore((state) => state.auth.actions)

export default StoreProvider
