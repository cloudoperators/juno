/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// Start an auto-dismiss timeout to hide the message after the specified duration (passed or preconfigured), if autoDismiss is enabled
export const startAutoDismissTimeout = (
  autoDismiss: boolean,
  timeout: number,
  hideMessage: () => void,
  timeoutRef: React.MutableRefObject<number | null>
) => {
  if (autoDismiss) {
    // Check if a timeout is already set and clear it to avoid multiple timeouts
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current)
    }
    // Set a new timeout to hide the message after the specified duration
    timeoutRef.current = window.setTimeout(() => {
      hideMessage()
    }, timeout) as unknown as number
  }
}

// Clears the auto-dismiss timeout (if it exists) and resets the timeout reference
export const clearAutoDismissTimeout = (timeoutRef: React.MutableRefObject<number | null>) => {
  // Check if there is an existing timeout
  if (timeoutRef.current !== null) {
    // Clear the existing timeout
    clearTimeout(timeoutRef.current)
    // Reset the timeout reference
    timeoutRef.current = null
  }
}
