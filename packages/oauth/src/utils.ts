/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * This function generates a random string based on Math.random
 * @param length - Length of the random string (default: 60)
 * @returns random string
 */
export function randomString(length: number = 60): string {
  let result = ""
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}

/**
 * Encode a value as base64 JSON string
 * @param props - Value to encode
 * @returns base64 encoded json string
 */
export const encodeBase64Json = (props: unknown): string => window.btoa(JSON.stringify(props))

/**
 * Decode a base64 encoded JSON string
 * @param string - base64 encoded json string
 * @returns Decoded value or null if decoding fails
 */
export const decodeBase64Json = (string: string): unknown => {
  try {
    return JSON.parse(window.atob(string))
  } catch (_) {
    return null
  }
}

/**
 * Convert an object to URL search parameters string
 * @param params - Object with string, number, or boolean values
 * @returns URL-encoded search parameters string
 */
export const paramsToUrl = (params: Record<string, string | number | boolean> = {}): string => {
  const urlParams = new URLSearchParams()
  Object.keys(params).forEach((k) => urlParams.set(k, String(params[k])))
  return urlParams.toString()
}
