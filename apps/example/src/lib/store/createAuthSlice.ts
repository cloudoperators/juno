/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const AUTH_ACTIONS = {
  SIGN_ON: "signOn",
  SIGN_OUT: "signOut",
}

// @ts-expect-error TS(7006): Parameter 'set' implicitly has an 'any' type.
const createAuthSlice = (set, _get) => ({
  auth: {
    data: null,
    isProcessing: false,
    loggedIn: false,
    error: null,
    lastAction: {},
    actions: {
      setData: (data: any) => {
        if (!data) return
        set(
          (state: any) => ({
            auth: {
              ...state.auth,
              isProcessing: data?.isProcessing,
              loggedIn: data?.loggedIn,
              error: data?.error,
              data: data?.auth,
            },
          }),
          false,
          "auth/setData"
        )
      },
    },
  },
})

export default createAuthSlice
