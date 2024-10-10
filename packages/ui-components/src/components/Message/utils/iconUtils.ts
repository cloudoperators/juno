/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { KnownIcons, KnownIconsEnum } from "../../Icon/Icon.component"
import { MessageType } from "../Message.types"

// Type guard to determine if a given string corresponds to a known icon
export const isValidIcon = (icon: string): icon is KnownIcons => {
  // Set of valid icon names
  const validIconNames: Set<KnownIcons> = new Set(Object.values(KnownIconsEnum))
  return validIconNames.has(icon as KnownIcons)
}

// Get the appropriate Material UI icon for a message type
export const getMuiIcon = (messageVariant: MessageType): KnownIcons => {
  if (messageVariant === "error") return "dangerous"
  if (isValidIcon(messageVariant)) return messageVariant
  return "default"
}
