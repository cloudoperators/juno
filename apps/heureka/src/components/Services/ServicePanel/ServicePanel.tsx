/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import {
  Panel,
  Stack,
  PanelBody,
  ContentHeading,
  DataGrid,
  DataGridRow,
  DataGridCell,
  DataGridHeadCell,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  Button,
  Pagination,
  Badge,
  Icon,
  Message,
} from "@cloudoperators/juno-ui-components"
import { useFetchServiceImageVersions } from "../useFetchServiceImageVersions"
import { capitalizeFirstLetter, truncateVersion } from "../../common/Helpers/helpers"
import { EmptyDataGridRow } from "../../common/EmptyDataGridRow/EmptyDataGridRow"
import { ServiceType } from "../Services"

export type IssueCounts = {
  critical: number
  high: number
  medium: number
  low: number
  none: number
}

type ServicePanelProps = {
  service: ServiceType
  isLoading?: boolean
  onClose: () => void
}

export const ServicePanel = ({ service, isLoading = false, onClose }: ServicePanelProps) => {
  const { loading, imageVersions, error, totalNumberOfPages, currentPage, goToPage, totalCount } =
    useFetchServiceImageVersions({
      serviceCcrn: service?.name || "",
      pageSize: 8,
    })

  // Show total count except when loading and it's the first load for a service
  const showTotalCount = !loading || imageVersions.length > 0

  const formattedImageVersions = imageVersions.map((version) => ({
    imageName: version.ccrn,
    imageVersion: version.version,
    issueCounts: version.issueCounts,
    serviceName: service?.name,
  }))

  return (
    <Panel
      heading={
        <Stack gap="2">
          <span>{capitalizeFirstLetter(service.name)} Service Overview</span>
        </Stack>
      }
      opened={true}
      onClose={onClose}
      size="large"
    >
      <PanelBody>
        <Stack gap="2" distribution="between" alignment="center" className="mb-2">
          <ContentHeading
            heading={`${capitalizeFirstLetter(service.name)} Image Versions${showTotalCount ? ` (${totalCount})` : ""}`}
          />
          <Button
            disabled
            variant="primary"
            size="small"
            onClick={() => {
              // TODO: Navigate to service details page
              onClose()
            }}
          >
            Full Details
          </Button>
        </Stack>
        <DataGrid columns={7}>
          <DataGridRow>
            <DataGridHeadCell>Image Name</DataGridHeadCell>
            <DataGridHeadCell>Version</DataGridHeadCell>
            <DataGridHeadCell>Critical</DataGridHeadCell>
            <DataGridHeadCell>High</DataGridHeadCell>
            <DataGridHeadCell>Medium</DataGridHeadCell>
            <DataGridHeadCell>Low</DataGridHeadCell>
            <DataGridHeadCell>Actions</DataGridHeadCell>
          </DataGridRow>
          {loading ? (
            <EmptyDataGridRow colSpan={7}>Loading...</EmptyDataGridRow>
          ) : formattedImageVersions?.length === 0 ? (
            <EmptyDataGridRow colSpan={7}>No image versions available.</EmptyDataGridRow>
          ) : error ? (
            <EmptyDataGridRow colSpan={7}>
              <Message variant="error">{error}</Message>
            </EmptyDataGridRow>
          ) : (
            formattedImageVersions.map((version, index) => (
              <DataGridRow key={index}>
                <DataGridCell className="break-all overflow-hidden">
                  <Stack gap="1" direction="vertical">
                    <span>{version.imageName}</span>
                    <Stack gap="1" alignment="center">
                      <a
                        href={`https://${version.imageName}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-sm"
                      >
                        <Stack gap="1.5" alignment="center">
                          <Icon icon="openInNew" size="16" color="jn-global-text" onClick={() => {}} />
                          <span>Image repository</span>
                        </Stack>
                      </a>
                    </Stack>
                  </Stack>
                </DataGridCell>
                <DataGridCell>
                  <Tooltip triggerEvent="hover" placement="top">
                    <TooltipTrigger>{truncateVersion(version.imageVersion)}</TooltipTrigger>
                    <TooltipContent>{version.imageVersion}</TooltipContent>
                  </Tooltip>
                </DataGridCell>
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
                    disabled
                    variant="primary"
                    size="small"
                    onClick={() => {
                      // TODO: Navigate to service details page
                      onClose()
                    }}
                  >
                    Show Details
                  </Button>
                </DataGridCell>
              </DataGridRow>
            ))
          )}
        </DataGrid>
      </PanelBody>
      {totalNumberOfPages > 1 && (
        <div className="flex justify-end px-4 py-2">
          <Pagination
            variant="number"
            currentPage={currentPage}
            onPressNext={goToPage}
            onPressPrevious={goToPage}
            pages={totalNumberOfPages}
          />
        </div>
      )}
    </Panel>
  )
}
