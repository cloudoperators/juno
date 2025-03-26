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

const COLUMN_SPAN = 6

type ServiceListProps = {
  loading: boolean
  error?: string | null
  services: ServiceType[]
  currentPage?: number
  totalNumberOfPages: number
  goToPage: (page: number | undefined) => void
}

export const ServicesList = ({
  loading,
  error,
  services,
  currentPage,
  totalNumberOfPages,
  goToPage,
}: ServiceListProps) => {
  const { addMessage } = messageActions()
  const [selectedOverviewService, setSelectedOverviewService] = useState<ServiceType | null>(null)
  const [selectedDetailService, setSelectedDetailService] = useState<ServiceType | null>(null)

  const handlePanelClose = useCallback(() => {
    setSelectedOverviewService(null)
  }, [selectedOverviewService])

  const handleServiceOverviewOpen = useCallback(
    (service: ServiceType) => {
      setSelectedOverviewService(service.name === selectedOverviewService?.name ? null : service)
    },
    [selectedOverviewService]
  )

  const handleServiceDetailsOpen = useCallback(
    (service: ServiceType) => {
      setSelectedDetailService(service.name === selectedDetailService?.name ? null : service)
    },
    [selectedDetailService]
  )

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
                selectedItemId={selectedOverviewService?.id || ""}
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
      {selectedOverviewService && <ServicePanel service={selectedOverviewService} onClose={handlePanelClose} />}
      {selectedDetailService && (
        <Modal title="Service Details" open={true} onCancel={() => setSelectedDetailService(null)}>
          <div>Comming soon...</div>
        </Modal>
      )}
    </div>
  )
}
