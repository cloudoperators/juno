/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack } from "@cloudoperators/juno-ui-components"

const avatarStyles = `
h-8
w-8
bg-theme-background-lvl-2
rounded-full
bg-cover 
`

interface AvatarProps {
  userName?: string
  url?: string
}

const Avatar: React.FC<AvatarProps> = ({ userName, url }) => {
  return (
    <Stack alignment="center">
      {url && (
        <div
          style={{
            background: `url(${url}) no-repeat`,
            backgroundSize: `cover`,
          }}
          className={avatarStyles}
        />
      )}
      {userName && <span className="ml-2">{userName}</span>}
    </Stack>
  )
}

export default Avatar
