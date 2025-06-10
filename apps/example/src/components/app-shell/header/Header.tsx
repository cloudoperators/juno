/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { PageHeader, Stack, ThemeToggle } from "@cloudoperators/juno-ui-components"

import HeaderUserMenu from "./HeaderUserMenu"
import { APP_NAME, DEFAULT_MEDIUM_APP_MARGIN } from "../../constants"
import useAuthStore from "../../../store/useAuthStore"

const Header: React.FC = () => {
  const { isUserAuthenticated } = useAuthStore()

  return (
    <PageHeader heading={APP_NAME}>
      {/* Adding uncenters logo */}
      <Stack gap={DEFAULT_MEDIUM_APP_MARGIN}>
        <HeaderUserMenu />
        {isUserAuthenticated && <ThemeToggle />}
      </Stack>
    </PageHeader>
  )
}

export default Header
