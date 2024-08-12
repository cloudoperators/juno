import request from "./request"
import { buildUrl } from "./urlHelpers"
import { Watch, ADDED, MODIFIED, DELETED, ERROR } from "./watch"
import handleApiError from "./apiErrorHandler"

function Client(options = {}) {
  const apiEndpoint = options.apiEndpoint
  let token = options.token

  this.WATCH_ERROR = ERROR
  this.WATCH_ADDED = ADDED
  this.WATCH_DELETED = DELETED
  this.WATCH_MODIFIED = MODIFIED

  // validate endpoint and token
  if (!apiEndpoint || !token)
    throw new Error(
      `Bad options: ${JSON.stringify(
        options,
        null,
        4
      )}. Please provide apiEndpoint and token`
    )

  const defaultHeaders = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  }

  // Helper function, extends options with default headers
  const extendOptions = (options, defaultOptions) => {
    options = Object.assign({}, options)
    defaultOptions = Object.assign({}, defaultOptions)

    const headers = Object.assign(
      {},
      defaultHeaders,
      defaultOptions.headers,
      options.headers
    )

    options = Object.assign(options, defaultOptions)
    options.headers = headers

    return options
  }

  /**
   * Creates a HEAD request.
   *
   * @param {string} path Api path.
   * @param {Object} options params, headers and other options supported by fetch.
   * @return {Promise} The response promise.
   */

  this.head = (path, options = {}) =>
    request("HEAD", buildUrl(apiEndpoint, path), extendOptions(options)).catch(
      handleApiError
    )

  /**
   * Creates a GET request.
   *
   * @param {string} path Api path.
   * @param {Object} options params, headers and other options supported by fetch.
   * @return {Promise} The response promise.
   */
  this.get = (path, options = {}) =>
    request("GET", buildUrl(apiEndpoint, path), extendOptions(options))
      .then((res) => res.json())
      .catch(handleApiError)

  /**
   * Creates a POST request.
   *
   * @param {string} path Api path.
   * @param {JSON} data data to send.
   * @param {Object} options params, headers and other options supported by fetch.
   * @return {Promise} The response promise.
   */
  this.post = (path, data, options = {}) =>
    request(
      "POST",
      buildUrl(apiEndpoint, path),
      extendOptions(options, { body: data })
    )
      .then((res) => res.json())
      .catch(handleApiError)

  /**
   * Creates a PUT (REPLACE) request.
   *
   * @param {string} path Api path.
   * @param {JSON} data data to be send.
   * @param {Object} options params, headers and other options supported by fetch.
   * @return {Promise} The response promise.
   */

  this.put = (path, data, options = {}) =>
    request(
      "PUT",
      buildUrl(apiEndpoint, path),
      extendOptions(options, { body: data })
    )
      .then((res) => res.json())
      .catch(handleApiError)

  /**
   * Creates a PATCH (UPDATE) request.
   *
   * @param {string} path Api path.
   * @param {JSON} data data to be send.
   * @param {Object} options params, headers and other options supported by fetch.
   * @return {Promise} The response promise.
   */

  this.patch = (path, data, options = {}) =>
    request(
      "PATCH",
      buildUrl(apiEndpoint, path),
      extendOptions(options, {
        headers: { "Content-Type": "application/merge-patch+json" },
        body: data,
      })
    )
      .then((res) => res.json())
      .catch(handleApiError)

  /**
   * Creates a DELETE request.
   *
   * @param {string} path Api path.
   * @param {JSON} data (Optional) data to be send.
   * @param {Object} options params, headers and other options supported by fetch.
   * @return {Promise} The response promise.
   */

  this.delete = (path, data, options = {}) =>
    request(
      "DELETE",
      buildUrl(apiEndpoint, path),
      extendOptions(options, { body: data })
    )
      .then((res) => res.json())
      .catch(handleApiError)

  /**
   * Creates a watch request.
   *
   * @param {string} path Api path.
   * @param {Object} options params, headers and other options supported by fetch.
   * @return {Watch} a watch object which contains on and cancel functions
   */
  this.watch = (path, options = {}) => {
    return new Watch(
      buildUrl(apiEndpoint, path),
      extendOptions(options),
      () => token // allow the watch request to always use the latest token
    )
  }

  /**
   * Update auth token
   * @param {string} newToken
   */
  this.refreshToken = (newToken) => {
    token = newToken
    //console.debug("===========CLIENT REFRESH TOKEN", token)
  }

  this.currentToken = () => token
}

function createClient(options = {}) {
  return new Client(options)
}

export { createClient }
