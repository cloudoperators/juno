/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { DataGrid, DataGridRow, DataGridHeadCell, Pagination, Message } from "@cloudoperators/juno-ui-components"
import { ServiceListItem } from "./ServiceListItem"
import { FilterSettings } from "../../common/Filters/types"
import { useFetchServices } from "../useFetchServices"
import { EmptyDataGridRow } from "../../common/EmptyDataGridRow/EmptyDataGridRow"
import { ServicePanel, ServiceOverViewPanelType } from "../ServicePanel/ServicePanel"
import { ServiceType } from "../Services"

const COLUMN_SPAN = 6

type ServiceListProps = {
  filterSettings: FilterSettings
}

export const ServicesList = ({ filterSettings }: ServiceListProps) => {
  const { loading, error, services, currentPage, totalNumberOfPages, goToPage } = useFetchServices({
    filterSettings,
  })

  const [selectedService, setSelectedService] = useState<ServiceOverViewPanelType | null>(null)
  const handleServiceClick = (service: ServiceType) => {
    // Transform ServiceType to ServiceOverViewPanelType
    const panelService: ServiceOverViewPanelType = {
      imageName: service.name,
      imageVersion: "1.0.0", // This should come from your service data
      issues: {
        critical: service.issuesCount.critical,
        high: service.issuesCount.high,
        medium: 0, // These should come from your service data
        low: 0,
      },
      keppelLink: "", // This should come from your service data
    }
    setSelectedService(panelService)
  }

  return (
    <div className="flex-1 flex flex-col gap-10 overflow-hidden">
      <div className="overflow-scroll">
        <DataGrid minContentColumns={[3, 4]} columns={COLUMN_SPAN}>
          <DataGridRow>
            <DataGridHeadCell>Service</DataGridHeadCell>
            <DataGridHeadCell>Issues count</DataGridHeadCell>
            <DataGridHeadCell>Service details</DataGridHeadCell>
            <DataGridHeadCell>No. Components</DataGridHeadCell>
            <DataGridHeadCell>Target remediation</DataGridHeadCell>
            <DataGridHeadCell>Service owners</DataGridHeadCell>
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
                <ServiceListItem key={item.name} item={item} onClick={() => handleServiceClick(item)} />
              ))
          }

          {
            /* if the request is fulfilled with no data */
            !loading && !error && services.length === 0 && (
              <EmptyDataGridRow colSpan={COLUMN_SPAN}>No services found</EmptyDataGridRow>
            )
          }

          {
            /* if the request is fulfilled with an error */
            !loading && error && (
              <EmptyDataGridRow colSpan={COLUMN_SPAN}>
                <Message variant="error">{error}</Message>
              </EmptyDataGridRow>
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
      {selectedService && <ServicePanel services={[selectedService]} />}
    </div>
  )
}
