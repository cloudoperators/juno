/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

class HTTPError extends Error {
  statusCode: any
  constructor(code: any, message: any) {
    super(message || code)
    this.name = "HTTPError"
    this.statusCode = code
  }
}

const encodeUrlParamsFromObject = (options: any) => {
  if (!options) return ""
  let encodedOptions = Object.keys(options)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(options[k])}`)
    .join("&")
  return `&${encodedOptions}`
}

// Check response status
const checkStatus = (response: any) => {
  if (response.status < 400) {
    return response
  } else {
    return response.text().then((message: any) => {
      const error = new HTTPError(response.status, message || response.statusText)
      error.statusCode = response.status

      return Promise.reject(error)
    })
  }
}

// Example fetch call. Adjust as needed for your API
export const exampleFetch = ({ queryKey }: any) => {
  const [_key, endpoint, options] = queryKey
  const query = encodeUrlParamsFromObject(options)
  return fetch(`${endpoint}/colors.json?${query}`, {
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
}
