/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, Dispatch, useContext } from "react"
import { useImmerReducer } from "use-immer"
import { servicesReducer } from "./stateReducer"
import { State, Action, UserView } from "./types"

const StoreContext = createContext<State>({
  selectedView: {
    viewId: UserView.Services,
  },
})
const StoreDispatchContext = createContext<Dispatch<Action>>(() => null)

type ServicesProviderProps = {
  initialState: State
  children: React.ReactNode
}

/**
 * This is just for the MVP to provide a global state to the app for easier app level state management.
 * In a real-world scenario, we would use a more sophisticated state management solution which we need to discuss and agree.
 */
export const StoreProvider = ({ initialState, children }: ServicesProviderProps) => {
  const [state, dispatch] = useImmerReducer(servicesReducer, initialState)

  return (
    <StoreContext.Provider value={state}>
      <StoreDispatchContext.Provider value={dispatch}>{children}</StoreDispatchContext.Provider>
    </StoreContext.Provider>
  )
}

export function useStore() {
  return useContext(StoreContext)
}

export function useDispatch() {
  return useContext(StoreDispatchContext)
}
