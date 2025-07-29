/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import https from "https"
import { buildUrl } from "./urlHelpers"
import * as logger from "./logger"
import { K8sApiError } from "./apiErrorHandler"

// Define the shape of the options parameter
interface RequestOptions {
  params?: Record<string, any>
  signal?: AbortSignal
  headers?: Record<string, any>
  body?: Object | null
  mode?: RequestMode
  cache?: RequestCache
  credentials?: RequestCredentials
  ignoreSsl?: boolean // New option to ignore SSL certificate validation
  debug?: boolean // Optional debug flag
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
 * @param {RequestOptions} options params, headers, ignoreSsl, and other options supported by fetch.
 * @return {Promise<Response>} The response promise.
 */
function request(method: string, url: string, options: RequestOptions = {}): Promise<Response> {
  // add params to url
  if (options.params) url = buildUrl(url, options.params)

  // Handle SSL ignore option
  const { ignoreSsl, ...restOptions } = options

  // Create HTTPS agent if SSL should be ignored for HTTPS URLs
  let agent: https.Agent | undefined
  if (ignoreSsl && url.startsWith("https:") && typeof window === "undefined") {
    agent = new https.Agent({
      rejectUnauthorized: false,
    })

    // Log warning when SSL verification is disabled
    if (process.env.NODE_ENV !== "test" && options.debug === true) {
      // Avoid spam in tests
      logger.debug(`⚠️  SSL verification disabled for request to: ${url}`)
    }
  }

  // add allowed options to fetch (excluding ignoreSsl as it's handled separately)
  const requestFields = ["signal", "headers", "body", "mode", "cache", "credentials"] as const
  const fetchOptions: RequestInit & { agent?: https.Agent } = requestFields.reduce(
    (map, key) => {
      if (restOptions[key]) {
        return { ...map, [key]: restOptions[key] }
      }
      return map
    },
    { credentials: "same-origin", method } as RequestInit & { agent?: https.Agent }
  )

  // Add agent if SSL should be ignored (Node.js environment only)
  if (agent) {
    fetchOptions.agent = agent
  }

  // stringify body if it's an object
  if (fetchOptions.body && typeof fetchOptions.body !== "string") {
    fetchOptions.body = JSON.stringify(fetchOptions.body)
  }

  if (options.debug === true) {
    logger.debug("fetch >", url, {
      ...fetchOptions,
      agent: agent ? "HTTPS Agent (SSL ignored)" : fetchOptions.agent,
    })
  }

  // make the call
  return fetch(url, fetchOptions).then(checkStatus)
}

export default request
export type { RequestOptions }
