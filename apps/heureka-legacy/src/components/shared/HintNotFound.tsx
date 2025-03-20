/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Container } from "@cloudoperators/juno-ui-components"

const HintNotFound = ({ text }: any) => {
  return (
    // @ts-ignore
    <Container py px="false">
      <span>{text}</span>
    </Container>
  )
}

export default HintNotFound
