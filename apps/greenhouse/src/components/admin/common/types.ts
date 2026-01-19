/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export type DropdownValue = string | number | string[] | undefined

export type SelectedFilter = {
  id: string
  value: string
  inactive?: boolean
}

export type Filter = {
  id: string
  label: string
  values: string[]
}

export type FilterSettings = {
  selectedFilters?: SelectedFilter[]
  searchTerm?: string
}
