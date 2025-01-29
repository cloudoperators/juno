/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext } from "react"
import { useStore as create } from "zustand"
import createStore from "../lib/store"

const StoreContext = createContext()
const StoreProvider = ({ options, children }) => (
  <StoreContext.Provider value={createStore(options || {})}>{children}</StoreContext.Provider>
)

// build a hook from the store
const useStore = (selector) => create(useContext(StoreContext).store, selector)

// APPS
export const usePlugin = () => useContext(StoreContext).plugin

// GLOBAL
export const useGlobalsApiEndpoint = () => useStore((s) => s.globals.apiEndpoint)
export const useGlobalsAssetsHost = () => useStore((s) => s.globals.assetsHost)

export default StoreProvider
