/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { CodeBlock, Container } from "juno-ui-components"

const TabAdvanced = ({ asset }) => {
  return (
    <Container py px={false}>
      <CodeBlock content={asset || {}} heading="Asset JSON" lang="json" />
    </Container>
  )
}

export default TabAdvanced
