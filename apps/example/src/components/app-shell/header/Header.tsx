/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { PageHeader, Stack, ThemeToggle } from "@cloudoperators/juno-ui-components"
import HeaderUserMenu from "./HeaderUserMenu"

interface HeaderProps {
  isUserAuthenticated: boolean
  logout: () => void
}

const APP_NAME = "Juno UI Peaks Monitoring Dashboard"

const Header: React.FC<HeaderProps> = ({ isUserAuthenticated, logout }) => {
  return (
    <>
      <PageHeader heading={APP_NAME}>
        {/* Adding uncenters logo */}
        <Stack gap="5">
          <HeaderUserMenu logout={logout} />
          {isUserAuthenticated && <ThemeToggle />}
        </Stack>
      </PageHeader>
    </>
  )
}

export default Header
