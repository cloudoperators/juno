/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const parseError = (error: any) => {
  if (!error || (typeof error === "object" && Object.keys(error).length === 0))
    return "An error occurred. There is no further information"
  let errMsg = JSON.stringify(error)
  if (error?.message) {
    errMsg = error?.message
    try {
      const msgJson = JSON.parse(error?.message)
      if (msgJson.error) errMsg = msgJson.error
      if (msgJson.msg) errMsg = msgJson.msg
    } catch (error) {
      console.error(error)
    }
  }
  return errMsg
}

export const camelCaseToSpaceCase = (str: any) => {
  return str.replace(/([A-Z])/g, (c: any) => " " + c.toLowerCase())
}

export const valueToLabel = (str: any) => {
  if (!str) return str
  return str.replace(/([A-Z])/g, (c: any) => " " + c.toLowerCase()).replace(/_/g, " ")
}

export function capitalize(string: any) {
  // Check if the string is empty or undefined
  if (!string) return string

  // Capitalize the first character and concatenate it with the rest of the string
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const isObjectWithKeys = (value: any) =>
  value !== null && typeof value === "object" && Object.keys(value).length > 0

/**
 * Filters raw URL search params to only known keys and keys that start with any allowed prefix.
 * Use this before Zod parsing when you need prefix-based catchall validation
 * (Zod v4 no longer provides ctx.path in preprocess).
 *
 * Reusable pattern for route validateSearch: filter first, then parse with a schema that has
 * .catchall(z.union([z.string(), z.array(z.string()), z.undefined()])).
 */
export function filterSearchParamsByPrefix(
  raw: Record<string, unknown>,
  knownKeys: string[],
  allowedPrefixes: string[]
): Record<string, unknown> {
  const result: Record<string, unknown> = {}
  for (const key of knownKeys) {
    if (Object.prototype.hasOwnProperty.call(raw, key)) {
      result[key] = raw[key]
    }
  }
  for (const key of Object.keys(raw)) {
    if (allowedPrefixes.some((p) => key.startsWith(p))) {
      result[key] = raw[key]
    }
  }
  return result
}
