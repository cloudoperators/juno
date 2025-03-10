/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { PageFooter, Stack } from "@cloudoperators/juno-ui-components"

const COPYRIGHT_TEXT = "Copyright © 2024 SAP SE, SAP affiliates and Juno contributors"
const LISENCE_TEXT = "Lisence Apache 2.0"

const Footer: React.FC = () => {
  return (
    <PageFooter>
      <Stack gap="20">
        <div>{COPYRIGHT_TEXT}</div>
        <div>{LISENCE_TEXT}</div>
      </Stack>
    </PageFooter>
  )
}

export default Footer
