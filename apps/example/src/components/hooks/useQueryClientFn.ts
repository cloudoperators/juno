/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react"
import { useQueryClient } from "@tanstack/react-query"

import { Peak } from "../../mocks/db"
import useConfigStore from "../../store/useConfigStore"

interface PeakAddParams {
  formState: Partial<Peak>
}

interface PeakActiontParams extends PeakAddParams {
  id: string
}

class HTTPError extends Error {
  statusCode: number
  constructor(code: number, message: string) {
    super(message || `${code}`)
    this.name = "HTTPError"
    this.statusCode = code
  }
}

const encodeUrlParamsFromObject = (options: Record<string, string | number | boolean>): string => {
  if (!options || Object.keys(options).length <= 0) return ""

  return Object.entries(options)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&")
}

const checkStatus = async (response: Response): Promise<Response> => {
  if (response.ok) return response
  const message = await response.text()
  throw new HTTPError(response.status, message || response.statusText)
}

const fetchFromEndpoint = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response: Response = await fetch(url, options)
  await checkStatus(response)
  return response.json() as Promise<T>
}

// Hook to configure query defaults and mutation settings using QueryClient and endpoint configurations
const useQueryClientFn = () => {
  const queryClient = useQueryClient()
  const { setIsQueryClientReady, endpoint } = useConfigStore()

  /*
   * Registering defaults must follow a specific order: from least generic key to most generic.
   * This ensures that the first default matching the specified key is returned, aiding in specificity resolution.
   */
  useEffect(() => {
    if (!queryClient || !endpoint) return

    console.debug("useQueryClientFn::: setting defaults: ", endpoint)

    queryClient.setQueryDefaults(["peaks"], {
      queryFn: async ({ queryKey }) => {
        const [_key, id, params] = queryKey as [string, string?, Record<string, any>?]
        const query = encodeUrlParamsFromObject(params || {})
        const url = `${endpoint}/peaks${id ? `/${id}` : ""}${query}`

        const data: Peak[] = await fetchFromEndpoint<Peak[]>(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })

        return data.sort((a, b) => a.name.localeCompare(b.name))
      },
    })

    queryClient.setMutationDefaults(["peakAdd"], {
      mutationFn: async ({ formState }: PeakAddParams) => {
        const url = `${endpoint}/peaks`
        const peakData: Peak = await fetchFromEndpoint<Peak>(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formState),
        })
        return peakData
      },
    })

    queryClient.setMutationDefaults(["peakEdit"], {
      mutationFn: async ({ id, formState }: PeakActiontParams) => {
        const url = `${endpoint}/peaks/${id}`
        const peakData: Peak = await fetchFromEndpoint<Peak>(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formState),
        })
        return peakData
      },
    })

    queryClient.setMutationDefaults(["peakDelete"], {
      mutationFn: async ({ id }: PeakActiontParams) => {
        const url = `${endpoint}/peaks/${id}`
        await fetchFromEndpoint<void>(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
      },
    })

    setIsQueryClientReady(true)
  }, [queryClient, endpoint, setIsQueryClientReady])
}

export default useQueryClientFn
