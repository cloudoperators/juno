/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// PLEASE NOTE: Filtering and Sorting is currently for UI demo purposes and doesn't fully work

interface Item {
  [key: string]: string
  height: string
}

export const useFilteredAndSortedItems = (
  items: Item[],
  filterSelections: Record<string, string[]>,
  minHeight: string,
  maxHeight: string,
  sortKey: keyof Item,
  sortDirection: "asc" | "desc"
): Item[] => {
  let filtered = items

  Object.entries(filterSelections).forEach(([key, values]) => {
    if (values.length > 0) {
      filtered = filtered.filter((item) => values.includes(item[key]))
    }
  })

  if (minHeight) {
    filtered = filtered.filter((item) => parseInt(item.height, 10) >= parseInt(minHeight, 10))
  }

  if (maxHeight) {
    filtered = filtered.filter((item) => parseInt(item.height, 10) <= parseInt(maxHeight, 10))
  }

  filtered.sort((a, b) =>
    sortDirection === "asc" ? a[sortKey].localeCompare(b[sortKey]) : b[sortKey].localeCompare(a[sortKey])
  )

  return filtered
}

export const usePaginatedItems = (filteredItems: Item[], currentPage: number, itemsPerPage: number): Item[] => {
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = currentPage * itemsPerPage
  return filteredItems.slice(startIndex, endIndex)
}

export const calculateAvailableOptions = (
  items: Item[],
  // eslint-disable-next-line no-unused-vars
  uniqueValues: (items: Item[], field: keyof Item) => string[]
) => ({
  name: uniqueValues(items, "name"),
  mainrange: uniqueValues(items, "mainrange"),
  region: uniqueValues(items, "region"),
  countries: uniqueValues(items, "countries"),
  safety: ["Safe", "Caution", "Unsafe"],
})

export const uniqueValues = (items: Item[], field: keyof Item): string[] => {
  return Array.from(new Set(items.map((item) => item[field])))
}
