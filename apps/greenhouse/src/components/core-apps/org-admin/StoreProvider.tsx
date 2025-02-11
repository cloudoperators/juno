/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext } from "react"

import { useStore as create } from "zustand"
import createStore from "./lib/store"

// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
const StoreContext = createContext()
const StoreProvider = ({ options, children }: any) => (
  // @ts-expect-error TS(2554): Expected 0 arguments, but got 1.
  <StoreContext.Provider value={createStore(options)}>{children}</StoreContext.Provider>
)
// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
const useAppStore = (selector: any) => create(useContext(StoreContext), selector)

export const useActivePlugin = () => useAppStore((state: any) => state.active)
export const useActions = () => useAppStore((state: any) => state.actions)

export default StoreProvider
