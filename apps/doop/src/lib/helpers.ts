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
