/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack } from "@cloudoperators/juno-ui-components"
import GreenhouseLogo from "../../assets/greenhouse_logo.svg?react"
import NavigationItem from "./NavigationItem"

const Navigation = ({ extensions }: { extensions: Array<Extension> }) => (
  <Stack direction="vertical" className="bg-juno-grey-blue-11 py-4">
    <Stack alignment="center" direction="vertical">
      <GreenhouseLogo className="mb-6" />
    </Stack>
    {extensions.map((extensionProps) => (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      <NavigationItem key={extensionProps.name} {...extensionProps} />
    ))}
  </Stack>
)

export default Navigation
