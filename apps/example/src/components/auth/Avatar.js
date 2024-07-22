/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { Stack } from "@cloudoperators/juno-ui-components"

const avatarCss = `
h-8
w-8
bg-theme-background-lvl-2
rounded-full
bg-cover 
`

const Avatar = ({ userName, url }) => {
  return (
    <Stack alignment="center">
      {url && (
        <div
          style={{
            background: `url(${url}) no-repeat`,
            backgroundSize: `cover`,
          }}
          className={avatarCss}
        />
      )}
      {userName && <span className="ml-2">{userName}</span>}
    </Stack>
  )
}

Avatar.propTypes = {
  userName: PropTypes.string,
  url: PropTypes.string,
}

export default Avatar
