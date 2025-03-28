/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createClient } from "@cloudoperators/juno-k8s-client"
import { useApiEndpoint, useToken } from "../components/StoreProvider"

export const useClient = () => {
  const apiEndpoint = useApiEndpoint()
  const token = useToken()

  const client = apiEndpoint && token && createClient({ apiEndpoint, token })

  return { client }
}
export default useClient
