/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack, Button, PopupMenu } from "@cloudoperators/juno-ui-components"

import Avatar from "./Avatar"
import { useAuthLoggedIn, useAuthData } from "../StoreProvider"

interface HeaderUserProps {
  login: () => void
  logout: () => void
}

const HeaderUser: React.FC<HeaderUserProps> = ({ login, logout }) => {
  const loggedIn = useAuthLoggedIn()
  const authData = useAuthData()

  return (
    <Stack alignment="center" className="ml-auto" distribution="end">
      {loggedIn ? (
        <>
          <PopupMenu>
            <PopupMenu.Toggle key="t">
              <div className="mr-4">
                <Avatar userName={authData?.parsed?.fullName || ""} url={authData?.parsed?.avatarUrl?.small || ""} />
              </div>
            </PopupMenu.Toggle>
            ,
            <PopupMenu.Menu>
              <Button label="Logout" size="small" onClick={logout} />
            </PopupMenu.Menu>
          </PopupMenu>
        </>
      ) : (
        <Button label="Login" size="small" onClick={login} />
      )}
    </Stack>
  )
}

export default HeaderUser
