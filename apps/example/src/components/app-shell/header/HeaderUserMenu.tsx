/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Button, PopupMenu, PopupMenuToggle, PopupMenuOptions } from "@cloudoperators/juno-ui-components"

import { useAuthLoggedIn, useAuthData } from "../../../store/StoreProvider"
import HeaderAvatar from "./HeaderAvatar"

interface HeaderUserMenuProps {
  logout: () => void
}

const LOGOUT_BUTTON_LABEL = "Log Out"

const HeaderUserMenu: React.FC<HeaderUserMenuProps> = ({ logout }) => {
  const loggedIn = useAuthLoggedIn()
  const authData = useAuthData()

  return (
    <>
      {loggedIn && (
        <PopupMenu>
          <PopupMenuToggle>
            <HeaderAvatar userName={authData?.parsed?.fullName || ""} url={authData?.parsed?.avatarUrl?.small || ""} />
          </PopupMenuToggle>
          <PopupMenuOptions>
            <Button label={LOGOUT_BUTTON_LABEL} size="small" onClick={logout} />
          </PopupMenuOptions>
        </PopupMenu>
      )}
    </>
  )
}

export default HeaderUserMenu
