/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { isString, isNumber, isObject } from "./utils"

/**
 * URL encoder for query params
 *
 * @param {Record<string, unknown>} data - Key-value object.
 * @return {string | undefined}
 */
const encodeQueryData = (data: Record<string, unknown>): string | undefined => {
  if (!data) return
  const ret = []
  for (const key in data) {
    if (Object.keys(data).includes(key)) {
      const result = data[key] as string | number | boolean
      ret.push(encodeURIComponent(key) + "=" + encodeURIComponent(result))
    }
  }

  return ret.join("&")
}

/**
 * Builds a URL from all path parts passed to the function.
 * Path parts must be strings or numbers; an optional trailing hash map provides query params.
 * Arguments are also validated at runtime and the function throws on anything else.
 * @param {...(string | number | Record<string, unknown>)} args - Path parts and an optional trailing params object.
 * @return {string}
 */
function buildUrl(...args: (string | number | Record<string, unknown>)[]): string {
  // This function needs at least two parameters
  if (args.length < 2) {
    throw new Error("Bad parameters: buildUrl needs at least two non-empty parameters.")
  }

  // Pop parameters object. This is the last argument
  const params = isObject(args[args.length - 1]) ? (args.pop() as Record<string, unknown>) : null

  // Validate arguments
  args.forEach((arg) => {
    if (!arg || !(isString(arg) || isNumber(arg))) {
      throw new Error(
        "Bad parameters: buildUrl accepts only strings and numbers, with a hash map as the last parameter"
      )
    }

    if (isString(arg) && arg.indexOf("?") >= 0) {
      throw new Error(
        'Bad parameters: buildUrl does not accept strings with "?" character. Please use a hashmap as the last parameter instead!'
      )
    }
  })

  // Build the URL
  let url = (args as Array<string | number>).join("/")
  const [protocol, rest] = url.split("://")
  if (!protocol || !rest) {
    throw new Error(`Bad URL: ${url}`)
  }

  url = `${protocol}://${rest.replace(/\/\/+/g, "/")}`
  if (params) url += `?${encodeQueryData(params)}`

  return url
}

export { buildUrl }
