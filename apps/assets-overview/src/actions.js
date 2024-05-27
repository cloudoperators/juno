/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const ENDPOINT = "https://endpoint-url-here.com"

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
      return Promise.reject(error)
    })
  }
}

export const fetchAssetsManifest = ({ queryKey }) => {
  const [_key, manifestUrl] = queryKey
  return fetch(manifestUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(checkStatus)
    .then((response) => {
      return response.json()
    })
    .then((manifest) => {
      return manifest
    })
}

export const fetchMarkdown = ({ queryKey }) => {
  const [_key, path] = queryKey
  return fetch(path, {
    method: "GET",
    headers: {},
  })
    .then(checkStatus)
    .then((response) => {
      return response.text()
    })
}
