/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DateTime } from "luxon"
import { fetchProxy } from "utils"

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

export const cas = ({ queryKey }) => {
  const [_key, bearerToken, endpoint, disabledCAs, isMock] = queryKey
  return fetchProxy(`${endpoint}/cas`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearerToken}`,
    },
    mock: isMock,
  })
    .then(checkStatus)
    .then((response) => {
      return response.json().then((jsonResp) => {
        if (!jsonResp || !Array.isArray(jsonResp)) return []
        // sort entries by name
        return jsonResp.sort((a, b) => a?.name.localeCompare(b?.name))
      })
    })
    .then((data) => {
      if (!Array.isArray(data)) return data
      if (!Array.isArray(disabledCAs)) return data
      // return just the CAs that should be displayed
      return data?.filter(
        (ca) => !disabledCAs.some((caName) => ca.name === caName)
      )
    })
}

export const certificates = ({ queryKey }) => {
  const [_key, bearerToken, endpoint, ca, isMock] = queryKey
  return fetchProxy(`${endpoint}/${ca}/certificate`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearerToken}`,
    },
    mock: isMock,
  })
    .then(checkStatus)
    .then((response) => {
      return response.json().then((jsonResp) => {
        if (!jsonResp || !Array.isArray(jsonResp)) return []
        // sort entries by expiration date
        return jsonResp
          .sort(
            (a, b) =>
              DateTime.fromISO(a?.not_after).toMillis() -
              DateTime.fromISO(b?.not_after).toMillis()
          )
          .reverse()
      })
    })
}

export const createCertificate = (
  endpoint,
  ca,
  bearerToken,
  formState,
  isMock
) => {
  // Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
  const sendBody = JSON.stringify(formState)
  return fetchProxy(`${endpoint}/${ca}/certificate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearerToken}`,
    },
    body: sendBody,
    mock: isMock,
  })
    .then(checkStatus)
    .then((response) => {
      return response.json()
    })
}

export const revokeCertificate = (
  endpoint,
  ca,
  bearerToken,
  serial,
  isMock
) => {
  return fetchProxy(`${endpoint}/${ca}/certificate/${serial}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearerToken}`,
    },
    mock: isMock,
  }).then(checkStatus)
}
