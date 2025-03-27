/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback, useEffect } from "react"
import { DataGrid, DataGridRow, DataGridHeadCell, Pagination, Modal, Stack } from "@cloudoperators/juno-ui-components"
import { ServiceListItem } from "./ServiceListItem"
import { EmptyDataGridRow } from "../../common/EmptyDataGridRow/EmptyDataGridRow"
import { useActions as messageActions } from "@cloudoperators/juno-messages-provider"
import { ServicePanel } from "../ServicePanel/ServicePanel"
import { ServiceType } from "../Services"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { ServiceImageVersion } from "../common/ServiceImageVersions"

const COLUMN_SPAN = 6

type ServiceListProps = {
  loading: boolean
  error?: string | null
  services: ServiceType[]
  currentPage?: number
  totalNumberOfPages: number
  goToPage: (page: number | undefined) => void
  onShowDetails: (service: ServiceType, version?: ServiceImageVersion) => void
}

export const ServicesList = ({
  loading,
  error,
  services,
  currentPage,
  totalNumberOfPages,
  goToPage,
  onShowDetails,
}: ServiceListProps) => {
  const { addMessage } = messageActions()
  const [selectedOverviewService, setSelectedOverviewService] = useState<ServiceType | null>(null)

  const handleServiceOverviewOpen = useCallback((service: ServiceType) => {
    setSelectedOverviewService((prev) => (prev?.id === service.id ? null : service))
  }, [])

  const handleServiceDetailsOpen = useCallback(
    (service: ServiceType) => {
      onShowDetails(service) // Navigate to details page
    },
    [onShowDetails]
  )

  const handlePanelClose = useCallback(() => {
    setSelectedOverviewService(null)
  }, [])

  useEffect(() => {
    if (error) {
      addMessage({
        variant: "error",
        text: error,
      })
    }
  }, [error])

  return (
    <div className="services">
      <DataGrid minContentColumns={[5]} columns={COLUMN_SPAN}>
        <DataGridRow>
          <DataGridHeadCell>Service</DataGridHeadCell>
          <DataGridHeadCell>Issues count</DataGridHeadCell>
          <DataGridHeadCell>Service details</DataGridHeadCell>
          <DataGridHeadCell>No. Components</DataGridHeadCell>
          <DataGridHeadCell>Service owners</DataGridHeadCell>
          <DataGridHeadCell></DataGridHeadCell>
        </DataGridRow>
        {
          /* if request is in flight */
          loading && <EmptyDataGridRow colSpan={COLUMN_SPAN}>Loading...</EmptyDataGridRow>
        }

        {
          /* if the request is fulfilled with the data */
          !loading &&
            !error &&
            services.length > 0 &&
            services.map((item) => (
              <ServiceListItem
                key={item.id}
                item={item}
                selected={selectedOverviewService?.id === item.id}
                onItemClick={() => handleServiceOverviewOpen(item)}
                onServiceDetailClick={() => handleServiceDetailsOpen(item)}
              />
            ))
        }

        {
          /* if the request is fulfilled with no data */
          !loading && !error && services.length === 0 && (
            <EmptyDataGridRow colSpan={COLUMN_SPAN}>No services found</EmptyDataGridRow>
          )
        }
      </DataGrid>

      {!!totalNumberOfPages && (
        <Stack distribution="end" className="mt-4">
          <Pagination
            variant="number"
            currentPage={currentPage}
            onPressNext={goToPage}
            onPressPrevious={goToPage}
            pages={totalNumberOfPages}
          />
        </Stack>
      )}

      {selectedOverviewService && (
        <MessagesProvider>
          <ServicePanel service={selectedOverviewService} onClose={handlePanelClose} onShowDetails={onShowDetails} />
        </MessagesProvider>
      )}
    </div>
  )
}
