/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DataGrid, DataGridRow, DataGridHeadCell, Stack, Icon } from "@cloudoperators/juno-ui-components"
import { EmptyDataGridRow } from "../../../common/EmptyDataGridRow/EmptyDataGridRow"
import { useFetchServiceImageVersionIssues } from "../../useFetchServiceImageVersionIssues"
import { ImageVersionIssueListItem } from "./ImageVersionIssueListItem"

type ImageVersionIssuesListProps = {
  serviceCcrn: string
  imageVersion: string
}

export const ImageVersionIssuesList = ({ serviceCcrn, imageVersion }: ImageVersionIssuesListProps) => {
  const { issues, loading: isLoading } = useFetchServiceImageVersionIssues({
    serviceCcrn,
    imageVersion,
  })

  return (
    <Stack gap="4" direction="vertical">
      <DataGrid columns={4} minContentColumns={[0, 1, 2]}>
        <DataGridRow>
          <DataGridHeadCell>
            <Icon icon="monitorHeart" />
          </DataGridHeadCell>
          <DataGridHeadCell>Issue</DataGridHeadCell>
          <DataGridHeadCell>Target Date</DataGridHeadCell>
          <DataGridHeadCell>Description</DataGridHeadCell>
        </DataGridRow>

        {isLoading ? (
          <EmptyDataGridRow colSpan={4}>Loading issues...</EmptyDataGridRow>
        ) : issues.length === 0 ? (
          <EmptyDataGridRow colSpan={4}>No issues found.</EmptyDataGridRow>
        ) : (
          issues.map((issue, index) => <ImageVersionIssueListItem key={index} issue={issue} />)
        )}
      </DataGrid>
    </Stack>
  )
}
