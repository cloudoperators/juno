/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useState } from "react"
import { DataGrid, DataGridRow, DataGridHeadCell, Pagination, Stack, Spinner } from "@cloudoperators/juno-ui-components"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { ServiceListItem } from "./ServiceListItem"
import { EmptyDataGridRow } from "../../common/EmptyDataGridRow"
import { ServicePanel } from "./ServicePanel"
import { useDispatch } from "../../../store/StoreProvider"
import { ActionType, UserView } from "../../../store/StoreProvider/types"
import { ServiceType } from "../../types"

const COLUMN_SPAN = 8

type ServiceListProps = {
  services: ServiceType[]
  loading: boolean
  error: string | null
  currentPage: number
  totalNumberOfPages: number
  goToPage: (newPage?: number | undefined) => void
}

export const ServicesList = ({
  services,
  loading,
  error,
  currentPage,
  totalNumberOfPages,
  goToPage,
}: ServiceListProps) => {
  const dispatch = useDispatch()
  const [selectedOverviewService, setSelectedOverviewService] = useState<ServiceType | null>(null)

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

  return (
    <div className="datagrid-hover">
      <DataGrid minContentColumns={[1, 2, 3, 4, 5, 7]} columns={COLUMN_SPAN}>
        <DataGridRow>
          <DataGridHeadCell>Service</DataGridHeadCell>
          <DataGridHeadCell colSpan={5} className="whitespace-nowrap">
            Issue Counts
          </DataGridHeadCell>
          <DataGridHeadCell>Details</DataGridHeadCell>
          <DataGridHeadCell></DataGridHeadCell>
        </DataGridRow>
        {
          /* if request is in flight */
          loading && (
            <EmptyDataGridRow colSpan={COLUMN_SPAN}>
              <Stack gap="2" alignment="center">
                <div>Loading</div>
                <Spinner variant="primary"></Spinner>
              </Stack>
            </EmptyDataGridRow>
          )
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
