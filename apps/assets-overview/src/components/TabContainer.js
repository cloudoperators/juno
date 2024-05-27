/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Container } from "juno-ui-components"
import { Messages } from "messages-provider"

const TabContainer = ({ children }) => {
  return (
    <Container py>
      <Messages className="pb-6" />
      {children}
    </Container>
  )
}

export default TabContainer
