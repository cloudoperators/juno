/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Peak } from "../../mocks/db"

interface Item {
  height: string
  [key: string]: string
}

export const useFilteredAndSortedItems = (
  items: Peak[],
  filterSelections: Partial<Record<keyof Peak, string[]>>,
  minHeight: string,
  maxHeight: string,
  sortKey: keyof Peak,
  sortDirection: "asc" | "desc"
): Peak[] => {
  const filtered = items.filter(
    (item) =>
      Object.entries(filterSelections).every(([key, values]) => {
        const typedKey = key as keyof Peak
        return values.length === 0 || values.includes(item[typedKey] as string)
      }) &&
      parseInt(item.height, 10) >= parseInt(minHeight, 10) &&
      parseInt(item.height, 10) <= parseInt(maxHeight, 10)
  )

  return filtered.sort((a, b) =>
    sortDirection === "asc"
      ? String(a[sortKey]).localeCompare(String(b[sortKey]))
      : String(b[sortKey]).localeCompare(String(a[sortKey]))
  )
}

export const usePaginatedItems = (filteredItems: Peak[], currentPage: number, itemsPerPage: number): Peak[] => {
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = currentPage * itemsPerPage
  return filteredItems.slice(startIndex, endIndex)
}

export const calculateAvailableOptions = (
  items: Item[],
  uniqueValues: (_items: Item[], _field: keyof Item) => string[]
) => {
  return {
    name: uniqueValues(items, "name"),
    mainrange: uniqueValues(items, "mainrange"),
    region: uniqueValues(items, "region"),
    countries: uniqueValues(items, "countries"),
    safety: ["Safe", "Caution", "Unsafe"],
  }
}

export const uniqueValues = (items: Item[], field: keyof Item): string[] =>
  Array.from(new Set(items.map((item) => item[field])))
