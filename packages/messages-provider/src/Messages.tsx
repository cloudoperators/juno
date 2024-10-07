/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Message } from "@cloudoperators/juno-ui-components"
import { useMessages, useActions } from "./useMessageStore"
import { Message as MessageType } from "./useMessageStore"

const shouldAutoDismiss = (variant: string): boolean => {
  if (variant === "info" || variant === "success") return true
  return false
}

interface MessagesProps {
  className?: string
}

const Messages = ({ className }: MessagesProps) => {
  const messages = useMessages()
  const { removeMessage } = useActions()

  const onDismiss = (id: string) => {
    removeMessage(id)
  }

  return (
    <>
      {messages && messages.length > 0 && (
        <div role="group" className={`juno-message-provider ${className ? className : ""}`}>
          {messages.map((item: MessageType, index: number) => {
            const { id, variant, text, ...props } = item
            return (
              <Message
                role="alert"
                key={id}
                className={index > 0 ? "mt-4" : ""}
                variant={variant}
                dismissible={true}
                autoDismiss={shouldAutoDismiss(variant)}
                onDismiss={() => onDismiss(id)}
                {...props}
              >
                {text}
              </Message>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Messages
