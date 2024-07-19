/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * This function generates a random string based on Math.random
 * @returns {string} random string
 */
export function randomString(length) {
  if (!length) length = 60
  let result = ""
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}

/**
 *
 * @param {object} props
 * @returns base64 encoded json string
 */
export const encodeBase64Json = (props) =>
  window.btoa(JSON.stringify({ ...props }))

/**
 *
 * @param {string} string, base64 encoded json string
 * @returns {object} json
 */
export const decodeBase64Json = (string) => {
  try {
    return JSON.parse(window.atob(string))
  } catch (_) {
    return null
  }
}

export const paramsToUrl = (params = {}) => {
  const urlParams = new URLSearchParams()
  Object.keys(params).forEach((k) => urlParams.set(k, params[k]))
  return urlParams.toString()
}
