/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const parseError = (error) => {
  // check if error is JSON containing message or just string
  if (typeof error === "string") {
    if (error === "Failed to fetch") {
      return "Could not reach endpoint. Possible causes could include network issues, incorrect URL, or server outages."
    }
    return parseMessage(error)
  }

  // check if the error is a object containing message
  if (typeof error === "object") {
    if (error?.message) {
      return (error?.code ? `API: ${error.code}, ` : "") + error?.message
    }
  }

  return "An error occurred"
}

const parseMessage = (message) => {
  let newMsg = message
  try {
    newMsg = JSON.parse(message)
    if (newMsg?.message) {
      newMsg = (newMsg?.code ? `API: ${newMsg.code}, ` : "") + newMsg?.message
    }
  } catch (error) {
    console.warn(error)
    return message
  }

  return newMsg
}

// debounce helper. This will debounce the passed function by the passed delay (in milliseconds)
export const debounce = (func, delay) => {
  let timeout
  return function (...args) {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(context, args), delay)
  }
}
