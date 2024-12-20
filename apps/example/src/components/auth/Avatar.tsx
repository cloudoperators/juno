/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
// @ts-expect-error TS(2307): Cannot find module '@cloudoperators/juno-ui-compon... Remove this comment to see the full error message
import { Stack } from "@cloudoperators/juno-ui-components"

const avatarCss = `
h-8
w-8
bg-theme-background-lvl-2
rounded-full
bg-cover 
`

const Avatar = ({
  userName,
  url
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Stack alignment="center">
      {url && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div
          style={{
            background: `url(${url}) no-repeat`,
            backgroundSize: `cover`,
          }}
          className={avatarCss}
        />
      )}
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {userName && <span className="ml-2">{userName}</span>}
    </Stack>
  )
}

Avatar.propTypes = {
  userName: PropTypes.string,
  url: PropTypes.string,
}

export default Avatar
