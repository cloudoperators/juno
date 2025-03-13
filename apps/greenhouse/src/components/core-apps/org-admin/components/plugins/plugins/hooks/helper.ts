export type StatusConditionFilter = "True" | "False" | "Unknown" | "All"

export function getStatusCondition(item: any): StatusConditionFilter {
  const conditions = item?.status?.statusConditions?.conditions ?? []

  const condition = conditions.find((condition: any) => condition?.type === "Ready")
  if (!condition || !condition.status) return "Unknown"

  return condition?.status
}

export function updateItemsWithStatusCondition(items: any) {
  return items.map((item: any) => {
    if (!item.metadata) {
      item.metadata = {}
    }
    if (!item.metadata.labels) {
      item.metadata.labels = {}
    }

    const statusConditionFilter = getStatusCondition(item)

    if (statusConditionFilter) {
      item.metadata.labels["Ready"] = statusConditionFilter
    }

    return item
  })
}
