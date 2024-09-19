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
      // The following method is a temporary fix and should be refactored
      // We preset the support group filter based on auth data. This should be done
      // with predefined filters prop
      setSupportGroup: (supportGroup) => {
        if (!supportGroup) return
        const activeFilters = get().filters.activeFilters
        if (Object.keys(activeFilters).length === 0 && get().filters.labels?.includes("support_group")) {
          get().filters.actions.setActiveFilters({ support_group: supportGroup })
        }
      },
      setData: (data) => {
        if (!data) return
        // check if data has changed before updating the state
        if (data?.loggedIn === get().auth.loggedIn && data?.auth === get().auth.data) return

        set(
          (state) => ({
            auth: {
              ...state.auth,
              loggedIn: data?.loggedIn,
              data: data?.auth,
              userEditable: !!data.auth?.parsed?.fullName,
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
