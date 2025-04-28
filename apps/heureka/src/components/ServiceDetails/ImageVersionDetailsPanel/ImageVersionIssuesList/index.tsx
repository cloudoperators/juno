/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useCallback } from "react"
import {
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  Icon,
  Stack,
  Pagination,
  Spinner,
  SearchInput,
  ContentHeading
} from "@cloudoperators/juno-ui-components"
import { useActions as useMessageActions } from "@cloudoperators/juno-messages-provider"
import { EmptyDataGridRow } from "../../../common/EmptyDataGridRow"
import { useFetchServiceImageVersionIssues } from "../../../Services/useFetchServiceImageVersionIssues"
import { ImageVersionIssueListItem } from "./ImageVersionIssueListItem"
import SectionContentHeading from "../../../common/SectionContentHeading"
import { Issue } from "../../../Services/utils"

type ImageVersionIssuesListProps = {
  serviceCcrn: string
  imageVersion: string
}

export const ImageVersionIssuesList = ({ serviceCcrn, imageVersion }: ImageVersionIssuesListProps) => {
  const { addMessage } = useMessageActions()
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredIssues, setFilteredIssues] = useState<Issue[]>([])
  const {
    issues,
    loading: isLoading,
    error,
    currentPage,
    totalNumberOfPages,
    totalCount,
    goToPage,
  } = useFetchServiceImageVersionIssues({
    serviceCcrn,
    imageVersion,
  })

  useEffect(() => {
    if (error) {
      addMessage({
        variant: "error",
        text: error,
      })
    }
  }, [error])

  useEffect(() => {
    const filtered = issues.filter((issue) =>
      issue.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredIssues(filtered)
  }, [issues, searchTerm])

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term)
  }, [])

  const handleClear = useCallback(() => {
    setSearchTerm("")
  }, [])

  return (
    <>
      <Stack gap="2" className="mb-4 mt-8">
        <ContentHeading>Issues</ContentHeading>
        <SearchInput
          placeholder="Search term for CVE number"
          className="w-96 ml-auto"
          onSearch={handleSearch}
          onClear={handleClear}      
        />
      </Stack>
      <DataGrid columns={4} minContentColumns={[0, 1, 2]} cellVerticalAlignment="top">
        <DataGridRow>
          <DataGridHeadCell>
            <Icon icon="monitorHeart" />
          </DataGridHeadCell>
          <DataGridHeadCell>Issue</DataGridHeadCell>
          <DataGridHeadCell>Target Date</DataGridHeadCell>
          <DataGridHeadCell>Description</DataGridHeadCell>
        </DataGridRow>

        {isLoading ? (
          <EmptyDataGridRow colSpan={4}>
            <Stack gap="2" alignment="center">
              <div>Loading issues</div>
              <Spinner variant="primary"></Spinner>
            </Stack>
          </EmptyDataGridRow>
        ) : filteredIssues.length === 0 ? (
          <EmptyDataGridRow colSpan={4}>No issues found! 🚀</EmptyDataGridRow>
        ) : (
          !error && filteredIssues.map((issue, index) => <ImageVersionIssueListItem key={index} issue={issue} />)
        )}
      </DataGrid>
      {totalNumberOfPages > 1 && totalCount > 20 && (
        <Stack distribution="end" className="mt-4">
          <Pagination
            variant="number"
            currentPage={currentPage}
            onPressNext={goToPage}
            onPressPrevious={goToPage}
            pages={totalNumberOfPages}
          />
        </Stack>
      )}
    </>
  )
}
