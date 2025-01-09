/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useQuery, useQueryClient } from "@tanstack/react-query"
import { QUERY_FUNCTIONS } from "../api/queryFunctions"
import { useGlobalsApiEndpoint } from "../components/StoreProvider"

export const useBoundQuery = (key, { options = {} } = {}) => {
  const queryClient = useQueryClient()
  const endpoint = useGlobalsApiEndpoint()
  const fetchFunction = QUERY_FUNCTIONS[key]

  if (!fetchFunction) {
    throw new Error(`No fetch function mapped for key: ${key}`)
  }

  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      const data = await fetchFunction(endpoint)

      // Update the cache
      queryClient.setQueryData([key], data)

      return data
    },
    ...options, // Include any additional options like staleTime, retry, etc.
  })
}
