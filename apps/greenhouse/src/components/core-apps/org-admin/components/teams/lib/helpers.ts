/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const parseError = (error: any) => {
  let errMsg = error

  // check if error is JSON containing message or just string
  if (typeof error === "string") {
    errMsg = parseMessage(error)
  }

  // check if the error is a object containing message
  if (typeof error === "object") {
    console.log("Error parsing error message::object")
    if (error?.message) {
      errMsg = parseMessage(error?.message)
    }
  }
  return errMsg
}

const parseMessage = (message: any) => {
  let newMsg = message
  try {
    newMsg = JSON.parse(message)
    if (newMsg?.message) {
      newMsg = (newMsg?.code ? `${newMsg.code}, ` : "") + newMsg?.message
    }
  } catch (error) {
    console.error(error)
  }

  return newMsg
}
