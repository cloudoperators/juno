/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from "react"
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
import { useDispatch } from "../../../store/StoreProvider"
import { ActionType, UserView } from "../../../store/StoreProvider/types"
import ServiceImageVersionsItem from "./ServiceImageVersionsItem"
import { ServiceImageVersion } from "../../Services/utils"
import SectionContentHeading from "../SectionContentHeading"
import { ServiceType } from "../../types"

type ServiceImageVersionsProps = {
  service: ServiceType
  displayActions?: boolean
  selectedImageVersion?: ServiceImageVersion | null
  onVersionSelect?: (version: ServiceImageVersion) => void
}

const COLUMN_COUNT = 8

export const ServiceImageVersions = ({
  service,
  selectedImageVersion,
  displayActions = false,
  onVersionSelect,
}: ServiceImageVersionsProps) => {
  const dispatch = useDispatch()
  const { name: serviceName } = service
  const { loading, imageVersions, error, totalNumberOfPages, currentPage, goToPage, totalCount } =
    useFetchServiceImageVersions({
      serviceCcrn: serviceName || "",
      pageSize: 20,
    })
  const gridColumnCount = displayActions ? COLUMN_COUNT : COLUMN_COUNT - 1

  const selectImageVersion = useCallback(
    ({ service, imageVersion }: { service: ServiceType; imageVersion: ServiceImageVersion }) => {
      dispatch({
        type: ActionType.SelectImageVersion,
        payload: {
          service,
          imageVersion,
          showPanel: true,
        },
      })
    },
    [dispatch]
  )

  const showServiceDetails = useCallback(
    ({ service, imageVersion }: { service: ServiceType; imageVersion?: ServiceImageVersion }) => {
      if (imageVersion) {
        onVersionSelect?.(imageVersion)
        selectImageVersion({
          service,
          imageVersion,
        })
      }
      dispatch({
        type: ActionType.SelectView,
        payload: {
          viewId: UserView.ServiceDetails,
          params: {
            service,
            imageVersion,
          },
        },
      })
    },
    [onVersionSelect, selectImageVersion, dispatch]
  )

  return (
    <>
      <SectionContentHeading>Image Versions ({totalCount})</SectionContentHeading>

      {displayActions && (
        <DataGridToolbar>
          <Button size="small" onClick={() => showServiceDetails({ service })} className="whitespace-nowrap">
            Full Details
          </Button>
        </DataGridToolbar>
      )}

      <div className="datagrid-hover">
        <DataGrid columns={gridColumnCount} minContentColumns={[2, 3, 4, 5]}>
          <DataGridRow>
            <DataGridHeadCell>Image Repository</DataGridHeadCell>
            <DataGridHeadCell>Tag</DataGridHeadCell>
            <DataGridHeadCell></DataGridHeadCell>
            <DataGridHeadCell></DataGridHeadCell>
            <DataGridHeadCell></DataGridHeadCell>
            <DataGridHeadCell></DataGridHeadCell>
            <DataGridHeadCell></DataGridHeadCell>
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
                selected={selectedImageVersion?.version === imageVersion.version}
                displayDetailsButton={displayActions}
                onItemClick={() => {
                  onVersionSelect?.(imageVersion)
                  selectImageVersion({
                    service,
                    imageVersion: imageVersion,
                  })
                }}
                onDetailClick={(event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
                  event.stopPropagation()
                  showServiceDetails({
                    service,
                    imageVersion: imageVersion,
                  })
                }}
              />
            ))
          )}
        </DataGrid>
      </div>
      {totalNumberOfPages > 1 && totalCount > 20 && (
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
