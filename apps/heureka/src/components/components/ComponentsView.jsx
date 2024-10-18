/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import ComponentsList from "./ComponentsList"
import ListController from "../shared/ListController"
import Filters from "../filters/Filters"
import { Messages, MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { useComponentActiveFilters, useComponentFilterLabels, useComponentFilterLabelValues } from "../StoreProvider"

const ComponentsView = () => {
  // Fetch filter data from global state using appropriate hooks
  const activeFilters = useComponentActiveFilters()
  const labels = useComponentFilterLabels()
  const filterLabelValues = useComponentFilterLabelValues()

  return (
    <>
      <MessagesProvider>
        <Messages />
        <Filters
          queryKey="ComponentFilterValues"
          entityName="Components"
          filterLabels={labels}
          filterLabelValues={filterLabelValues}
          activeFilters={activeFilters}
          enableSearch={false}
        />
        <ListController
          queryKey="Components"
          entityName="Components"
          ListComponent={ComponentsList}
          activeFilters={activeFilters}
          enableSearchAndFilter={false}
        />
      </MessagesProvider>
    </>
  )
}

export default ComponentsView
