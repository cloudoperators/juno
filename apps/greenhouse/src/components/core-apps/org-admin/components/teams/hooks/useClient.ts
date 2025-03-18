/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// @ts-expect-error TS(2792): Cannot find module 'sapcc-k8sclient'. Did you mean... Remove this comment to see the full error message
import { createClient } from "sapcc-k8sclient"
import { useEndpoint, useToken } from "../components/StoreProvider"

export const useClient = () => {
  const apiEndpoint = useEndpoint()
  const token = useToken()

  const client = apiEndpoint && token ? createClient({ apiEndpoint, token }) : null
  return { client }
}
export default useClient
