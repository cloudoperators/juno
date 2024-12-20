/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { Stack } from "@cloudoperators/juno-ui-components"

const HintNotFound = ({ text }) => {
  return (
    <Stack alignment="center" distribution="center" direction="vertical" className="h-full">
      <span>{text || "No items found"}</span>
    </Stack>
  )
}

HintNotFound.propTypes = {
  text: PropTypes.string,
}

export default HintNotFound
