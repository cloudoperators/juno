/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Breadcrumb, BreadcrumbItem, Container } from "@cloudoperators/juno-ui-components"

import WelcomeView from "./WelcomeView"

const AppContent = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem icon="home" label="Template App Home" />
      </Breadcrumb>
      <Container py>
        <WelcomeView />
      </Container>
    </>
  )
}

export default AppContent
