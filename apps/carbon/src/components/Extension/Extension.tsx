/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { ContentHeading } from "@cloudoperators/juno-ui-components"

// @ts-ignore
const Extension = ({ extension }: { extension: Extension }) => (
  <div className="p-4">
    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
    <ContentHeading>{extension.title}</ContentHeading>
  </div>
)

export default Extension
