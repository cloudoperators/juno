/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Message } from "@cloudoperators/juno-ui-components"

// const MESSAGE_TITLE = "Work in Progress"
const TEMPORARY_WIP_TITLE = "Work in Progress - DO NOT USE"

const JunoLink: React.FC = () => (
  <a
    href="https://cloudoperators.github.io/juno/?path=/docs/components-badge--docs"
    target="_blank"
    rel="noopener noreferrer"
  >
    Juno UI documentation
  </a>
)

// const MessageContent: React.FC = () => (
//   <>
//     This is an example, developed to showcase how Juno UI Components can be used to build an application. Not all
//     functionality works. See <JunoLink /> for more info.
//   </>
// )

const TemporaryWIPContent: React.FC = () => (
  <>
    This is an initial proposal for a Juno UI example app without Design/UX/PO input. Some functionality doesn&apos;t
    work. For more information on the components, see <JunoLink />.
  </>
)

const InfoMessage: React.FC = () => {
  return (
    <Message title={TEMPORARY_WIP_TITLE} dismissible={true} variant="warning" className="mt-11">
      <TemporaryWIPContent />
    </Message>
  )
}

export default InfoMessage
