/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext } from "react"

import { useStore as create } from "zustand"
import createStore from "../lib/store"

// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
const StoreContext = createContext()
const StoreProvider = ({ options, children }: any) => (
  <StoreContext.Provider value={createStore(options || {})}>{children}</StoreContext.Provider>
)

// build a hook from the store
// @ts-expect-error TS(2571): Object is of type 'unknown'.
const useStore = (selector: any) => create(useContext(StoreContext).store, selector)

// APPS
// @ts-expect-error TS(2571): Object is of type 'unknown'.
export const usePlugin = () => useContext(StoreContext).plugin

// GLOBAL
export const useGlobalsApiEndpoint = () => useStore((s: any) => s.globals.apiEndpoint)
export const useGlobalsAssetsHost = () => useStore((s: any) => s.globals.assetsHost)

export default StoreProvider
