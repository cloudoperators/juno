/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack, Button, DataGridCell, DataGridRow } from "juno-ui-components"

const inlineConfirmRemoveClasses = (isOpen) => {
  return `
      bg-theme-background-lvl-2
      opacity-0
      transition
      ease-out
      duration-300
      py-0
      border-b-1
      border-theme-background-lvl-0
			${isOpen && `opacity-100 py-3 `}
		`
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ")
}

const InlineConfirmRemove = ({
  show,
  text,
  actionText,
  actionIcon,
  onConfirm,
  onCancel,
}) => {
  return (
    <DataGridRow className="juno-inline-remove">
      <DataGridCell colSpan={6} className={inlineConfirmRemoveClasses(show)}>
        {show && (
          <Stack alignment="center">
            <span className="w-full">{text || "Are you sure?"}</span>
            <Button
              icon={actionIcon || "deleteForever"}
              label={actionText || "Confirm"}
              size="small"
              variant="primary-danger"
              onClick={onConfirm}
            />
            <Button
              icon="cancel"
              className="ml-2"
              label="Cancel"
              size="small"
              onClick={onCancel}
              variant="subdued"
            />
          </Stack>
        )}
      </DataGridCell>
    </DataGridRow>
  )
}

export default InlineConfirmRemove
