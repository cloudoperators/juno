/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { ComboboxOptions } from "@headlessui/react"
import { createPortal } from "react-dom"
import { usePortalRef } from "../../PortalProvider/index"
import { useComboBoxContext } from "../context"
import useComboBoxStyles from "../styles"

export const ComboBoxFloatingMenu: React.FC = () => {
  const {
    state: { isOpen },
    floating: { refs, strategy, x, y, getFloatingProps },
    filteredOptions,
  } = useComboBoxContext()

  const { menuStyles } = useComboBoxStyles()

  const portalContainerRef = usePortalRef()

  return (
    <>
      {isOpen &&
        createPortal(
          <div
            ref={refs.setFloating}
            className={menuStyles}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
            }}
            {...getFloatingProps()}
          >
            <ComboboxOptions static className="jn-w-full">
              {filteredOptions}
            </ComboboxOptions>
          </div>,
          portalContainerRef ?? document.body
        )}
    </>
  )
}

export default ComboBoxFloatingMenu
