/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { ComboboxButton } from "@headlessui/react"
import { Icon } from "../../Icon/index"
import { useComboBoxContext } from "../context"
import useComboBoxStyles from "../styles"

const ComboBoxToggleButton: React.FC = () => {
  const {
    derivedProps: { error: hasError, loading: isLoading },
    state: { isOpen },
  } = useComboBoxContext()

  const { toggleStyles } = useComboBoxStyles()

  return (
    <>
      {!hasError && !isLoading ? (
        <ComboboxButton className={toggleStyles}>
          <Icon icon={isOpen ? "expandLess" : "expandMore"} />
        </ComboboxButton>
      ) : null}
    </>
  )
}

export default ComboBoxToggleButton
