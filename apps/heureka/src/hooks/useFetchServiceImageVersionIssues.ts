/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useGetServiceImageVersionIssuesQuery } from "../generated/graphql"
import { getNormalizedImageVersionIssues } from "../components/Services/utils"

type UseFetchServiceImageVersionIssuesProps = {
  serviceCcrn: string
  imageVersion: string
}

export const useFetchServiceImageVersionIssues = ({
  serviceCcrn,
  imageVersion,
}: UseFetchServiceImageVersionIssuesProps) => {
  const { data, loading, error } = useGetServiceImageVersionIssuesQuery({
    variables: {
      componentVersionFilter: {
        serviceCcrn: [serviceCcrn],
        version: [imageVersion],
      },
    },
  })

  const normalizedData = getNormalizedImageVersionIssues(data)

  return {
    issues: normalizedData.issues,
    totalCount: normalizedData.totalCount,
    pages: normalizedData.pages,
    pageNumber: normalizedData.pageNumber,
    loading,
    error: error?.message,
  }
}
