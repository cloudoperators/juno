/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext } from "react"
import { useStore as create } from "zustand"
import createStore from "../lib/store"

const StoreContext = createContext()
const StoreProvider = ({ children }) => <StoreContext.Provider value={createStore()}>{children}</StoreContext.Provider>

const useAppStore = (selector) => create(useContext(StoreContext), selector)

export const useGlobalsUrlStateKey = () => useAppStore((state) => state.globals.urlStateKey)
export const useApiEndpoint = () => useAppStore((state) => state.globals.apiEndpoint)
export const useNamespace = () => useAppStore((state) => state.globals.namespace)
export const useToken = () => useAppStore((state) => state.globals.token)
export const useShowDefinitionPanel = () => useAppStore((state) => state.globals.showDefinitionPanel)
export const usePanel = () => useAppStore((state) => state.globals.panel)
export const useGlobalsActions = () => useAppStore((state) => state.globals.actions)

/// Plugin
export const usePluginConfig = () => useAppStore((state) => state.plugin.pluginConfig)
export const useShowDetailsFor = () => useAppStore((state) => state.plugin.showDetailsFor)
export const usePluginActions = () => useAppStore((state) => state.plugin.actions)

export default StoreProvider
