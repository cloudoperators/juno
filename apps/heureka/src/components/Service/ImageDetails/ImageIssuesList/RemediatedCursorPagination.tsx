/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use, useCallback } from "react"
import { Pagination, Stack } from "@cloudoperators/juno-ui-components"
import { ObservableQuery } from "@apollo/client"
import { GetImagesQuery, GetRemediationsQuery } from "../../../../generated/graphql"
import { getNormalizedImageVulnerabilitiesResponse } from "../../../Services/utils"

type RemediatedCursorPaginationProps = {
  issuesPromise: Promise<ObservableQuery.Result<GetImagesQuery>>
  remediationsPromise: Promise<ObservableQuery.Result<GetRemediationsQuery>>
  goToPage: (after?: string | null) => void
}

/**
 * Pagination for the Remediated Vulnerabilities tab.
 *
 * The server paginates over ALL vulnerabilities, but the remediated tab only
 * displays the client-side filtered subset (those with a remediation record).
 * Using the raw server page count would allow navigating to pages that contain
 * no remediated items. This component computes the effective page count from
 * the total number of remediations and the current page size, capped by the
 * server's total page count.
 */
export const RemediatedCursorPagination = ({
  issuesPromise,
  remediationsPromise,
  goToPage,
}: RemediatedCursorPaginationProps) => {
  const { data: issuesData } = use(issuesPromise)
  const remediationsResult = use(remediationsPromise)

  const { pages, pageNumber, totalCount } = getNormalizedImageVulnerabilitiesResponse(
    issuesData as GetImagesQuery | undefined
  )

  // Total remediated vulnerabilities across all pages (remediations are not paginated).
  // Count unique CVEs — a single vulnerability can have multiple remediations.
  const totalRemediated = new Set(
    remediationsResult.data?.Remediations?.edges?.map((e) => e?.node?.vulnerability).filter(Boolean) ?? []
  ).size

  const handlePageChange = useCallback(
    (page?: number) => {
      if (page) {
        const previousPage = pages[page - 2] // pages is 0-indexed; page 1 has no cursor
        goToPage(page === 1 ? undefined : previousPage?.after)
      }
    },
    [pages, goToPage]
  )

  // Hide when there is nothing to paginate.
  if (totalRemediated === 0 || totalCount === 0 || pages.length === 0) {
    return null
  }

  // Compute how many pages are actually needed to cover all remediated vulnerabilities.
  // totalCount is the number of raw vulnerabilities on the current API page (≈ page size).
  // We cap against the server page count so we never show more pages than exist.
  const effectivePageCount = Math.min(pages.length, Math.ceil(totalRemediated / Math.max(totalCount, 1)))

  // Hide when everything fits on a single page — same behaviour as CursorPagination.
  if (effectivePageCount <= 1) {
    return null
  }

  // Ensure currentPage never exceeds the effective page count.
  const effectiveCurrentPage = Math.min(pageNumber, effectivePageCount)

  return (
    <Stack distribution="end" className="mt-4">
      <Pagination
        variant="number"
        currentPage={effectiveCurrentPage}
        onPressNext={handlePageChange}
        onPressPrevious={handlePageChange}
        pages={effectivePageCount}
      />
    </Stack>
  )
}
