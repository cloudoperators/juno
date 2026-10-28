/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const toRFC3339 = (date: Date): string => date.toISOString().replace(/\.\d{3}Z$/, "Z")

export const defaultTrendsAfter = (): string => {
  const now = new Date()
  return toRFC3339(new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 6, 1)))
}

export const defaultTrendsBefore = (): string => toRFC3339(new Date())
