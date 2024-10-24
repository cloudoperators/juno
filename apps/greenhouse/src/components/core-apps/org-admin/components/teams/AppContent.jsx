/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"
import { Container } from "@cloudoperators/juno-ui-components"
import { useAPI } from "./hooks/useAPI"
import TeamList from "./components/team/TeamList"
import Filter from "./components/filter/Filter"
import { useTeamMemberships, useIsMock, useEndpoint, useStoreActions } from "./components/StoreProvider"
import { Messages, useActions } from "@cloudoperators/juno-messages-provider"
import { fetchProxy } from "@cloudoperators/juno-utils"
import { parseError } from "./lib/helpers"

const AppContent = () => {
  const teamMemberships = useTeamMemberships()
  const isMock = useIsMock()
  const endpoint = useEndpoint()
  const { watchTeamMembers } = useAPI()
  const { setCurrentTeam, setTeamMemberships } = useStoreActions()
  const { addMessage } = useActions()

  useEffect(() => {
    if (!watchTeamMembers || isMock) return
    const unwatch = watchTeamMembers()
    return unwatch
  }, [watchTeamMembers])

  useEffect(() => {
    if (isMock) {
      fetchProxy(`${endpoint}/teammemberships`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        ...{ mock: true },
      })
        .then((response) => {
          if (!response.ok) {
            addMessage({
              variant: "error",
              text: parseError(e.message),
            })
          }
          return response.json()
        })
        .then((result) => {
          setTeamMemberships(result)
        })
    }
  }, [isMock])

  function onTeamChange(value) {
    setCurrentTeam(value)
  }

  return (
    <Container py px>
      <Messages className="pb-6" />
      {teamMemberships?.length > 0 && (
        <>
          <Filter onTeamChange={onTeamChange} />
          <TeamList />
        </>
      )}
    </Container>
  )
}

export default AppContent
