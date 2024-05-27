/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const DEFAULT_ENDPOINT = "https://whois.global.cloud.sap/v1"
// const ENDPOINT = "https://whois-staging.scaleout.eu-nl-1.cloud.sap/v1"

class HTTPError extends Error {
  constructor(code, message) {
    super(message || code)
    this.name = "HTTPError"
    this.statusCode = code
  }
}

const encodeUrlParamsFromObject = (options) => {
  if (!options) return ""
  let encodedOptions = Object.keys(options)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(options[k])}`)
    .join("&")
  return `&${encodedOptions}`
}

// Check response status
const checkStatus = (response) => {
  if (response.status < 400) {
    return response
  } else {
    return response.text().then((message) => {
      var error = new HTTPError(response.status, message || response.statusText)
      error.statusCode = response.status
      // throw error
      return Promise.reject(error)
    })
  }
}

export const search = (endpoint, input, options) => {
  let newEndpoint = DEFAULT_ENDPOINT
  if (endpoint && endpoint.length > 0) newEndpoint = endpoint

  return fetch(
    `${newEndpoint}/query?input=${input}${encodeUrlParamsFromObject(options)}`,
    {
      method: "GET",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(checkStatus)
}
