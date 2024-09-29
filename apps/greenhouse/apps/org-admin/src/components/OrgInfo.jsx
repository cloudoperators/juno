/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useEffect, useState } from "react"
import { createClient } from "sapcc-k8sclient"
import { useApiEndpoint, useAuthData } from "../StoreProvider"
import { useActions } from "@cloudoperators/juno-messages-provider"

// Shows organization info

const OrgInfo = () => {
  const apiEndpoint = useApiEndpoint()
  const [org, setOrg] = useState(null)
  const { addMessage } = useActions()

  const authData = useAuthData()

  const orgName = useMemo(() => {
    if (!authData?.raw?.groups) return null
    const orgString = authData?.raw?.groups.find((g) => g.indexOf("organization:") === 0)
    if (!orgString) return null
    return orgString.split(":")[1]
  }, [authData?.raw?.groups])

  const client = useMemo(() => {
    if (!apiEndpoint || !authData?.JWT) return null
    return createClient({ apiEndpoint, token: authData?.JWT })
  }, [apiEndpoint, authData?.JWT])

  useEffect(() => {
    if (!client || !orgName) return
    // plugin configs
    client
      .get(`/apis/greenhouse.sap/v1alpha1/organizations/${orgName}`)
      .then((res) => {
        setOrg({
          name: res?.spec?.displayName,
          description: res?.spec?.description,
        })
      })
      .catch((err) => {
        addMessage({
          variant: "error",
          text: `Failed to fetch organization info. ${err.message}`,
        })
      })
  }, [client, orgName])

  return (
    <div className="org-info p-8 mb-8 bg-theme-background-lvl-0">
      <div className="org-name">
        <p className="text-xs">Organization</p>
        {org?.name && <h1 className="text-xl font-bold">{org?.name}</h1>}
        {!org?.name && <h1 className="text-xl font-bold">Loading...</h1>}
      </div>
      {org?.description && <p className="org-description">{org?.description}</p>}
      {!org?.name && <p className="org-description"></p>}
    </div>
  )
}

export default OrgInfo
