/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useGlobalsApiEndpoint } from "../components/StoreProvider"

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

const fetchSilences = async (endpoint) => {
  try {
    const response = await fetch(`${endpoint}/silences`)

    if (!response.ok) {
      // Parse the error object from the response body
      const errorObject = await response.json().catch(() => {
        throw new Error(`Unexpected error: Unable to parse error response.`)
      })

      // Throw the error object directly
      throw errorObject
    }

    const items = await response.json() // Parse JSON data

    // Return the structured result
    return {
      silences: items,
    }
  } catch (error) {
    console.error(error)
    throw error // Let React Query handle the error
  }
}
