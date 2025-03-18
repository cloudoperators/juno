/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StateCreator } from "zustand"
import { AppState } from "../components/StoreProvider"

export interface UserActivitySlice {
  userActivity: UserActivityState
}

interface UserActivityState {
  isActive: boolean
}

export interface UserActivityActions {
  setIsActive: () => void
}
const createUserActivitySlice: StateCreator<AppState, [], [], UserActivitySlice> = (set, get, store) => ({
  userActivity: {
    isActive: true,

    actions: {
      setIsActive: (activity: any) => {
        set(
          (state) => ({
            userActivity: { ...state.userActivity, isActive: activity },
          }),
          false
        )
      },
    },
  },
})

export default createUserActivitySlice
