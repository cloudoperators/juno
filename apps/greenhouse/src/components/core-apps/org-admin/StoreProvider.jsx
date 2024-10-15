/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext } from "react"
import { useStore as create } from "zustand"
import createStore from "./lib/store"

const StoreContext = createContext()
const StoreProvider = ({ options, children }) => (
  <StoreContext.Provider value={createStore(options)}>{children}</StoreContext.Provider>
)

const useAppStore = (selector) => create(useContext(StoreContext), selector)

export const useActivePlugin = () => useAppStore((state) => state.active)
export const useActions = () => useAppStore((state) => state.actions)

export default StoreProvider
