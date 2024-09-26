/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DataGridRow, DataGridCell } from "@cloudoperators/juno-ui-components"
import { listOfCommaSeparatedObjs, formatDate, extractLastFourParts, cellSeverityClasses } from "../shared/Helper"
import constants from "../shared/constants"
import { useGlobalsActions, useGlobalsShowPanel, useGlobalsShowIssueDetail } from "../../hooks/useAppStore"

const IssueMatchesListItem = ({ item }) => {
  const { setShowPanel, setShowIssueDetail } = useGlobalsActions()
  const showPanel = useGlobalsShowPanel()
  const showIssueDetail = useGlobalsShowIssueDetail()

  const handleClick = () => {
    if (showPanel === constants.PANEL_ISSUE && item?.node?.id === showIssueDetail) {
      {
        setShowPanel(constants.PANEL_NONE)
        setShowIssueDetail(null)
      }
    } else {
      setShowPanel(constants.PANEL_ISSUE)
      setShowIssueDetail(item?.node?.id)
    }
  }
  const severity = item?.node?.severity?.value
  // Extract the most important (last 4) parts of ccrn for the Resource column
  const extractedCcrn = extractLastFourParts(item?.node?.componentInstance?.ccrn)

  return (
    <DataGridRow
      className={`cursor-pointer ${
        showIssueDetail === item?.node?.id && showPanel === constants.PANEL_ISSUE ? "active" : ""
      }`}
      onClick={() => handleClick()}
    >
      <DataGridCell className="pl-0 interactive">
        <div className={cellSeverityClasses(severity)}>{severity}</div>
      </DataGridCell>
      <DataGridCell>{item?.node?.issue?.primaryName}</DataGridCell>
      <DataGridCell>{item?.node?.componentInstance?.service?.name}</DataGridCell>
      <DataGridCell>{extractedCcrn}</DataGridCell>
      <DataGridCell>
        {listOfCommaSeparatedObjs(item?.node?.componentInstance?.service?.supportGroups, "name")}
      </DataGridCell>
      <DataGridCell>{item?.node?.status}</DataGridCell>
      <DataGridCell>{formatDate(item?.node?.targetRemediationDate)}</DataGridCell>
    </DataGridRow>
  )
}

export default IssueMatchesListItem
