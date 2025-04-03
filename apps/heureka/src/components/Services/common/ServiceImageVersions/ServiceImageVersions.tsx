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
  ContentHeading,
} from "@cloudoperators/juno-ui-components"
import { EmptyDataGridRow } from "../../../common/EmptyDataGridRow/EmptyDataGridRow"
import { useFetchServiceImageVersions } from "../../useFetchServiceImageVersions"
import { useDispatch } from "../../../../store/StoreProvider"
import { ActionType, UserView } from "../../../../store/StoreProvider/types"
import { ServiceType } from "../../Services"
import ServiceImageVersionsItem from "./ServiceImageVersionsItem"
import { ServiceImageVersion } from "../../utils"

type ServiceImageVersionsProps = {
  service: ServiceType
  showFullTable?: boolean
  selectedImageVersion?: ServiceImageVersion | null
  onVersionSelect?: (version: ServiceImageVersion) => void
}

const COLUMN_COUNT = 7

export const ServiceImageVersions = ({
  service,
  selectedImageVersion,
  showFullTable,
  onVersionSelect,
}: ServiceImageVersionsProps) => {
  const dispatch = useDispatch()
  const { name: serviceName } = service
  const { loading, imageVersions, error, totalNumberOfPages, currentPage, goToPage, totalCount } =
    useFetchServiceImageVersions({
      serviceCcrn: serviceName || "",
      pageSize: 10,
    })

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
    <Stack gap="4" direction="vertical" className="w-full">
      <Stack distribution="between" alignment="center" className="w-full">
        {showFullTable ? (
          <>
            <span>{totalCount} image versions in service</span>
            <Button variant="primary" size="small" onClick={() => showServiceDetails({ service })}>
              Full Details
            </Button>
          </>
        ) : (
          <ContentHeading>Service Image Versions ({totalCount})</ContentHeading>
        )}
      </Stack>
      <div className="datagrid-hover">
        <DataGrid columns={COLUMN_COUNT}>
          <DataGridRow>
            <DataGridHeadCell>Image Repository</DataGridHeadCell>
            <DataGridHeadCell>Tag</DataGridHeadCell>
            <DataGridHeadCell>Critical</DataGridHeadCell>
            <DataGridHeadCell>High</DataGridHeadCell>
            <DataGridHeadCell>Medium</DataGridHeadCell>
            <DataGridHeadCell>Low</DataGridHeadCell>
            <DataGridHeadCell></DataGridHeadCell>
          </DataGridRow>
          {loading ? (
            <EmptyDataGridRow colSpan={COLUMN_COUNT}>Loading...</EmptyDataGridRow>
          ) : imageVersions?.length === 0 && !error ? (
            <EmptyDataGridRow colSpan={COLUMN_COUNT}>No image versions available.</EmptyDataGridRow>
          ) : (
            imageVersions.map((imageVersion, index) => (
              <ServiceImageVersionsItem
                key={index}
                version={imageVersion}
                selected={selectedImageVersion?.version === imageVersion.version}
                displayDetailsButton={showFullTable || false}
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
      {totalNumberOfPages > 1 && (
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
    </Stack>
  )
}
