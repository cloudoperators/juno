/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Message } from "@cloudoperators/juno-ui-components"

const MESSAGE_TITLE = "Work in Progress"

const JunoLink: React.FC = () => (
  <a
    href="https://cloudoperators.github.io/juno/?path=/docs/components-badge--docs"
    target="_blank"
    rel="noopener noreferrer"
  >
    Juno UI documentation
  </a>
)

const MessageContent: React.FC = () => (
  <>
    This is an example, developed to showcase how Juno UI Components can be used to build an application. Not all
    functionality works. See <JunoLink /> for more info.
  </>
)

const InfoMessage: React.FC = () => {
  return (
    <Message title={MESSAGE_TITLE} dismissible={true}>
      <MessageContent />
    </Message>
  )
}

export default InfoMessage
