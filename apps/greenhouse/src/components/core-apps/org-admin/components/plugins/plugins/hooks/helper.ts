/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export type StatusConditionFilter = "True" | "False" | "Unknown"

export function getStatusCondition(item: any): StatusConditionFilter {
  const conditions = item?.status?.statusConditions?.conditions ?? []

  const condition = conditions.find((condition: any) => condition?.type === "Ready")
  if (!condition || !condition.status) return "Unknown"

  return condition?.status
}
