/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const AUTH_ACTIONS = {
  SIGN_ON: "signOn",
  SIGN_OUT: "signOut",
}

const createAuthDataSlice = (set, get) => ({
  auth: {
    data: null,
    loggedIn: false,
    userEditable: true,

    actions: {
      setData: (data) => {
        if (!data) return
        // check if data has changed before updating the state
        if (data?.loggedIn === get().auth.loggedIn && data?.auth === get().auth.data) return

        // If a user has a name, name is not editable in forms.
        // Therefore, we set userEditable to true to set userEditable to !anonymous
        let anonymous = false
        if (data.auth?.parsed?.fullName) {
          anonymous = true
        }

        set(
          (state) => ({
            auth: {
              ...state.auth,
              loggedIn: data?.loggedIn,
              data: data?.auth,
              userEditable: !anonymous,
            },
          }),
          false,
          "auth/setData"
        )
      },
    },
  },
})

export default createAuthDataSlice
