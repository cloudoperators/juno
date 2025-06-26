/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/*
 * TODO: remove this function when hashed routing is no longer used
 * The issue is that When the app is embedded and has hashed routing enabled
 * the value of some query params gets appended by "?org=SOME_ORG" in the URL
 * that could be a bug in tanstack router when it parses query params from hash history
 * therefore this function removes the "?org=SOME_ORG" part from the query param as a workaround.
 */
export const sanitizeSearchString = (str: string) => {
  if (str && str.includes("?org=")) {
    return str.split("?org=")[0]
  }
  return str
}
