/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"
import { SERVICES, ISSUES } from "../../../constants"
import { Services } from "../../Services"
import { Issues } from "../../Issues"

export const ShellContent = ({ selectedView }: { selectedView: ReactNode }) => {
  switch (selectedView) {
    case SERVICES:
      return <Services />
    case ISSUES:
      return <Issues />
    default:
      return null
  }
}
