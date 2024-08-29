import { buildUrl } from "./urlHelpers"
import * as logger from "./logger"

// Define the shape of the options parameter
interface RequestOptions {
  params?: Record<string, any>
  signal?: AbortSignal
  headers?: HeadersInit
  body?: any
  mode?: RequestMode
  cache?: RequestCache
  credentials?: RequestCredentials
}

// Check response status
const checkStatus = (response: Response): Response => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(response.statusText || `${response.status}`)
    ;(error as any).response = response // Type assertion to attach the response to the error
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
  const fetchOptions: RequestInit = ["signal", "headers", "body", "mode", "cache", "credentials"].reduce(
    (map, key) => {
      if (options[key as keyof RequestOptions]) {
        map[key as keyof RequestInit] = options[key as keyof RequestOptions]
      }
      return map
    },
    { credentials: "same-origin", method } as RequestInit
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
