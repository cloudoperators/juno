/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Peak } from "../../mocks/db"

// PLEASE NOTE: Filtering and Sorting is currently for UI demo purposes and doesn't fully work

interface Item {
  height: string
  [key: string]: string
}

export const useFilteredAndSortedItems = (
  items: Peak[],
  filterSelections: Record<string, string[]>,
  minHeight: string,
  maxHeight: string,
  sortKey: keyof Peak,
  sortDirection: "asc" | "desc"
): Peak[] => {
  let filtered = items

  Object.entries(filterSelections).forEach(([key, values]) => {
    if (values.length > 0) {
      filtered = filtered.filter((item) => {
        const keyTyped = key as keyof Peak
        return values.includes(item[keyTyped] as string)
      })
    }
  })

  if (minHeight) {
    filtered = filtered.filter((item) => parseInt(item.height, 10) >= parseInt(minHeight, 10))
  }

  if (maxHeight) {
    filtered = filtered.filter((item) => parseInt(item.height, 10) <= parseInt(maxHeight, 10))
  }

  filtered.sort((a, b) =>
    sortDirection === "asc"
      ? (a[sortKey] as string).localeCompare(b[sortKey] as string)
      : (b[sortKey] as string).localeCompare(a[sortKey] as string)
  )

  return filtered
}

export const usePaginatedItems = (filteredItems: Peak[], currentPage: number, itemsPerPage: number): Peak[] => {
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = currentPage * itemsPerPage
  return filteredItems.slice(startIndex, endIndex)
}

export const calculateAvailableOptions = (
  items: Item[],
  uniqueValues: (_items: Item[], _field: keyof Item) => string[]
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
