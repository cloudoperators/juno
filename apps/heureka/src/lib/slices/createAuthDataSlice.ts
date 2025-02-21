/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const AUTH_ACTIONS = {
  SIGN_ON: "signOn",
  SIGN_OUT: "signOut",
}

// @ts-expect-error TS(7006): Parameter 'set' implicitly has an 'any' type.
const createAuthDataSlice = (set, get) => ({
  auth: {
    data: null,
    isProcessing: false,
    loggedIn: false,
    error: null,
    lastAction: {},
    appLoaded: false,
    appIsLoading: false,

    actions: {
      setAppLoaded: (appLoaded: any) => {
        set(
          (state: any) => ({
            auth: { ...state.auth, appLoaded },
          }),
          false,
          "auth/setAppLoaded"
        )
      },
      setData: (data: any) => {
        if (!data) return
        // check if data has changed before updating the state
        if (
          data?.isProcessing === get().auth.isProcessing &&
          data?.loggedIn === get().auth.loggedIn &&
          data?.error === get().auth.error &&
          data?.auth === get().auth.data
        )
          return

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
      setAction: (name: any) =>
        set(
          (state: any) => ({
            auth: {
              ...state.auth,
              lastAction: { name: name, updatedAt: Date.now() },
            },
          }),
          false,
          "auth/setAction"
        ),
      login: () => get().auth.actions.setAction(AUTH_ACTIONS.SIGN_ON),
      logout: () => get().auth.actions.setAction(AUTH_ACTIONS.SIGN_OUT),
    },
  },
})

export default createAuthDataSlice
