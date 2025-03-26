/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { JsonViewer } from "@cloudoperators/juno-ui-components/index"
import { useStore } from "../../../store/StoreProvider"

export const ServiceDetails = () => {
  const { selectedView } = useStore()
  return (
    <div>
      <h3>Service Details</h3>
      <JsonViewer data={{ ...selectedView.params }} />
    </div>
  )
}
