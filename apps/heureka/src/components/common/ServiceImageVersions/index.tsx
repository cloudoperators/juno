/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"
import {
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  Button,
  Stack,
  Pagination,
  DataGridToolbar,
  Spinner,
} from "@cloudoperators/juno-ui-components"
import { EmptyDataGridRow } from "../EmptyDataGridRow"
import { useFetchServiceImageVersions } from "../../Services/useFetchServiceImageVersions"
import ServiceImageVersionsItem from "./ServiceImageVersionsItem"
import { ServiceImageVersion } from "../../Services/utils"
import SectionContentHeading from "../SectionContentHeading"
import { ServiceType } from "../../types"

type ServiceImageVersionsProps = {
  service: ServiceType
  displayActions?: boolean
  defaultSelectedImageVersion?: string
  onImageVersionItemClick?: (imageVersion: ServiceImageVersion) => void
  onDetailsButtonClick?: (imageVersion: ServiceImageVersion | undefined) => void
}

const COLUMN_COUNT = 8

export const ServiceImageVersions = ({
  service,
  defaultSelectedImageVersion,
  displayActions = false,
  onImageVersionItemClick,
  onDetailsButtonClick,
}: ServiceImageVersionsProps) => {
  const { name: serviceName } = service
  const { loading, imageVersions, error, totalNumberOfPages, currentPage, goToPage, totalImageVersions } =
    useFetchServiceImageVersions({
      serviceCcrn: serviceName || "",
      pageSize: 20,
    })
  const gridColumnCount = displayActions ? COLUMN_COUNT : COLUMN_COUNT - 1

  /**
   * TODO: remove this affect by refactoring ServiceImageVersions component
   * when imageVersions are loaded or the default selection is changed
   * inform parent to change the highlighted image version in the list
   */
  useEffect(() => {
    if (defaultSelectedImageVersion) {
      const imageVersion = imageVersions.find((iv) => iv.version === defaultSelectedImageVersion)
      if (imageVersion) {
        onImageVersionItemClick?.(imageVersion)
      }
    }
  }, [imageVersions.length, defaultSelectedImageVersion])

  return (
    <>
      <SectionContentHeading>Image Versions ({totalImageVersions})</SectionContentHeading>

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
        <DataGrid columns={gridColumnCount} minContentColumns={[2, 3, 4, 5, 6]}>
          <DataGridRow>
            <DataGridHeadCell>Image Repository</DataGridHeadCell>
            <DataGridHeadCell>Tag</DataGridHeadCell>
            <DataGridHeadCell colSpan={5}>Issue Counts</DataGridHeadCell>
            {displayActions && <DataGridHeadCell></DataGridHeadCell>}
          </DataGridRow>
          {loading ? (
            <EmptyDataGridRow colSpan={gridColumnCount}>
              <Stack gap="2" alignment="center">
                <div>Loading</div>
                <Spinner variant="primary"></Spinner>
              </Stack>
            </EmptyDataGridRow>
          ) : imageVersions?.length === 0 && !error ? (
            <EmptyDataGridRow colSpan={gridColumnCount}>No images available.</EmptyDataGridRow>
          ) : (
            imageVersions.map((imageVersion, index) => (
              <ServiceImageVersionsItem
                key={index}
                version={imageVersion}
                selected={imageVersion.version === defaultSelectedImageVersion}
                displayDetailsButton={displayActions}
                onItemClick={() => {
                  onImageVersionItemClick?.(imageVersion)
                }}
                onDetailClick={(event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
                  event.stopPropagation()
                  onDetailsButtonClick?.(imageVersion)
                }}
              />
            ))
          )}
        </DataGrid>
      </div>
      {totalNumberOfPages > 1 && totalImageVersions > 20 && (
        <Stack distribution="end">
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
