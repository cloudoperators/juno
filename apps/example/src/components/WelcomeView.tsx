/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
// @ts-expect-error TS(2307): Cannot find module '@cloudoperators/juno-ui-compon... Remove this comment to see the full error message
import { Stack } from "@cloudoperators/juno-ui-components"

const WelcomeView = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Stack alignment="center" distribution="center" direction="vertical" className="my-[10vh]">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see
      the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove
      this comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
      is provided... Remove this comment to see the full error message
      <p className="text-xl">
        Welcome to the Example App! To explore the app&apos;s features, kindly log in and begin your testing journey
      </p>
    </Stack>
  )
}

export default WelcomeView
