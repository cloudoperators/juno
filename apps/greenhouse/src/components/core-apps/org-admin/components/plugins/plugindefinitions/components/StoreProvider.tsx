/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { createContext, useContext } from "react"

import { useStore as create } from "zustand"
// @ts-expect-error TS(2792): Cannot find module '../lib/store'. Did you mean to... Remove this comment to see the full error message
import createStore from "../lib/store"

// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
const StoreContext = createContext()
const StoreProvider = ({ children }: any) => (
  <StoreContext.Provider value={createStore()}>{children}</StoreContext.Provider>
)
// @ts-ignore
const useAppStore = (selector: any) => create(useContext(StoreContext), selector)

export const useGlobalsUrlStateKey = () => useAppStore((state: any) => state.globals.urlStateKey)
export const useGlobalsActions = () => useAppStore((state: any) => state.globals.actions)

export default StoreProvider
