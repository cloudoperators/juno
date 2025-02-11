/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const parseError = (error: any) => {
  if (error?.message) {
    // @ts-expect-error TS(2304): Cannot find name 'errMsg'.
    errMsg = error?.message
    try {
      // @ts-expect-error TS(2304): Cannot find name 'errMsg'.
      errMsg = JSON.parse(error?.message).msg
    } catch (error) {
      console.debug(error)
    }
  // @ts-expect-error TS(2304): Cannot find name 'errMsg'.
  } else errMsg = error.toString()
  // @ts-expect-error TS(2304): Cannot find name 'errMsg'.
  return errMsg
}
