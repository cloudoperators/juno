/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export type Filter = {
  id: string
  label: string
  values: string[]
}

export type SelectedFilter = {
  id: string
  value: string
  inactive?: boolean
}
