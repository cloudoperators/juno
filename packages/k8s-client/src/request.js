import { buildUrl } from "./urlHelpers"
import * as logger from "./logger"

// Check response status
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText || response.status)
    error.response = response
    throw error
  }
}

/**
 * Creates a request.
 *
 * @param {string} method Http method.
 * @param {string} url (Optional) data to be send.
 * @param {Hash} options params, headers and other options supported by fetch.
 * @return {Promise} The response promise.
 */
function request(method, url, options) {
  // add params to url
  if (options.params) url = buildUrl(url, options.params)

  // add allowed options to fetch
  const fetchOptions = [
    "signal",
    "headers",
    "body",
    "mode",
    "cache",
    "credentials",
  ].reduce(
    (map, key) => {
      if (options[key]) map[key] = options[key]
      return map
    },
    { credentials: "same-origin", method }
  )

  // stringify body
  if (fetchOptions.body && typeof fetchOptions.body !== "string")
    fetchOptions.body = JSON.stringify(fetchOptions.body)

  logger.debug("fetch >", url, fetchOptions)
  // make the call
  return fetch(url, fetchOptions).then(checkStatus)
}

export default request
