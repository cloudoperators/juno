/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack } from "@cloudoperators/juno-ui-components"

interface HintNotFoundProps {
  text?: string
}

const HintNotFound: React.FC<HintNotFoundProps> = ({ text }) => {
  return (
    <Stack alignment="center" distribution="center" direction="vertical" className="h-full">
      <span>{text || "No items found"}</span>
    </Stack>
  )
}

export default HintNotFound
