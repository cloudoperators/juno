/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// Example fetch call. Adjust as needed for your API
export const fetchData = ({ meta }) => {
  return fetch(`${meta.endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((response) => {
    if (response.statusCode >= 400) {
      throw new Error(response.statusText)
    }
    return response.json()
  })
}
