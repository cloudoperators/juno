/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import Filters from "../filters/Filters"
import ServicesList from "./ServicesList"
import ListController from "../shared/ListController"
import { Messages, MessagesProvider } from "@cloudoperators/juno-messages-provider"
import {
  useServiceActiveFilters,
  useServiceFilterLabels,
  useServiceFilterLabelValues,
  useServiceSearchTerm,
} from "../../hooks/useAppStore"

const ServicesTab = () => {
  // Fetch filter data from global state using appropriate hooks
  const activeFilters = useServiceActiveFilters()
  const labels = useServiceFilterLabels()
  const filterLabelValues = useServiceFilterLabelValues()
  const searchTerm = useServiceSearchTerm()
  return (
    <>
      <MessagesProvider>
        <Messages />
        <Filters
          queryKey="ServiceFilterValues"
          entityName="Services"
          labels={labels}
          filterLabelValues={filterLabelValues}
          activeFilters={activeFilters}
          searchTerm={searchTerm}
        />
        <ListController
          queryKey="Services"
          entityName="Services"
          ListComponent={ServicesList}
          activeFilters={activeFilters}
          searchTerm={searchTerm}
          enableSearchAndFilter={true}
        />
      </MessagesProvider>
    </>
  )
}

export default ServicesTab
