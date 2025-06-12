/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { QUERY_FUNCTIONS } from "../api/queryFunctions"
import { useGlobalsApiEndpoint } from "../components/StoreProvider"

export class CorsOrNetworkError extends Error {
  constructor(public readonly originalError: unknown) {
    super("Possible CORS or network error.")
    this.name = "CorsOrNetworkError"
  }
}

function isPossibleCorsError(err: unknown): boolean {
  const isFirefox = navigator.userAgent.includes("Firefox")

  if (!(err instanceof TypeError)) {
    return false
  }

  const message = (err as Error).message || ""

  if (isFirefox && message.includes("NetworkError")) {
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
        if (isPossibleCorsError(err)) {
          throw new CorsOrNetworkError(err)
        }
        throw err
      }),
    ...options,
  })
}
