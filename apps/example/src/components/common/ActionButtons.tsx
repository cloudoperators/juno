/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Icon, Button, Stack } from "@cloudoperators/juno-ui-components"

interface ActionButtonsProps {
  onEdit?: () => void
  onDelete?: () => void
  linkUrl?: string
  appearance?: typeof ICON_APPEARANCE | "button"
}

const ICON_APPEARANCE = "icon"

const ActionButtons: React.FC<ActionButtonsProps> = ({ onEdit, onDelete, linkUrl, appearance = ICON_APPEARANCE }) => {
  // Render button or clickable icon
  const renderAction = (icon: string, actionProps: any, isButton: boolean) =>
    isButton ? (
      <Button icon={icon} {...actionProps} variant="subdued" />
    ) : (
      <Icon icon={icon} {...actionProps} className="cursor-pointer" data-row-stop-propagation />
    )

  const isButtonAppearance = appearance !== ICON_APPEARANCE

  return (
    <Stack direction="horizontal" gap="1.5">
      {onEdit && renderAction("edit", { onClick: onEdit }, isButtonAppearance)}
      {onDelete && renderAction("deleteForever", { onClick: onDelete }, isButtonAppearance)}
      {linkUrl && renderAction("openInNew", { href: linkUrl, target: "_blank" }, isButtonAppearance)}
    </Stack>
  )
}

export default ActionButtons
