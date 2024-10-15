/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useActions } from "@cloudoperators/juno-messages-provider"
import { useEffect } from "react"
import useSecretApi from "../hooks/useSecretApi"
import useUrlState from "../hooks/useUrlState"

interface AsyncWorkerProps {
  consumerId: string
}

const AsyncWorker: React.FC<AsyncWorkerProps> = (props: AsyncWorkerProps) => {
  useUrlState(props.consumerId)
  const { addMessage } = useActions()
  const { watchSecretsWithoutHelm } = useSecretApi()

  useEffect(() => {
    watchSecretsWithoutHelm().then((res) => {
      // we bubble up the error message, if user is not authorized
      if (!res.ok) {
        if (res.message && res.status == 403) {
          addMessage({
            variant: "error",
            text: res.message,
          })
        }
      }
    })
  }, [])

  return null
}

export default AsyncWorker
