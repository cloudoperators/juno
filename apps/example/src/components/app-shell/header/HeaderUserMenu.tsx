/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Button, PopupMenu } from "@cloudoperators/juno-ui-components"

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
          <PopupMenu.Toggle>
            <HeaderAvatar userName={authData?.parsed?.fullName || ""} url={authData?.parsed?.avatarUrl?.small || ""} />
          </PopupMenu.Toggle>
          <PopupMenu.Menu>
            <Button label={LOGOUT_BUTTON_LABEL} size="small" onClick={logout} />
          </PopupMenu.Menu>
        </PopupMenu>
      )}
    </>
  )
}

export default HeaderUserMenu
