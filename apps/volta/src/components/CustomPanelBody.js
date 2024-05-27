/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { PanelBody } from "juno-ui-components"
import { Messages } from "messages-provider"

const CustomPanelBody = ({ footer, children }) => {
  return (
    <PanelBody footer={footer}>
      <Messages className="mb-6" />
      {children}
    </PanelBody>
  )
}

export default CustomPanelBody
