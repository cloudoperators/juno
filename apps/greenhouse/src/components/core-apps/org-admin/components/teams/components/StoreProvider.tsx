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
// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
const useStore = (selector: any) => create(useContext(StoreContext), selector)

// Exporting each state separately to avoid unnecessary re-renders
export const useEndpoint = () => useStore((s: any) => s.endpoint)
export const useNamespace = () => useStore((s: any) => s.namespace)
export const useToken = () => useStore((s: any) => s.token)
export const useCurrentTeam = () => useStore((s: any) => s.currentTeam)
export const useDefaultTeam = () => useStore((s: any) => s.defaultTeam)
export const useTeamMemberships = () => useStore((s: any) => s.teamMemberships)
export const useStoreActions = () => useStore((s: any) => s.actions)

export default StoreProvider
