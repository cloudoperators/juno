/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from "react"
import { DataGridRow, DataGridCell } from "@cloudoperators/juno-ui-components"
import { listOfCommaSeparatedObjs } from "../shared/Helper"
import constants from "../shared/constants"
import { useGlobalsActions, useGlobalsShowPanel, useGlobalsShowServiceDetail } from "../StoreProvider"

const ServicesListItem = ({ item }: any) => {
  // @ts-ignore
  const { setShowServiceDetail, setShowPanel } = useGlobalsActions()
  const showServiceDetail = useGlobalsShowServiceDetail()
  const showPanel = useGlobalsShowPanel()
  const service = useMemo(() => {
    if (!item) return {}
    return item?.node
  }, [item])

  const handleClick = () => {
    if (showServiceDetail === service?.ccrn && showPanel === constants.PANEL_SERVICE) {
      {
        setShowServiceDetail(null)
        setShowPanel(constants.PANEL_NONE)
      }
    } else {
      setShowServiceDetail(service?.ccrn)
      setShowPanel(constants.PANEL_SERVICE)
    }
  }

  return (
    <DataGridRow
      className={`cursor-pointer ${
        showServiceDetail === service?.ccrn && showPanel === constants.PANEL_SERVICE ? "active" : ""
      }`}
      onClick={() => handleClick()}
    >
      <DataGridCell>{service?.ccrn}</DataGridCell>
      <DataGridCell>{listOfCommaSeparatedObjs(service?.owners, "name")}</DataGridCell>
      <DataGridCell>{listOfCommaSeparatedObjs(service?.supportGroups, "ccrn")}</DataGridCell>
      <DataGridCell>{service?.metadata?.componentInstanceCount}</DataGridCell>
      <DataGridCell>{service?.metadata?.issueMatchCount}</DataGridCell>
    </DataGridRow>
  )
}

export default ServicesListItem
