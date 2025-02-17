/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext } from "react"

import { useStore as create } from "zustand"
import createStore from "../lib/store"

// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
const StoreContext = createContext()
const StoreProvider = ({ children }: any) => (
  <StoreContext.Provider value={createStore()}>{children}</StoreContext.Provider>
)
// @ts-ignore
const useAppStore = (selector: any) => create(useContext(StoreContext), selector)

export const useGlobalsUrlStateKey = () => useAppStore((state: any) => state.globals.urlStateKey)
export const useApiEndpoint = () => useAppStore((state: any) => state.globals.apiEndpoint)
export const useLoggedIn = () => useAppStore((state: any) => state.globals.loggedIn)
export const useAuthData = () => useAppStore((state: any) => state.globals.authData)

export const useGlobalsActions = () => useAppStore((state: any) => state.globals.actions)

/// Plugin
export const usePluginConfig = () => useAppStore((state: any) => state.plugin.pluginConfig)
export const useShowDetailsFor = () => useAppStore((state: any) => state.plugin.showDetailsFor)

export const usePluginActions = () => useAppStore((state: any) => state.plugin.actions)

export default StoreProvider
