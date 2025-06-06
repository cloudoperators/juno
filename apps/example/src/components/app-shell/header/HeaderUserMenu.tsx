/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Button, PopupMenu, PopupMenuToggle, PopupMenuOptions } from "@cloudoperators/juno-ui-components"

import HeaderAvatar from "./HeaderAvatar"
import useAuthStore from "../../../store/useAuthStore"

const LOGOUT_BUTTON_LABEL = "Log Out"

const HeaderUserMenu: React.FC = () => {
  const { isUserAuthenticated, setIsUserAuthenticated } = useAuthStore()

  const handleLogout = () => {
    setIsUserAuthenticated(false)
  }

  return (
    <>
      {isUserAuthenticated && (
        <PopupMenu>
          <PopupMenuToggle>
            <HeaderAvatar />
          </PopupMenuToggle>
          <PopupMenuOptions>
            <Button label={LOGOUT_BUTTON_LABEL} size="small" onClick={handleLogout} />
          </PopupMenuOptions>
        </PopupMenu>
      )}
    </>
  )
}

export default HeaderUserMenu
