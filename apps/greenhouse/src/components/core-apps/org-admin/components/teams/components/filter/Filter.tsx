/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { Stack, Select, SelectOption } from "@cloudoperators/juno-ui-components"
import { useCurrentTeam, useTeamMemberships } from "../StoreProvider"

const filtersStyles = `
  bg-theme-background-lvl-1
  py-2
  px-4
  my-px`

const Filter = ({ onTeamChange }: any) => {
  const currentTeam = useCurrentTeam()
  const teamMemberships = useTeamMemberships()

  return (
    <Stack direction="vertical" gap="4" className={`filters ${filtersStyles}`}>
      <Select
        name="team"
        className="filter-label-select w-64 mb-0"
        label="Team"
        // @ts-expect-error TS(2304): Cannot find name 'defaultTeam'.
        value={currentTeam || defaultTeam}
        onChange={onTeamChange}
      >
        {/* @ts-expect-error TS(7006): Parameter 'teamData' implicitly has an 'any' type. */}
        {teamMemberships?.map((teamData: any, index: any) => (
          <SelectOption value={teamData?.metadata?.name} label={teamData?.metadata?.name} key={index} />
        ))}
      </Select>
    </Stack>
  )
}

export default Filter
