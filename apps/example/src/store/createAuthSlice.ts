/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable no-unused-vars */

export interface AuthData {
  auth: Record<string, any> | null
  isProcessing: boolean
  loggedIn: boolean
  error: string | null
  data: Record<string, any> | null
  lastAction: Record<string, any>
  actions: {
    setData: (data: Partial<AuthData>) => void
  }
}

interface State {
  auth: AuthData
}

export const AUTH_ACTIONS = {
  SIGN_ON: "signOn",
  SIGN_OUT: "signOut",
}

const createAuthSlice = (set: (fn: (state: State) => State) => void, _get: () => State) => ({
  auth: {
    data: null,
    isProcessing: false,
    loggedIn: false,
    error: null,
    lastAction: {},
    actions: {
      setData: (data: Partial<AuthData>) => {
        if (!data) return
        set(
          (state) => ({
            auth: {
              ...state.auth,
              isProcessing: data?.isProcessing ?? state.auth.isProcessing,
              loggedIn: data?.loggedIn ?? state.auth.loggedIn,
              error: data?.error ?? state.auth.error,
              data: data?.auth ?? state.auth.data,
              lastAction: data?.lastAction ?? state.auth.lastAction,
            },
          }),
          // @ts-ignore
          false,
          "auth/setData"
        )
      },
    },
  },
})

export default createAuthSlice
