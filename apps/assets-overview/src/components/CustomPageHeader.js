/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { PageHeader, Stack, Icon } from "juno-ui-components"

const CustomPageHeader = (
  <PageHeader heading="Converged Cloud | Juno Assets Overview">
    <Stack alignment="center" className="ml-auto" distribution="end">
      <a href="https://github.com/sapcc/juno" target="_blank">
        <Stack alignment="center" gap="1">
          <span>Github</span>
          <Icon size="18" color="jn-global-text" icon="openInNew" />
        </Stack>
      </a>
    </Stack>
  </PageHeader>
)

export default CustomPageHeader
