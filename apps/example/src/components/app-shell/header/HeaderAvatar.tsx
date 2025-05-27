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
bg-no-repeat
bg-cover
`

interface HeaderAvatarProps {
  userName?: string
  url?: string
}

const HeaderAvatar: React.FC<HeaderAvatarProps> = ({ userName, url }) => {
  return (
    <Stack gap="2" alignment="center">
      {url && (
        <div
          style={{
            backgroundImage: `url(${url})`,
          }}
          className={avatarStyles}
        />
      )}
      {userName && <span>{userName}</span>}
    </Stack>
  )
}

export default HeaderAvatar
