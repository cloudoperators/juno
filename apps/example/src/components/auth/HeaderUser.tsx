/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
// @ts-expect-error TS(2307): Cannot find module '@cloudoperators/juno-ui-compon... Remove this comment to see the full error message
import { Stack, Button } from "@cloudoperators/juno-ui-components"
// @ts-expect-error TS(6142): Module './Avatar' was resolved to '/Users/I531348/... Remove this comment to see the full error message
import Avatar from "./Avatar"
// @ts-expect-error TS(6142): Module '../StoreProvider' was resolved to '/Users/... Remove this comment to see the full error message
import { useAuthLoggedIn, useAuthData } from "../StoreProvider"

const HeaderUser = ({
  login,
  logout
}: any) => {
  const loggedIn = useAuthLoggedIn()
  const authData = useAuthData()

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Stack alignment="center" className="ml-auto" distribution="end">
      {loggedIn ? (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="mr-4">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Avatar userName={authData?.parsed?.fullName} url={authData?.parsed?.avatarUrl?.small} />
          </div>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button label="Logout" size="small" onClick={() => logout({ resetOIDCSession: false, silent: true })} />
        </>
      ) : (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
