/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// Initiate auto-dismiss timeout to hide the message after the specified timeout (passed or preconfigured)
export const initiateAutoDismiss = (
  autoDismiss: boolean,
  timeout: number,
  hideMessage: () => void,
  timeoutRef: React.MutableRefObject<number | null>
) => {
  // Ensure that auto-dismiss is enabled and that the value for timeout is valid
  if (!autoDismiss || timeout < 1) return

  // Clear an existing timeout to avoid multiple
  if (timeoutRef.current !== null) {
    clearTimeout(timeoutRef.current)
  }

  // Set a new timeout to hide the message after the specified timeout
  timeoutRef.current = window.setTimeout(() => {
    hideMessage()
  }, timeout) as unknown as number
}

// Clear an existing auto-dismiss timeout and reset the timeout reference
export const clearAutoDismissTimeout = (timeoutRef: React.MutableRefObject<number | null>) => {
  if (timeoutRef.current !== null) {
    clearTimeout(timeoutRef.current)
    timeoutRef.current = null
  }
}
