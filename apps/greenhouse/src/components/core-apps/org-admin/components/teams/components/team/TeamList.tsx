/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from "react"
import {
  DataGrid,
  DataGridRow,
  DataGridCell,
  DataGridHeadCell,
  useEndlessScrollList,
} from "@cloudoperators/juno-ui-components"
import TeamListItem from "./TeamListItem"
import { useCurrentTeam, useDefaultTeam, useTeamMemberships } from "../StoreProvider"

const TeamList = () => {
  const currentTeam = useCurrentTeam()
  const defaultTeam = useDefaultTeam()
  const teamMemberships = useTeamMemberships()

  const selectedTeam = currentTeam || defaultTeam

  const team = useMemo(() => {
    if (!selectedTeam || !teamMemberships) return []
    // @ts-ignore
    const matchingTeam = teamMemberships.find((item: any) => item.metadata.name === selectedTeam)

    return matchingTeam?.spec?.members || []
  }, [selectedTeam, teamMemberships])

  const { scrollListItems, iterator } = useEndlessScrollList(team, {
    loadingObject: (
      <DataGridRow>
        <DataGridCell colSpan={4}>
          <span>Loading ...</span>
        </DataGridCell>
      </DataGridRow>
    ),
    // @ts-ignore
    refFunction: (ref: any) => (
      <DataGridRow>
        <DataGridCell colSpan={4} className="border-b-0 py-0">
          <span ref={ref} />
        </DataGridCell>
      </DataGridRow>
    ),
  })
  // @ts-ignore
  return scrollListItems?.length > 0 ? (
    <>
      <DataGrid columns={4}>
        <DataGridRow>
          <DataGridHeadCell>ID</DataGridHeadCell>
          <DataGridHeadCell>Firstname</DataGridHeadCell>
          <DataGridHeadCell>Lastname</DataGridHeadCell>
          <DataGridHeadCell>E-Mail</DataGridHeadCell>
        </DataGridRow>

        {iterator.map((member: any) => (
          <TeamListItem key={member.id} teamMember={member} />
        ))}
      </DataGrid>
    </>
  ) : (
    <div>There are no Team Members to display.</div>
  )
}

export default TeamList
