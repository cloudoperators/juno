/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// @ts-expect-error TS(2792): Cannot find module 'sapcc-k8sclient'. Did you mean... Remove this comment to see the full error message
import { createClient } from "sapcc-k8sclient"
import useStore from "../store"

export const useClient = () => {
  const apiEndpoint = useStore((state: any) => state.endpoint)
  const token = useStore((state: any) => state.token)

  const client = apiEndpoint && token && createClient({ apiEndpoint, token })

  return {
    client,
  }
}

export default useClient
