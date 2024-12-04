/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import Filters from "../filters/Filters"
import IssueMatchesList from "./IssueMatchesList"
import ListController from "../shared/ListController"
import { Messages, MessagesProvider } from "@cloudoperators/juno-messages-provider"
import {
  useIssueMatchesActiveFilters,
  useIssueMatchesFilterLabels,
  useIssueMatchesFilterLabelValues,
  useIssueMatchesSearchTerm,
  useGlobalsActions,
} from "../StoreProvider"

const IssueMatchesView = () => {
  // Fetch filter data from global state using appropriate hooks
  const activeFilters = useIssueMatchesActiveFilters()
  const labels = useIssueMatchesFilterLabels()
  const filterLabelValues = useIssueMatchesFilterLabelValues()
  const searchTerm = useIssueMatchesSearchTerm()

  // Access filter actions
  const { setQueryOptions } = useGlobalsActions()

  setQueryOptions("IssueMatches", { filter: { issueType: ["Vulnerability"] } })

  return (
    <>
      <MessagesProvider>
        <Messages />
        <Filters
          queryKey="IssueMatchFilterValues"
          entityName="IssueMatches"
          filterLabels={labels}
          filterLabelValues={filterLabelValues}
          activeFilters={activeFilters}
          searchTerm={searchTerm}
          searchTargets="primary name"
        />
        <ListController
          queryKey="IssueMatches"
          entityName="IssueMatches"
          ListComponent={IssueMatchesList}
          activeFilters={activeFilters}
          searchTerm={searchTerm}
          enableSearchAndFilter={true}
        />
      </MessagesProvider>
    </>
  )
}

export default IssueMatchesView
