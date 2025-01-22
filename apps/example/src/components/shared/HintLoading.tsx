/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack, Spinner } from "@cloudoperators/juno-ui-components"

interface HintLoadingProps {
  text?: string
}

const HintLoading: React.FC<HintLoadingProps> = ({ text }) => {
  return (
    <Stack alignment="center">
      <Spinner variant="primary" />
      <span>{text ? text : "Loading..."}</span>
    </Stack>
  )
}

export default HintLoading
