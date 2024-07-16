/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack, Button } from "@cloudoperators/juno-ui-components"
import Avatar from "./Avatar"
import { useAuthLoggedIn, useAuthData } from "../StoreProvider"

const HeaderUser = ({ login, logout }) => {
  const loggedIn = useAuthLoggedIn()
  const authData = useAuthData()

  return (
    <Stack alignment="center" className="ml-auto" distribution="end">
      {loggedIn ? (
        <>
          <div className="mr-4">
            <Avatar
              userName={authData?.parsed?.fullName}
              url={authData?.parsed?.avatarUrl?.small}
            />
          </div>

          <Button
            label="Logout"
            size="small"
            onClick={() => logout({ resetOIDCSession: false, silent: true })}
          />
        </>
      ) : (
        <Button label="Login" size="small" onClick={() => login()} />
      )}
    </Stack>
  )
}

export default HeaderUser
