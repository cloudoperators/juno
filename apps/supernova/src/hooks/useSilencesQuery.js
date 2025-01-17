/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useGlobalsApiEndpoint } from "../components/StoreProvider"

import { fetchSilences } from "../api/silences"

export const useSilencesQuery = (key, { options = {} } = {}) => {
  const queryClient = useQueryClient()
  const endpoint = useGlobalsApiEndpoint()

  if (!fetchSilences) {
    throw new Error(`No fetch function mapped for key: ${key}`)
  }

  return useQuery({
    queryKey: ["silences"],
    queryFn: async () => {
      const data = await fetchSilences(endpoint)

      // Update the cache
      queryClient.setQueryData(["silences"], data)

      return data
    },
    ...options, // Include any additional options like staleTime, retry, etc.
  })
}
