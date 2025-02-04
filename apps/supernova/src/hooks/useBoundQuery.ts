/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useQuery } from "@tanstack/react-query"
import { QUERY_FUNCTIONS } from "../api/queryFunctions"
import { useGlobalsApiEndpoint } from "../components/StoreProvider"

export const useBoundQuery = (key: any, { options }: any = {}) => {
  const endpoint = useGlobalsApiEndpoint()
  // @ts-expect-error TS(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  const fetchFunction = QUERY_FUNCTIONS[key]
  if (!fetchFunction) {
    throw new Error(`No fetch function mapped for key: ${key}`)
  }

  return useQuery({
    queryKey: [key], // Pass variables into the key
    queryFn: () => fetchFunction(endpoint), // Pass variables to the fetch function
    ...options, // Include any additional options
  })
}
