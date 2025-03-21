/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
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
} from "../StoreProvider"

const ServicesView = () => {
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
          filterLabels={labels}
          filterLabelValues={filterLabelValues}
          activeFilters={activeFilters}
          searchTerm={searchTerm}
          searchTargets="service name"
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

export default ServicesView
