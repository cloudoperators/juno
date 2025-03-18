/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const truncateVersion = (version: string, lastChars: number = 8): string => {
  if (version.length <= lastChars) return version
  return `...${version.slice(-lastChars)}`
} 