/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"

import { Container } from "@cloudoperators/juno-ui-components"
import { useAPI } from "./hooks/useAPI"
import TeamList from "./components/team/TeamList"
import Filter from "./components/filter/Filter"
import { useTeamMemberships, useStoreActions } from "./components/StoreProvider"

import { Messages } from "@cloudoperators/juno-messages-provider"

const AppContent = () => {
  const teamMemberships = useTeamMemberships()
  const { watchTeamMembers } = useAPI()
  // @ts-ignore
  const { setCurrentTeam } = useStoreActions()

  useEffect(() => {
    if (!watchTeamMembers) return
    const unwatch = watchTeamMembers()
    return unwatch
  }, [watchTeamMembers])

  function onTeamChange(value: any) {
    setCurrentTeam(value)
  }

  return (
    <Container py px>
      <Messages className="pb-6" />
      {/* @ts-ignore */}
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
