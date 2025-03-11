/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from "react"

// eslint-disable-next-line no-unused-vars
export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
  // Create a ref to store the timeout ID which will persist across renders
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Return new function that wraps the given callback with debounce logic
  return (...args: any[]) => {
    // If there's an existing timeout, cancel it to prevent multiple executions
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    // Start a new timeout, calling the callback with the provided arguments after the delay.
    // This ensures that the callback is only invoked once after the last call within the delay.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    timerRef.current = setTimeout(() => callback(...args), delay)
  }
}
