/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext } from "react"
import PropTypes from "prop-types"
import { useStore as create } from "zustand"
import createStore from "../lib/store"

// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
const StoreContext = createContext()
const StoreProvider = ({
 children
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
}: any) => <StoreContext.Provider value={createStore()}>{children}</StoreContext.Provider>

// @ts-expect-error TS(2345): Argument of type 'unknown' is not assignable to pa... Remove this comment to see the full error message
const useStore = (selector: any) => create(useContext(StoreContext), selector)

// globals
export const useGlobalsEndpoint = () => useStore((s: any) => s.globals.endpoint)
export const useGlobalsUrlStateKey = () => useStore((s: any) => s.globals.urlStateKey)
export const useGlobalsTabIndex = () => useStore((s: any) => s.globals.tabIndex)
export const useGlobalsQueryClientFnReady = () => useStore((s: any) => s.globals.queryClientFnReady)
export const useGlobalsCurrentModal = () => useStore((s: any) => s.globals.currentModal)
export const useGlobalsCurrentPanel = () => useStore((s: any) => s.globals.currentPanel)
export const useGlobalsActions = () => useStore((s: any) => s.globals.actions)

// auth
export const useAuthData = () => useStore((state: any) => state.auth.data)
export const useAuthIsProcessing = () => useStore((state: any) => state.auth.isProcessing)
export const useAuthLoggedIn = () => useStore((state: any) => state.auth.loggedIn)
export const useAuthError = () => useStore((state: any) => state.auth.error)
export const useAuthLastAction = () => useStore((state: any) => state.auth.lastAction)
export const useAuthActions = () => useStore((state: any) => state.auth.actions)

StoreProvider.propTypes = {
  children: PropTypes.node,
}
export default StoreProvider
