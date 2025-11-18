/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Container } from "@cloudoperators/juno-ui-components"
import { Breadcrumb } from "./Breadcrumb"
import { Navigation } from "./Navigation"

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Navigation />
    <Container py px>
      <Breadcrumb />
      <Container px={false}>{children}</Container>
    </Container>
  </>
)
