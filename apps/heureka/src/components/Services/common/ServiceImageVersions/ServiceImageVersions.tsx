/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
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

export type ServiceImageVersion = {
  imageName: string
  imageVersion: string
  imageTag: string
  issueCounts: {
    critical: number
    high: number
    medium: number
    low: number
    none: number
  }
  serviceName: string
  totalCount?: number
}

type ServiceImageVersionsProps = {
  serviceName: string
  pageSize?: number
  onDetailsClick?: (version: ServiceImageVersion) => void
  className?: string
  showDetailsColumn?: boolean
}

export const ServiceImageVersions = ({
  serviceName,
  pageSize = 8,
  onDetailsClick,
  className,
  showDetailsColumn = false,
}: ServiceImageVersionsProps) => {
  const { loading, imageVersions, error, totalNumberOfPages, currentPage, goToPage, totalCount } =
    useFetchServiceImageVersions({
      serviceCcrn: serviceName || "",
      pageSize,
    })

  const formattedImageVersions = imageVersions.map((version) => ({
    imageName: version.ccrn,
    imageVersion: version.version,
    imageTag: version.tag,
    issueCounts: version.issueCounts,
    serviceName,
  }))

  const columnCount = showDetailsColumn ? 7 : 6

  return (
    <Stack gap="4" direction="vertical" className="w-full">
      <Stack distribution="between" alignment="center" className="w-full">
        {showDetailsColumn ? (
          <>
            <span>{totalCount} image versions in service</span>
            <Button
              variant="primary"
              size="small"
              onClick={() =>
                onDetailsClick?.({
                  imageName: "",
                  imageVersion: "",
                  imageTag: "",
                  issueCounts: { critical: 0, high: 0, medium: 0, low: 0, none: 0 },
                  serviceName: serviceName,
                  totalCount: totalCount,
                })
              }
            >
              Full Details
            </Button>
          </>
        ) : (
          <ContentHeading>Service Image Versions ({totalCount})</ContentHeading>
        )}
      </Stack>
      <DataGrid columns={columnCount} className={className}>
        <DataGridRow>
          <DataGridHeadCell>Image Name</DataGridHeadCell>
          <DataGridHeadCell>Tag</DataGridHeadCell>
          <DataGridHeadCell>Critical</DataGridHeadCell>
          <DataGridHeadCell>High</DataGridHeadCell>
          <DataGridHeadCell>Medium</DataGridHeadCell>
          <DataGridHeadCell>Low</DataGridHeadCell>
          {showDetailsColumn && <DataGridHeadCell></DataGridHeadCell>}
        </DataGridRow>
        {loading ? (
          <EmptyDataGridRow colSpan={columnCount}>Loading...</EmptyDataGridRow>
        ) : imageVersions?.length === 0 && !error ? (
          <EmptyDataGridRow colSpan={columnCount}>No image versions available.</EmptyDataGridRow>
        ) : (
          formattedImageVersions.map((version, index) => (
            <DataGridRow key={index}>
              <DataGridCell className="break-all overflow-hidden">
                <Stack gap="1" direction="vertical">
                  <Stack gap="0.5" direction="vertical">
                    <span>{version.imageName}</span>
                    <span className="text-sm text-theme-light">{version.imageVersion}</span>
                  </Stack>
                  <Stack gap="1" alignment="center">
                    <a
                      href={`https://${version.imageName}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-sm"
                    >
                      <Stack gap="1.5" alignment="center">
                        <Icon icon="openInNew" size="16" color="jn-global-text" onClick={() => {}} />
                        <span>Image registery</span>
                      </Stack>
                    </a>
                  </Stack>
                </Stack>
              </DataGridCell>
              <DataGridCell className="break-all overflow-hidden">{version.imageTag}</DataGridCell>
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
              {showDetailsColumn && (
                <DataGridCell>
                  <Icon icon="description" onClick={() => onDetailsClick?.(version)} />
                </DataGridCell>
              )}
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
