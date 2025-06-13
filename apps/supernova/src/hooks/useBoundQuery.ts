/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { QUERY_FUNCTIONS } from "../api/queryFunctions"
import { useGlobalsApiEndpoint } from "../components/StoreProvider"

export class CorsNetworkError extends Error {
  constructor(originalError: Error) {
    super(originalError.message)
    this.name = "CorsNetworkError"
    if (originalError.stack) {
      this.stack = originalError.stack
    }
  }
}

function isFirefoxNetworkError(err: unknown): boolean {
  if (!(err instanceof TypeError)) {
    return false
  }

  const message = (err as Error).message || ""

  if (navigator.userAgent.includes("Firefox") && message.includes("NetworkError")) {
    return true
  }

  return false
}

export const useBoundQuery = <T>(key: keyof typeof QUERY_FUNCTIONS, { options }: any = {}): UseQueryResult<T> => {
  const endpoint = useGlobalsApiEndpoint()
  const fetchFunction = QUERY_FUNCTIONS[key]
  if (!fetchFunction) {
    throw new Error(`No fetch function mapped for key: ${key}`)
  }

  return useQuery<T>({
    queryKey: [key],
    queryFn: () =>
      fetchFunction(endpoint).catch((err) => {
        if (isFirefoxNetworkError(err)) {
          throw new CorsNetworkError(err)
        }
        throw err
      }),
    ...options,
  })
}
