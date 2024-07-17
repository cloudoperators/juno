/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack } from "@cloudoperators/juno-ui-components"

const WelcomeView = () => {
  return (
    <Stack
      alignment="center"
      distribution="center"
      direction="vertical"
      className="my-[10vh]"
    >
      <p className="text-xl">
        Welcome to the Example App! To explore the app's features, kindly log in
        and begin your testing journey
      </p>
    </Stack>
  )
}

export default WelcomeView
