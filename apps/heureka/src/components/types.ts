/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { IssuesCountsType } from "../components/Services/useFetchServicesIssuesCounts"

// Add types here that are shared among components/pages
export type ServiceType = {
  id: string
  name: string
  issuesCount: IssuesCountsType
  serviceDetails: {
    supportGroups: string[]
  }
  components: number
  remediationDate: string
  serviceOwners: string[]
}
