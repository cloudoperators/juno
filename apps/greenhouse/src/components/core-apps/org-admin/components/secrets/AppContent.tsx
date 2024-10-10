/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import React from "react"
import { Container } from "@cloudoperators/juno-ui-components"
import SecretEdit from "./components/SecretEdit"
import SecretList from "./components/SecretList"

import { MessagesProvider } from "@cloudoperators/juno-messages-provider"

import useStore from "./store"

const AppContent = () => {
  const showSecretEdit = useStore((state) => state.showSecretEdit)

  return (
    <Container>
      <SecretList />
      {showSecretEdit && (
        <MessagesProvider>
          <SecretEdit />
        </MessagesProvider>
      )}
    </Container>
  )
}

export default AppContent
