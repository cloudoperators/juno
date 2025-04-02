/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from "react"
import {
  DataGrid,
  DataGridRow,
  DataGridCell,
  DataGridHeadCell,
  Button,
  Badge,
  Icon,
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

export type ComponentInstance = {
  id: string
  ccrn?: string | ""
  region?: string | ""
  cluster?: string | ""
  namespace?: string | ""
  pod?: string | ""
  container?: string | ""
}

export type ComponentInstancesConnection = {
  totalCount: number
  edges: Array<{
    node: ComponentInstance
  } | null>
}

export type ServiceImageVersion = {
  imageName: string
  imageVersion: string
  imageTag: string
  imageRepository: string
  issueCounts: {
    critical: number
    high: number
    medium: number
    low: number
    none: number
  }
  serviceName: string
  totalCount?: number
  componentInstances?: ComponentInstancesConnection
}

type ServiceImageVersionsProps = {
  service: ServiceType
  showFullTable?: boolean
  selectedImageVersion?: ServiceImageVersion | null
  onVersionSelect?: (version: ServiceImageVersion) => void
}

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

  const formattedImageVersions = imageVersions.map((version) => ({
    imageName: version.ccrn,
    imageVersion: version.version,
    imageTag: version.tag,
    imageRepository: version.repository,
    issueCounts: version.issueCounts,
    serviceName,
    componentInstances: version.componentInstances
      ? {
          totalCount: version.componentInstances.totalCount,
          edges: version.componentInstances.edges,
        }
      : undefined,
  }))

  const columnCount = 7

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
        <DataGrid columns={columnCount}>
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
            <EmptyDataGridRow colSpan={columnCount}>Loading...</EmptyDataGridRow>
          ) : imageVersions?.length === 0 && !error ? (
            <EmptyDataGridRow colSpan={columnCount}>No image versions available.</EmptyDataGridRow>
          ) : (
            formattedImageVersions.map((version, index) => (
              <ServiceImageVersionsItem
                key={index}
                version={version}
                selected={selectedImageVersion?.imageVersion === version.imageVersion}
                displayDetailsButton={showFullTable || false}
                onItemClick={() => {
                  onVersionSelect?.(version)
                  selectImageVersion({
                    service,
                    imageVersion: version,
                  })
                }}
                onDetailClick={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.stopPropagation()
                  showServiceDetails({
                    service,
                    imageVersion: version,
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
