import React from "react"
import { DataGrid, DataGridRow, DataGridHeadCell, Pagination, Message } from "@cloudoperators/juno-ui-components"
import { NotFound } from "../../common/NotFound"
import { ServiceListItem } from "./ServiceListItem"
import { FilterSettings } from "../../common/Filters/types"
import { useFetchServices } from "../useFetchServices"
import { EmptyDataGridRow } from "../../common/EmptyDataGridRow/EmptyDataGridRow"
import { Loading } from "../../common/Loading"

const COLUMN_SPAN = 6

type ServiceListProps = {
  filterSettings: FilterSettings
}

export const ServicesList = ({ filterSettings }: ServiceListProps) => {
  const { loading, error, services, currentPage, totalNumberOfPages, goToPage } = useFetchServices({
    filterSettings,
  })

  return (
    <div className="flex-1 flex flex-col gap-10 overflow-hidden">
      <div className="overflow-scroll">
        <DataGrid minContentColumns={[3, 4]} columns={COLUMN_SPAN} className="clickableTable">
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
            loading && (
              <EmptyDataGridRow colSpan={COLUMN_SPAN}>
                <Loading text="loading...." />
              </EmptyDataGridRow>
            )
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
              <EmptyDataGridRow colSpan={COLUMN_SPAN}>
                <NotFound text="No services found" />
              </EmptyDataGridRow>
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
      <div className="flex justify-center">
        <Pagination
          variant="number"
          currentPage={currentPage}
          onPressNext={goToPage}
          onPressPrevious={goToPage}
          pages={totalNumberOfPages}
        />
      </div>
    </div>
  )
}
