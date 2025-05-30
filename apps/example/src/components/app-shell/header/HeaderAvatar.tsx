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

const DEFAULT_USERNAME = "Jane Doe"
const DEFAULT_URL = "https://avatars.wdf.sap.corp/avatar/I123456?size=24"

const HeaderAvatar: React.FC = () => {
  return (
    <Stack gap="2" alignment="center">
      {
        <div
          style={{
            backgroundImage: `url(${DEFAULT_URL})`,
          }}
          className={avatarStyles}
        />
      }
      {<span>{DEFAULT_USERNAME}</span>}
    </Stack>
  )
}

export default HeaderAvatar
