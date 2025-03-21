/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react"
import useUrlState from "../hooks/useUrlState"
import useWatch from "../hooks/useWatch"

interface AsyncWorkerProps {
  consumerId: string
}

const AsyncWorker: React.FC<AsyncWorkerProps> = (props: AsyncWorkerProps) => {
  useUrlState(props.consumerId)

  const { watchPluginDefinitions, watchSecrets } = useWatch()

  useEffect(() => {
    if (!watchPluginDefinitions) return
    const unwatch = watchPluginDefinitions()
    return unwatch
  }, [watchPluginDefinitions])

  useEffect(() => {
    if (!watchSecrets) return
    const unwatch = watchSecrets()
    return unwatch
  }, [watchSecrets])

  return null
}

export default AsyncWorker
