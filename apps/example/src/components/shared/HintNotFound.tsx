/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
// @ts-expect-error TS(2307): Cannot find module '@cloudoperators/juno-ui-compon... Remove this comment to see the full error message
import { Stack } from "@cloudoperators/juno-ui-components"

const HintNotFound = ({
  text
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Stack alignment="center" distribution="center" direction="vertical" className="h-full">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <span>{text || "No items found"}</span>
    </Stack>
  )
}

HintNotFound.propTypes = {
  text: PropTypes.string,
}

export default HintNotFound
