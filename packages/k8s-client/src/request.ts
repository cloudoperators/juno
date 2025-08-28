/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import { buildUrl } from "./urlHelpers"
import * as logger from "./logger"
import { K8sApiError } from "./apiErrorHandler"
import https from "https"

// Define the shape of the options parameter
interface RequestOptions {
  params?: Record<string, any>
  signal?: AbortSignal
  headers?: Record<string, any>
  body?: Object | null
  mode?: RequestMode
  cache?: RequestCache
  credentials?: RequestCredentials
  ignoreSsl?: boolean
  debug?: boolean
  [key: string]: any
}

// Check response status
const checkStatus = (response: Response): Response => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(response.statusText || `${response.status}`)
    ;(error as K8sApiError).response = response
    throw error
  }
}

// Helper function to create HTTPS agent only in Node.js
function createHttpsAgent(ignoreSsl: boolean, url: string): https.Agent | undefined {
  if (!ignoreSsl || !url.startsWith("https:") || typeof window !== "undefined") {
    return undefined
  }

  try {
    if (!https?.Agent) {
      return undefined
    }

    return new https.Agent({
      rejectUnauthorized: false,
    })
  } catch (_error) {
    // https module not available (browser environment or bundle)
    return undefined
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
  // Add params to url
  if (options.params) url = buildUrl(url, options.params)

  // Handle SSL ignore option
  const { ignoreSsl, debug, ...restOptions } = options

  // Create HTTPS agent if needed (Node.js only)
  const agent = createHttpsAgent(ignoreSsl || false, url)

  // Log warning when SSL verification is disabled
  if (agent && debug === true && process.env.NODE_ENV !== "test") {
    logger.debug(`⚠️  SSL verification disabled for request to: ${url}`)
  }

  // Add allowed options to fetch (excluding ignoreSsl as it's handled separately)
  const requestFields = ["signal", "headers", "body", "mode", "cache", "credentials"] as const
  const fetchOptions: RequestInit & { agent?: typeof agent } = requestFields.reduce(
    (map, key) => {
      if (restOptions[key]) {
        return { ...map, [key]: restOptions[key] }
      }
      return map
    },
    { credentials: "same-origin", method } as RequestInit & { agent?: typeof agent }
  )

  // Add agent if available
  if (agent) {
    fetchOptions.agent = agent
  }

  // Stringify body if it's an object
  if (fetchOptions.body && typeof fetchOptions.body !== "string") {
    fetchOptions.body = JSON.stringify(fetchOptions.body)
  }

  if (debug === true) {
    logger.debug("fetch >", url, {
      ...fetchOptions,
      agent: agent ? "HTTPS Agent (SSL ignored)" : fetchOptions.agent,
    })
  }

  // Make the call
  return fetch(url, fetchOptions).then(checkStatus)
}

export default request
export type { RequestOptions }
