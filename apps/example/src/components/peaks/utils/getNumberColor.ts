/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// TO DO: Use theme colours

export const getNumberColorStyle = (status: string) => {
  switch (status.toLowerCase()) {
    case "safe":
      return { color: "#38A169" } // Green
    case "caution":
      return { color: "#DD6B20" } // Yellow
    case "not safe":
    case "unsafe":
      return { color: "#E53E3E" } // Red
    default:
      return { color: "#FFFFFF" } // White
  }
}
