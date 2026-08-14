/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/** Shape of the React Query cache entry for "remediations" queries. */
export type RemediationsCache = {
  data?: {
    Remediations?: {
      edges?: Array<{ node?: { id?: string } }> | null
      totalCount?: number | null
    }
  }
}

/** Query key filter shape for "remediations" predicate lookups. */
export type RemediationQueryFilter = {
  service?: string[]
  image?: string[]
  vulnerability?: string[]
}
