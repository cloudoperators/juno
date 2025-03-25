/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { buildUrl } from "./urlHelpers"
import * as logger from "./logger"
import { K8sApiError } from "./apiErrorHandler"

// Define the shape of the options parameter
interface RequestOptions {
  params?: Record<string, any>
  signal?: AbortSignal
  headers?: HeadersInit | null
  body?: Object | null
  mode?: RequestMode
  cache?: RequestCache
  credentials?: RequestCredentials
  [key: string]: any
}

// Check response status
const checkStatus = (response: Response): Response => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(response.statusText || `${response.status}`)
    ;(error as K8sApiError).response = response // Type assertion to attach the response to the error
    throw error
  }
}

/**
 * Creates a request.
 *
 * @param {string} method Http method.
 * @param {string} url The URL to send the request to.
 * @param {RequestOptions} options params, headers, and other options supported by fetch.
 * @return {Promise<Response>} The response promise.
 */
function request(method: string, url: string, options: RequestOptions = {}): Promise<Response> {
  // add params to url
  if (options.params) url = buildUrl(url, options.params)

  // add allowed options to fetch
  const requestFields = ["signal", "headers", "body", "mode", "cache", "credentials"] as const

  const fetchOptions: RequestInit = requestFields.reduce(
    (map, key) => {
      if (options[key]) {
        return { ...map, [key]: options[key] }
      }

      return map
    },
    { credentials: "same-origin", method }
  )

  // stringify body if it's an object
  if (fetchOptions.body && typeof fetchOptions.body !== "string") {
    fetchOptions.body = JSON.stringify(fetchOptions.body)
  }

  logger.debug("fetch >", url, fetchOptions)

  // make the call
  return fetch(url, fetchOptions).then(checkStatus)
}

export default request
