/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

// PLEASE NOTE: This file needs refactoring

import { useEffect } from "react"
import { useQueryClient } from "@tanstack/react-query"

import useConfigStore from "../../store/useConfigStore"

class HTTPError extends Error {
  statusCode: number
  constructor(code: number, message: string) {
    super(message || `${code}`)
    this.name = "HTTPError"
    this.statusCode = code
  }
}

const encodeUrlParamsFromObject = (options: Record<string, any>) => {
  if (!options || Object.keys(options).length <= 0) return ""
  const encodedOptions = Object.keys(options)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(options[k])}`)
    .join("&")
  return `&${encodedOptions}`
}

// Check response status
const checkStatus = (response: Response) => {
  if (response.status < 400) {
    return response
  } else {
    return response.text().then((message) => {
      const error = new HTTPError(response.status, message || response.statusText)
      return Promise.reject(error)
    })
  }
}

// hook to register query defaults that depends on the queryClient and options
const useQueryClientFn = () => {
  const queryClient = useQueryClient()
  const { setQueryClientFnReady, endpoint } = useConfigStore()

  /*
  As stated in getQueryDefaults, the order of registration of query defaults does matter. Since the first matching defaults are returned by getQueryDefaults, the registration should be made in the following order: from the least generic key to the most generic one. This way, in case of specific key, the first matching one would be the expected one.
  */
  useEffect(() => {
    if (!queryClient || !endpoint) return

    console.debug("useQueryClientFn::: setting defaults: ", endpoint)

    queryClient.setQueryDefaults(["peaks"], {
      queryFn: ({ queryKey }) => {
        const [_key, id, params] = queryKey as [string, string?, Record<string, any>?]
        const query = encodeUrlParamsFromObject(params || {})
        return fetch(`${endpoint}/peaks${id ? `/${id}` : ""}${query}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then(checkStatus)
          .then((response) => {
            // sort peaks by name
            return response.json().then((data) => {
              // check if data is an array to sort (peaks vs peak/id)
              if (Array.isArray(data)) {
                return data.sort((a, b) => {
                  return a.name.localeCompare(b.name)
                })
              }
              return data
            })
          })
      },
    })

    queryClient.setMutationDefaults(["peakAdd"], {
      mutationFn: ({ formState }) => {
        const sendBody = JSON.stringify(formState)
        return fetch(`${endpoint}/peaks`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: sendBody,
        })
          .then(checkStatus)
          .then((response) => {
            return response.json()
          })
      },
    })

    queryClient.setMutationDefaults(["peakEdit"], {
      mutationFn: ({ id, formState }) => {
        const sendBody = JSON.stringify(formState)
        return fetch(`${endpoint}/peaks/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: sendBody,
        })
          .then(checkStatus)
          .then((response) => {
            return response.json()
          })
      },
    })

    queryClient.setMutationDefaults(["peakDelete"], {
      mutationFn: ({ id }) => {
        return fetch(`${endpoint}/peaks/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then(checkStatus)
          .then((response) => {
            return response.json()
          })
      },
    })

    // set queryClientFnReady to true once
    setQueryClientFnReady(true)
  }, [queryClient, endpoint, setQueryClientFnReady])
}

export default useQueryClientFn
