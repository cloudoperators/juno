/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import { ApolloQueryResult } from "@apollo/client"
import {
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  Button,
  Stack,
  DataGridToolbar,
  Spinner,
} from "@cloudoperators/juno-ui-components"
import { EmptyDataGridRow } from "../EmptyDataGridRow"
import { ServiceImageVersion } from "../../Services/utils"
import SectionContentHeading from "../SectionContentHeading"
import { GetServiceImageVersionsQuery } from "../../../generated/graphql"
import { ImageVersionsTotalCount } from "./ImageVersionsTotalCount"
import { ImageVersionsDataRows } from "./ImageVersionsDataRows"
import { ImageVersionsPagination } from "./ImageVersionsPagination"

type ServiceImageVersionsProps = {
  imageVersionsPromise: Promise<ApolloQueryResult<GetServiceImageVersionsQuery>>
  displayActions?: boolean
  selectedImageVersion?: string
  onImageVersionItemClick?: (imageVersion: ServiceImageVersion) => void
  onDetailsButtonClick?: (imageVersion: ServiceImageVersion | undefined) => void
}

const DEFAULT_COLUMNS_COUNT = 8

export const ServiceImageVersions = ({
  imageVersionsPromise,
  selectedImageVersion,
  displayActions = false,
  onImageVersionItemClick,
  onDetailsButtonClick,
}: ServiceImageVersionsProps) => {
  const columnsCount = displayActions ? DEFAULT_COLUMNS_COUNT : DEFAULT_COLUMNS_COUNT - 1

  return (
    <Suspense>
      <SectionContentHeading>
        Image Versions
        <Suspense>
          (<ImageVersionsTotalCount imageVersionsPromise={imageVersionsPromise} />)
        </Suspense>
      </SectionContentHeading>

      {displayActions && (
        <DataGridToolbar>
          <Button
            size="small"
            onClick={
              () => onDetailsButtonClick?.(undefined) // we're opening service details page with no image version selected
            }
            className="whitespace-nowrap"
          >
            Full Details
          </Button>
        </DataGridToolbar>
      )}

      <div className="datagrid-hover">
        <DataGrid columns={columnsCount} minContentColumns={[2, 3, 4, 5, 6]}>
          <DataGridRow>
            <DataGridHeadCell>Image Repository</DataGridHeadCell>
            <DataGridHeadCell>Tag</DataGridHeadCell>
            <DataGridHeadCell colSpan={5}>Issue Counts</DataGridHeadCell>
            {displayActions && <DataGridHeadCell></DataGridHeadCell>}
          </DataGridRow>
          <Suspense
            fallback={
              <EmptyDataGridRow colSpan={columnsCount}>
                <Stack gap="2" alignment="center">
                  <div>Loading</div>
                  <Spinner variant="primary"></Spinner>
                </Stack>
              </EmptyDataGridRow>
            }
          >
            <ImageVersionsDataRows
              columnSpan={columnsCount}
              displayDetailsButton={displayActions}
              imageVersionsPromise={imageVersionsPromise}
              selectedImageVersion={selectedImageVersion}
              onDetailsButtonClick={onDetailsButtonClick}
              onImageVersionItemClick={onImageVersionItemClick}
            />
          </Suspense>
        </DataGrid>
      </div>
      <Suspense>
        <ImageVersionsPagination imageVersionsPromise={imageVersionsPromise} />
      </Suspense>
    </Suspense>
  )
}
