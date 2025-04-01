/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useEffect, useState } from "react"
import { DataGrid, DataGridRow, DataGridHeadCell, Pagination, Stack } from "@cloudoperators/juno-ui-components"
import { ServiceListItem } from "./ServiceListItem"
import { EmptyDataGridRow } from "../../common/EmptyDataGridRow/EmptyDataGridRow"
import { useActions as useMessageActions } from "@cloudoperators/juno-messages-provider"
import { ServicePanel } from "../ServicePanel/ServicePanel"
import { ServiceType } from "../Services"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { useFetchServices } from "../useFetchServices"
import { FilterSettings } from "../../common/Filters/types"
import { useDispatch } from "../../../store/StoreProvider"
import { ActionType, UserView } from "../../../store/StoreProvider/types"

const COLUMN_SPAN = 6

type ServiceListProps = {
  filterSettings: FilterSettings
}

export const ServicesList = ({ filterSettings }: ServiceListProps) => {
  const dispatch = useDispatch()
  const { addMessage } = useMessageActions()
  const [selectedOverviewService, setSelectedOverviewService] = useState<ServiceType | null>(null)
  const { loading, error, services, currentPage, totalNumberOfPages, goToPage } = useFetchServices({
    filterSettings,
  })

  const handleServiceOverviewOpen = useCallback((service: ServiceType) => {
    setSelectedOverviewService((prev) => (prev?.id === service.id ? null : service))
  }, [])

  const handlePanelClose = useCallback(() => {
    setSelectedOverviewService(null)
  }, [])

  const goToServiceDetails = useCallback((service: ServiceType) => {
    dispatch({
      type: ActionType.SelectView,
      payload: {
        viewId: UserView.ServiceDetails,
        params: {
          service,
        },
      },
    })
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
    <div className="datagrid-hover">
      <DataGrid minContentColumns={[5]} columns={COLUMN_SPAN}>
        <DataGridRow>
          <DataGridHeadCell>Service</DataGridHeadCell>
          <DataGridHeadCell>Issues count</DataGridHeadCell>
          <DataGridHeadCell>Service details</DataGridHeadCell>
          <DataGridHeadCell>No. Components</DataGridHeadCell>
          <DataGridHeadCell>Service owners</DataGridHeadCell>
          <DataGridHeadCell>Actions</DataGridHeadCell>
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
            services.map((item: ServiceType) => (
              <ServiceListItem
                key={item.id}
                item={item}
                selected={selectedOverviewService?.id === item.id}
                onItemClick={() => handleServiceOverviewOpen(item)}
                onServiceDetailClick={() => goToServiceDetails(item)}
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
          <ServicePanel service={selectedOverviewService} onClose={handlePanelClose} />
        </MessagesProvider>
      )}
    </div>
  )
}
