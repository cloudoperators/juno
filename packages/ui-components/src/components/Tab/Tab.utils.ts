/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Utility function to merge class names into a single string.
 * Handles strings, arrays, and objects with conditional class names.
 *
 * @param classes - An array of class names, arrays, or objects with conditional class names.
 * @returns A single string of class names.
 */

export const mergeClassNames = (
  ...classes: Array<string | string[] | { [key: string]: boolean } | undefined>
): string => {
  return classes
    .flatMap((cls) => {
      if (typeof cls === "string") {
        return cls
      }
      if (Array.isArray(cls)) {
        return cls
      }
      if (typeof cls === "object" && cls !== null) {
        return Object.keys(cls).filter((key) => cls[key])
      }
      return []
    })
    .join(" ")
}
