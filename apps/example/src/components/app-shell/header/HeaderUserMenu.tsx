/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Button, PopupMenu, PopupMenuToggle, PopupMenuOptions } from "@cloudoperators/juno-ui-components"
import useAuthStore from "../../../store/useAuthStore"
import HeaderAvatar from "./HeaderAvatar"

const LOGOUT_BUTTON_LABEL = "Log Out"

const HeaderUserMenu: React.FC = () => {
  const { isUserAuthenticated, setIsUserAuthenticated } = useAuthStore((state) => ({
    isUserAuthenticated: state.isUserAuthenticated,
    setIsUserAuthenticated: state.setIsUserAuthenticated,
  }))

  const handleLogout = () => {
    setIsUserAuthenticated(false)
  }

  return (
    <>
      {isUserAuthenticated && (
        <PopupMenu>
          <PopupMenuToggle>
            <HeaderAvatar userName={"Jane Doe"} url={"https://avatars.wdf.sap.corp/avatar/I123456?size=24"} />
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
