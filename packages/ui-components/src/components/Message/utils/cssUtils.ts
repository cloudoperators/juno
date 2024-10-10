/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageType } from "../Message.types"

export const messageStyles = `
    jn-text-theme-high
    jn-flex
    jn-rounded
    jn-leading-5
    jn-overflow-hidden
    jn-items-center
`

export const messageHeadingStyles = `
    jn-font-bold
`

export const messageContentStyles = `
    jn-py-3
    jn-pr-4
    jn-ml-7
`

export const messageBorderStyles = `
    jn-w-[4px]
    jn-self-stretch
    jn-border-l-4
    jn-mr-6
    jn-shrink-0
`

export const dismissButtonStyles = `
    jn-ml-auto
    jn-self-stretch
    jn-flex
    jn-flex-col
    jn-py-2.5
    jn-pr-2.5
`

export const messageVariantStyles = {
  default: `jn-border-theme-message-default`,
  defaultBg: `jn-bg-theme-message-default`,

  error: `jn-border-theme-message-error`,
  errorBg: `jn-bg-theme-message-error`,

  warning: `jn-border-theme-message-warning`,
  warningBg: `jn-bg-theme-message-warning`,

  danger: `jn-border-theme-message-danger`,
  dangerBg: `jn-bg-theme-message-danger`,

  success: `jn-border-theme-message-success`,
  successBg: `jn-bg-theme-message-success`,
}

export const getBackgroundClass = (messageVariant: MessageType): string => {
  switch (messageVariant) {
    case "error":
      return messageVariantStyles.errorBg
    case "warning":
      return messageVariantStyles.warningBg
    case "success":
      return messageVariantStyles.successBg
    case "info":
      return messageVariantStyles.defaultBg
    case "danger":
      return messageVariantStyles.dangerBg
    default:
      return messageVariantStyles.defaultBg
  }
}

export const getVariantClass = (messageVariant: MessageType): string => {
  switch (messageVariant) {
    case "error":
      return messageVariantStyles.error
    case "warning":
      return messageVariantStyles.warning
    case "success":
      return messageVariantStyles.success
    case "info":
      return messageVariantStyles.default
    case "danger":
      return messageVariantStyles.danger
    default:
      return messageVariantStyles.default
  }
}
