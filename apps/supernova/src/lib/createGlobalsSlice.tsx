/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const validateEmbedded = (embedded: any) => {
  if (embedded === true || embedded === "true") {
    return true
  }
  return false
}

// @ts-expect-error TS(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
const createGlobalsSlice = (set, get, options) => ({
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
          (state: any) => ({
            globals: { ...state.globals, isURLRead: true },
          }),
          false,
          "globals/setURLRead"
        ),

      setShowDetailsFor: (alertID: any) =>
        set(
          (state: any) => ({
            // if the alertID is the same as the current one, we want to close the details panel again,
            // otherwise set the new alertID to replace the details in the panel
            globals: {
              ...state.globals,
              showDetailsFor: get().globals.showDetailsFor === alertID ? null : alertID,
            },
          }),
          false,
          "globals/setShowDetailsFor"
        ),

      setActiveSelectedTab: (activeSelectedTab: any) =>
        set(
          (state: any) => ({
            globals: { ...state.globals, activeSelectedTab: activeSelectedTab },
          }),
          false,
          "globals/setShowDetailsFor"
        ),
    },
  },
})

export default createGlobalsSlice
