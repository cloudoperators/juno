/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceFilter } from "../../../generated/graphql"

export type DropdownValue = string | number | string[] | undefined

export type SelectedFilter = {
  name: string
  value: string
  inactive?: boolean
}

export type Filter = {
  displayName: string
  filterName: string
  values: string[]
}
// TODO: change it to UIFilterSettings
export type FilterSettings = {
  selectedFilters?: SelectedFilter[]
  searchTerm?: string
}

export type ServiceFilterReduced = Pick<
  ServiceFilter,
  "search" | "serviceCcrn" | "uniqueUserId" | "userName" | "supportGroupCcrn"
>
