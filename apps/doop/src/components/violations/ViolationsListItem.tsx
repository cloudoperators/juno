/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { useNavigate, useSearch } from "@tanstack/react-router"
import { Stack, Badge, DataGridRow, DataGridCell, Icon } from "@cloudoperators/juno-ui-components"
import { useDataDetailsViolationGroupKind, useDataActions } from "../StoreProvider"
import ViolationServicesCount from "./ViolationServicesCount"
import ViolationSeverity from "./ViolationSeverity"

const ViolationListItem = ({ item }: any) => {
  const navigate = useNavigate()
  const { violationGroup } = useSearch({
    from: "/violations",
  })
  const detailsViolationGroupKind = useDataDetailsViolationGroupKind()
  // @ts-expect-error TS(2339) FIXME: Property 'setDetailsViolationGroupKind' does not exist on type 'any'.
  const { setDetailsViolationGroupKind } = useDataActions()

  return (
    <DataGridRow
      className={`cursor-pointer ${detailsViolationGroupKind === item?.kind ? "active" : ""}`}
      onClick={() => {
        detailsViolationGroupKind === item.kind
          ? setDetailsViolationGroupKind(null)
          : setDetailsViolationGroupKind(item?.kind)
        navigate({
          to: "/violations",
          search: (prev) => ({
            ...prev,
            violationGroup: violationGroup !== item?.kind ? item?.kind : undefined,
          }),
        })
      }}
    >
      <DataGridCell className="pl-0">
        <ViolationSeverity severities={item?.severities} className="pl-5" border />
      </DataGridCell>

      <DataGridCell className="font-bold">{item?.kind}</DataGridCell>
      <DataGridCell>
        <Badge text={`${item?.violationCount}`} className="" />
      </DataGridCell>
      <DataGridCell>
        <Stack gap="2" wrap>
          <ViolationServicesCount constraints={item?.constraints} />
        </Stack>
      </DataGridCell>
      <DataGridCell>
        <div>Template:</div>
        <div>
          {item?.constraints?.map(
            (c: any, i: any) =>
              c.metadata?.template_source && (
                <div key={i}>
                  <a href={c.metadata.template_source} target="_blank" className="hover:underline" rel="noreferrer">
                    <Stack gap="1.5" alignment="center">
                      <Icon icon="openInNew" size="16" />
                      {c.name}
                    </Stack>
                  </a>
                </div>
              )
          )}
        </div>

        <div>Constraint:</div>
        <div>
          {item?.constraints?.map(
            (c: any, i: any) =>
              c.metadata?.constraint_source && (
                <div key={i}>
                  <a href={c.metadata.constraint_source} target="_blank" className="hover:underline" rel="noreferrer">
                    <Stack gap="1.5" alignment="center">
                      <Icon icon="openInNew" size="16" />
                      {c.name}
                    </Stack>
                  </a>
                </div>
              )
          )}
        </div>
      </DataGridCell>
    </DataGridRow>
  )
}
export default ViolationListItem
