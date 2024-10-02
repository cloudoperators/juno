/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack } from "@cloudoperators/juno-ui-components"
import { useWellcomeStore } from "../store"

const WelcomeView = () => {
  const { welcome } = useWellcomeStore()
  return (
    <Stack alignment="center" distribution="center" direction="vertical" className="my-[10vh]">
      <p className="text-xl">{welcome}</p>
    </Stack>
  )
}

export default WelcomeView
