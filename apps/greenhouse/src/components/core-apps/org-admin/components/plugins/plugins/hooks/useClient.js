/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo } from "react"
import { createClient } from "sapcc-k8sclient"
import { useApiEndpoint, useToken } from "../components/StoreProvider"

export const useClient = () => {
  const apiEndpoint = useApiEndpoint()
  const token = useToken()

  console.debug("::::::::::::::::::::::::::::apiEndpoint", apiEndpoint)
  console.debug("::::::::::::::::::::::::::::token", token)
  const client = apiEndpoint && token && createClient({ apiEndpoint, token })

  return { client }
}
export default useClient
