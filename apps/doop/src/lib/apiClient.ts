/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// Example fetch call. Adjust as needed for your API
export const fetchData = ({
  meta
}: any) => {
  return fetch(`${meta.endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((response) => {
    // @ts-expect-error TS(2339) FIXME: Property 'statusCode' does not exist on type 'Resp... Remove this comment to see the full error message
    if (response.statusCode >= 400) {
      throw new Error(response.statusText)
    }
    return response.json()
  })
}
