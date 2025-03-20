/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StateCreator } from "zustand"
import { AppState } from "../components/StoreProvider"

export interface GlobalSlice {
  globals: GlobalState
}

interface GlobalState {
  embedded: boolean
  showDetailsFor: string | null
  apiEndpoint?: string
  activeSelectedTab: string
  isURLRead: boolean
  username?: string
  actions: GlobalActions
}

export interface GlobalActions {
  setIsURLRead: () => void
  setShowDetailsFor: (alertID: string | null) => void
  setActiveSelectedTab: (activeSelectedTab: string) => void
}

const validateEmbedded = (embedded: any) => {
  if (embedded === true || embedded === "true") {
    return true
  }
  return false
}

const createGlobalsSlice: (options?: Record<string, any>) => StateCreator<AppState, [], [], GlobalSlice> =
  (options) => (set, get, store) => ({
    globals: {
      embedded: validateEmbedded(options?.embedded),
      showDetailsFor: null,
      apiEndpoint: options?.endpoint,
      activeSelectedTab: "alerts",
      isURLRead: false,
      username: options?.username,

      actions: {
        setIsURLRead: () =>
          set(
            (state) => ({
              globals: { ...state.globals, isURLRead: true },
            }),
            false
          ),

        setShowDetailsFor: (alertID) =>
          set(
            (state) => ({
              // if the alertID is the same as the current one, we want to close the details panel again,
              // otherwise set the new alertID to replace the details in the panel
              globals: {
                ...state.globals,
                showDetailsFor: get().globals.showDetailsFor === alertID ? null : alertID,
              },
            }),
            false
          ),

        setActiveSelectedTab: (activeSelectedTab) =>
          set(
            (state) => ({
              globals: { ...state.globals, activeSelectedTab: activeSelectedTab },
            }),
            false
          ),
      },
    },
  })

export default createGlobalsSlice
