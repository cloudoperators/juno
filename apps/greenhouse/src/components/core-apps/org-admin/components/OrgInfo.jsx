/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useEffect, useState } from "react"
import { createClient } from "sapcc-k8sclient"
import { useActions } from "@cloudoperators/juno-messages-provider"

// Shows organization info

const OrgInfo = ({ apiEndpoint, auth }) => {
  const [org, setOrg] = useState(null)
  const { addMessage } = useActions()

  const orgName = useMemo(() => {
    if (!auth?.raw?.groups) return null
    const orgString = auth?.raw?.groups.find((g) => g.indexOf("organization:") === 0)
    if (!orgString) return null
    return orgString.split(":")[1]
  }, [auth?.raw?.groups])

  const client = useMemo(() => {
    if (!apiEndpoint || !auth?.JWT) return null
    return createClient({ apiEndpoint, token: auth?.JWT })
  }, [apiEndpoint, auth?.JWT])

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
