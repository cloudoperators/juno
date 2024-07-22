/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext } from "react"
import PropTypes from "prop-types"
import { useStore as create } from "zustand"
import createStore from "../lib/store"

const StoreContext = createContext()
const StoreProvider = ({ children }) => (
  <StoreContext.Provider value={createStore()}>
    {children}
  </StoreContext.Provider>
)

const useStore = (selector) => create(useContext(StoreContext), selector)

// globals
export const useGlobalsEndpoint = () => useStore((s) => s.globals.endpoint)
export const useGlobalsUrlStateKey = () =>
  useStore((s) => s.globals.urlStateKey)
export const useGlobalsTabIndex = () => useStore((s) => s.globals.tabIndex)
export const useGlobalsQueryClientFnReady = () =>
  useStore((s) => s.globals.queryClientFnReady)
export const useGlobalsCurrentModal = () =>
  useStore((s) => s.globals.currentModal)
export const useGlobalsCurrentPanel = () =>
  useStore((s) => s.globals.currentPanel)
export const useGlobalsActions = () => useStore((s) => s.globals.actions)

// auth
export const useAuthData = () => useStore((state) => state.auth.data)
export const useAuthIsProcessing = () =>
  useStore((state) => state.auth.isProcessing)
export const useAuthLoggedIn = () => useStore((state) => state.auth.loggedIn)
export const useAuthError = () => useStore((state) => state.auth.error)
export const useAuthLastAction = () =>
  useStore((state) => state.auth.lastAction)
export const useAuthActions = () => useStore((state) => state.auth.actions)

StoreProvider.propTypes = {
  children: PropTypes.node,
}
export default StoreProvider
