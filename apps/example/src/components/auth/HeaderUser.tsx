/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { Stack, Button } from "@cloudoperators/juno-ui-components"
import Avatar from "./Avatar"
import { useAuthLoggedIn, useAuthData } from "../StoreProvider"

const HeaderUser = ({ login, logout }: any) => {
  const loggedIn = useAuthLoggedIn()
  const authData = useAuthData()

  return (
    <Stack alignment="center" className="ml-auto" distribution="end">
      {loggedIn ? (
        <>
          <div className="mr-4">
            {/* @ts-ignore */}
            <Avatar userName={authData?.parsed?.fullName} url={authData?.parsed?.avatarUrl?.small} />
          </div>
          {/* @ts-ignore */}
          <Button label="Logout" size="small" onClick={() => logout({ resetOIDCSession: false, silent: true })} />
        </>
      ) : (
        //@ts-ignore
        <Button label="Login" size="small" onClick={() => login()} />
      )}
    </Stack>
  )
}

HeaderUser.propTypes = {
  login: PropTypes.func,
  logout: PropTypes.func,
}

export default HeaderUser
