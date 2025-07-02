/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { FormHint } from "../../FormHint/index"
import { isNotEmptyString } from "../../../utils"
import { useComboBoxContext } from "../context"

export const ComboBoxStatusMessage: React.FC = () => {
  const {
    helpTextId,
    derivedProps: { helptext, successtext, errortext },
  } = useComboBoxContext()

  return (
    <>
      {errortext && isNotEmptyString(errortext) ? <FormHint text={errortext} variant="error" /> : ""}
      {successtext && isNotEmptyString(successtext) ? <FormHint text={successtext} variant="success" /> : ""}
      {helptext && isNotEmptyString(helptext) ? <FormHint text={helptext} id={helpTextId} /> : ""}
    </>
  )
}
