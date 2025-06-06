/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack } from "@cloudoperators/juno-ui-components"

interface HintNotFoundProps {
  text?: string
}

const DEFAULT_HINT = "No items found"

const HintNotFound: React.FC<HintNotFoundProps> = ({ text = DEFAULT_HINT }) => {
  return (
    <Stack alignment="center" distribution="center" direction="vertical" className="h-full mt-5">
      <span>{text}</span>
    </Stack>
  )
}

export default HintNotFound
