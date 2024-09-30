/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext } from "react"
import { useStore as create } from "zustand"
import createStore from "../lib/store"

const StoreContext = createContext()
const StoreProvider = ({ children }) => <StoreContext.Provider value={createStore()}>{children}</StoreContext.Provider>

const useStore = (selector) => create(useContext(StoreContext), selector)

// Exporting each state separately to avoid unnecessary re-renders
export const useEndpoint = () => useStore((s) => s.endpoint)
export const useNamespace = () => useStore((s) => s.namespace)
export const useToken = () => useStore((s) => s.token)
export const useIsMock = () => useStore((s) => s.isMock)
export const useCurrentTeam = () => useStore((s) => s.currentTeam)
export const useDefaultTeam = () => useStore((s) => s.defaultTeam)
export const useTeamMemberships = () => useStore((s) => s.teamMemberships)
export const useStoreActions = () => useStore((s) => s.actions)

export default StoreProvider
