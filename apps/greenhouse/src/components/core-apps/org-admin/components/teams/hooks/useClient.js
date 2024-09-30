/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createClient } from "sapcc-k8sclient"
import { useEndpoint, useToken } from "../components/StoreProvider"

export const useClient = () => {
  const apiEndpoint = useEndpoint()
  const token = useToken()

  const client = apiEndpoint && token ? createClient({ apiEndpoint, token }) : null
  return { client }
}
export default useClient
