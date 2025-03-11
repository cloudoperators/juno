/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { QUERY_FUNCTIONS } from "../api/queryFunctions"
import { useGlobalsApiEndpoint } from "../components/StoreProvider"

export const useBoundQuery = <T>(key: keyof typeof QUERY_FUNCTIONS, { options }: any = {}): UseQueryResult<T> => {
  const endpoint = useGlobalsApiEndpoint()
  const fetchFunction = QUERY_FUNCTIONS[key]
  if (!fetchFunction) {
    throw new Error(`No fetch function mapped for key: ${key}`)
  }

  return useQuery<T>({
    queryKey: [key],
    queryFn: () => fetchFunction(endpoint) as Promise<T>, // Ensure fetch function returns T
    ...options,
  })
}
