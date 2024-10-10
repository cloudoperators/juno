/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo } from "react"
import { createClient } from "sapcc-k8sclient"
import useStore from "../store"

export const useClient = () => {
  const apiEndpoint = useStore((state) => state.endpoint)
  const token = useStore((state) => state.token)

  const client = apiEndpoint && token && createClient({ apiEndpoint, token })

  return {
    client,
  }
}

export default useClient
