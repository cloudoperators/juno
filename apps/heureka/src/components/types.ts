/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export type IssuesCountsType = {
  critical: number
  high: number
  medium: number
  low: number
  none: number
  total: number
}

// Add types here that are shared among components/pages
export type ServiceType = {
  id: string
  name: string
  issuesCount: IssuesCountsType
  serviceDetails: {
    supportGroups: string[]
  }
  remediationDate: string
  serviceOwners: string[]
}
