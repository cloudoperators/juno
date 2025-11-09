/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import { ApolloQueryResult } from "@apollo/client"
import { DataGrid, DataGridRow, DataGridHeadCell, Button, DataGridToolbar } from "@cloudoperators/juno-ui-components"
import { getNormalizedImageVersionsResponse, ServiceImageVersion } from "../../Services/utils"
import SectionContentHeading from "../SectionContentHeading"
import { GetServiceImageVersionsQuery } from "../../../generated/graphql"
import { ImageVersionsTotalCount } from "./ImageVersionsTotalCount"
import { ImageVersionsDataRows } from "./ImageVersionsDataRows"
import { CursorPagination } from "../CursorPagination"
import { LoadingDataRow } from "../LoadingDataRow"
import { ErrorBoundary } from "../ErrorBoundary"
import { getErrorDataRowComponent } from "../getErrorDataRow"

type ServiceImageVersionsProps = {
  imageVersionsPromise: Promise<ApolloQueryResult<GetServiceImageVersionsQuery>>
  displayActions?: boolean
  selectedImageVersion?: string
  onImageVersionItemClick?: (imageVersion: ServiceImageVersion) => void
  onDetailsButtonClick?: (imageVersion: ServiceImageVersion | undefined) => void
  goToPage: (after?: string | null) => void
}

const DEFAULT_COLUMNS_COUNT = 9

export const ServiceImageVersions = ({
  imageVersionsPromise,
  selectedImageVersion,
  displayActions = false,
  onImageVersionItemClick,
  onDetailsButtonClick,
  goToPage,
}: ServiceImageVersionsProps) => {
  const columnsCount = displayActions ? DEFAULT_COLUMNS_COUNT : DEFAULT_COLUMNS_COUNT - 1

  return (
    <>
      <SectionContentHeading>
        Image Versions
        <ErrorBoundary>
          <Suspense>
            (<ImageVersionsTotalCount imageVersionsPromise={imageVersionsPromise} />)
          </Suspense>
        </ErrorBoundary>
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
        <DataGrid columns={columnsCount} minContentColumns={[2, 3, 4, 5, 6, 7]}>
          <DataGridRow>
            <DataGridHeadCell>Image Repository</DataGridHeadCell>
            <DataGridHeadCell>Tag</DataGridHeadCell>
            <DataGridHeadCell>Occurrences</DataGridHeadCell>
            <DataGridHeadCell colSpan={5}>Vulnerability Counts</DataGridHeadCell>
            {displayActions && <DataGridHeadCell></DataGridHeadCell>}
          </DataGridRow>
          <ErrorBoundary
            displayErrorMessage
            resetKeys={[imageVersionsPromise]}
            fallbackRender={getErrorDataRowComponent({ colspan: columnsCount })}
          >
            <Suspense fallback={<LoadingDataRow colSpan={columnsCount} />}>
              <ImageVersionsDataRows
                columnSpan={columnsCount}
                displayDetailsButton={displayActions}
                imageVersionsPromise={imageVersionsPromise}
                selectedImageVersion={selectedImageVersion}
                onDetailsButtonClick={onDetailsButtonClick}
                onImageVersionItemClick={onImageVersionItemClick}
              />
            </Suspense>
          </ErrorBoundary>
        </DataGrid>
      </div>
      <ErrorBoundary>
        <Suspense>
          <CursorPagination
            dataNormalizationMethod={getNormalizedImageVersionsResponse}
            dataPromise={imageVersionsPromise}
            goToPage={goToPage}
          />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
