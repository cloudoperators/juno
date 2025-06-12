/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactElement } from "react"
import { PersesDashboardWrapper } from "./PersesDashboardWrapper"

const AppContent = (): ReactElement => {
  return (
    <>
      <h1> I am a perses project</h1>
      <PersesDashboardWrapper />
    </>
  )
}

export default AppContent
