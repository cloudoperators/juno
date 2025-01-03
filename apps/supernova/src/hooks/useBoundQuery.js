/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useQuery } from "@tanstack/react-query"
import { QUERY_FUNCTIONS } from "../api/queryFunctions"
import { useGlobalsApiEndpoint } from "../components/StoreProvider"

export const useBoundQuery = (key, { options } = {}) => {
  const endpoint = useGlobalsApiEndpoint()
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
