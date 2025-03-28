/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createClient } from "@cloudoperators/juno-k8s-client"
import { useEndpoint, useToken } from "../components/StoreProvider"

export const useClient = () => {
  const apiEndpoint = useEndpoint() as string
  const token = useToken() as string

  const client = apiEndpoint && token ? createClient({ apiEndpoint, token }) : null
  return { client }
}
export default useClient
