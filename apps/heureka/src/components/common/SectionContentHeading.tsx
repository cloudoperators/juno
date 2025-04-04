/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { ContentHeading } from "@cloudoperators/juno-ui-components"

type IssueIconProps = {
  severity: string
}

const SectionContentHeading = ({ children }: { children: ReactNode }) => {
  return <ContentHeading className="my-6">{children}</ContentHeading>
}

export default SectionContentHeading
