/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createClient } from "@cloudoperators/juno-k8s-client"
import useStore from "../store"

export const useClient = () => {
  const apiEndpoint = useStore((state: any) => state.endpoint)
  const token = useStore((state: any) => state.token)
  const client = apiEndpoint && token ? createClient({ apiEndpoint, token }) : null
  return {
    client,
  }
}

export default useClient
