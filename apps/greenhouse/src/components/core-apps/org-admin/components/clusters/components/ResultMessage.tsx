/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Message } from "@cloudoperators/juno-ui-components"
export type ResultMessage = {
  message: string
  ok: boolean
  variant?: "warning" | "success" | "error"
}

interface ResultMessageProps {
  submitMessage: ResultMessage
  onMessageDismiss?: () => void
}

const ResultMessageComponent: React.FC<ResultMessageProps> = (props: ResultMessageProps) => {
  // if variant is not set, we deduct from ok
  if (!props.submitMessage.variant) props.submitMessage.variant = props.submitMessage.ok ? "success" : "error"
  return (
    // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
    <Message
      autoDismissTimeout={3000}
      autoDismiss={props.submitMessage.ok}
      onDismiss={props.onMessageDismiss}
      variant={props.submitMessage.variant}
      text={props.submitMessage.message}
    />
  )
}

export default ResultMessageComponent
