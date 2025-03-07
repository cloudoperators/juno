import { StatusConditionFilter } from "../lib/store/createPluginSlice"

export function getStatusCondition(item: any): StatusConditionFilter {
  const conditions = item?.status?.statusConditions?.conditions ?? []

  const condition = conditions.find((condition: any) => condition?.type === "Ready")
  if (!condition || !condition.status) return "Unknown"

  return condition?.status
}
