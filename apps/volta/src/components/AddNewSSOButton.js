/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Button } from "juno-ui-components"

const AddNewSSOButton = ({ className, label, disabled, onClick }) => {
  return (
    <Button
      icon="addCircle"
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {label || "Add SSO cert"}
    </Button>
  )
}

export default AddNewSSOButton
