/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const createUserActivitySlice = (set: any) => ({
  userActivity: {
    isActive: true,

    actions: {
      setIsActive: (activity: any) => {
        set(
          (state: any) => ({
            userActivity: { ...state.userActivity, isActive: activity },
          }),
          false,
          "userActivity.setIsActive"
        )
      },
    },
  },
})

export default createUserActivitySlice
