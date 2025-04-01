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

export type ComponentInstance = {
  id: string
  ccrn?: string | null
  region?: string | null
  cluster?: string | null
  namespace?: string | null
  domain?: string | null
  project?: string | null
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
  componentInstances?: {
    totalCount: number
    edges: Array<{
      node: ComponentInstance
    } | null>
  }
}

type ServiceImageVersionsProps = {
  service: ServiceType
  showFullTable?: boolean
  onVersionSelect?: (version: ServiceImageVersion) => void
}

export const ServiceImageVersions = ({ service, showFullTable, onVersionSelect }: ServiceImageVersionsProps) => {
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
    []
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
    [onVersionSelect, selectImageVersion]
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
            <DataGridRow
              key={index}
              onClick={() => {
                onVersionSelect?.(version)
                selectImageVersion({
                  service,
                  imageVersion: version,
                })
              }}
              className={`cursor-pointer ${onVersionSelect ? "active" : ""}`}
            >
              <DataGridCell className="service-image-versions-cell">
                <Stack gap="1" direction="vertical">
                  <Stack gap="0.5" direction="vertical">
                    <span>{version.imageRepository}</span>
                    <span className="text-sm text-theme-light">{version.imageVersion}</span>
                  </Stack>
                  <Stack gap="1" alignment="center">
                    <a
                      href={`https://${version.imageName}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Stack gap="1.5" alignment="center">
                        <Icon icon="openInNew" size="16" color="jn-global-text" />
                        <span>Image registery</span>
                      </Stack>
                    </a>
                  </Stack>
                </Stack>
              </DataGridCell>
              <DataGridCell className="service-image-versions-cell">{version.imageTag}</DataGridCell>
              <DataGridCell>
                {version.issueCounts.critical ? (
                  <Badge icon text={version.issueCounts.critical.toString()} variant="danger" />
                ) : (
                  "-"
                )}
              </DataGridCell>
              <DataGridCell>
                {version.issueCounts.high ? (
                  <Badge icon text={version.issueCounts.high.toString()} variant="warning" />
                ) : (
                  "-"
                )}
              </DataGridCell>
              <DataGridCell>{version.issueCounts.medium || "-"}</DataGridCell>
              <DataGridCell>{version.issueCounts.low || "-"}</DataGridCell>
              <DataGridCell>
                <Button
                  size="small"
                  label="Show Details"
                  onClick={(e) => {
                    e.stopPropagation()
                    showServiceDetails({
                      service,
                      imageVersion: version,
                    })
                  }}
                />
              </DataGridCell>
            </DataGridRow>
          ))
        )}
      </DataGrid>
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
