/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"
import { DataGrid, DataGridRow, DataGridHeadCell, Pagination, Message } from "@cloudoperators/juno-ui-components"
import { ServiceListItem } from "./ServiceListItem"
import { FilterSettings } from "../../common/Filters/types"
import { useFetchServices } from "../useFetchServices"
import { EmptyDataGridRow } from "../../common/EmptyDataGridRow/EmptyDataGridRow"
import { useActions as messageActions } from "@cloudoperators/juno-messages-provider"

const COLUMN_SPAN = 6

type ServiceListProps = {
  filterSettings: FilterSettings
}

export const ServicesList = ({ filterSettings }: ServiceListProps) => {
  const { addMessage } = messageActions()

  const { loading, error, services, currentPage, totalNumberOfPages, goToPage } = useFetchServices({
    filterSettings,
  })

  useEffect(() => {
    if (error) {
      addMessage({
        variant: "error",
        text: error,
      })
    }
  }, [error])

  return (
    <div className="flex-1 flex flex-col gap-10 overflow-hidden">
      <div className="overflow-scroll">
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
              services.map((item) => <ServiceListItem key={item.name} item={item} />)
          }

          {
            /* if the request is fulfilled with no data */
            !loading && !error && services.length === 0 && (
              <EmptyDataGridRow colSpan={COLUMN_SPAN}>No services found</EmptyDataGridRow>
            )
          }
        </DataGrid>
      </div>
      {!!totalNumberOfPages && (
        <div className="flex justify-end">
          <Pagination
            variant="number"
            currentPage={currentPage}
            onPressNext={goToPage}
            onPressPrevious={goToPage}
            pages={totalNumberOfPages}
          />
        </div>
      )}
    </div>
  )
}
