/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Message } from "@cloudoperators/juno-ui-components"

const NoExtensionFound = () => (
  <div className="p-4">
    <Message variant="danger">No extension found!</Message>
  </div>
)

export default NoExtensionFound
