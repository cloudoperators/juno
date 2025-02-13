/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { capitalize } from "../../lib/helpers"
import {
  DataGrid,
  DataGridRow,
  DataGridCell,
  Box,
  Stack,
  useEndlessScrollList,
} from "@cloudoperators/juno-ui-components"
import { useDataDetailsViolationGroup } from "../StoreProvider"
import ReactMarkdown from "react-markdown"
import ViolationDetailsPills from "./ViolationDetailsPills"
import ViolationDetailsOccurrences from "./ViolationDetailsOccurrences"
import ViolationSeverity from "./ViolationSeverity"

const ViolationDetailsList = () => {
  const detailsViolationGroup = useDataDetailsViolationGroup()

  const items = React.useMemo(() => {
    if (!detailsViolationGroup) return null
    // @ts-ignore
    return detailsViolationGroup.constraints.reduce((items: any, constraint: any) => {
      items.push({
        type: "doc",
        title: constraint.name,
        severity: constraint.metadata.severity,
        data: constraint.metadata.docstring,
      })
      constraint.violation_groups.forEach((violationGroup: any) => {
        items.push({
          ...violationGroup.pattern,
          instances: violationGroup.instances,
        })
      })
      return items
    }, [])
  }, [detailsViolationGroup])

  const { scrollListItems, iterator } = useEndlessScrollList(items, {
    loadingObject: (
      <DataGridRow>
        <DataGridCell colSpan={2}>
          <span>Loading ...</span>
        </DataGridCell>
      </DataGridRow>
    ),
    // @ts-expect-error - refFunction is not defined
    refFunction: (ref: any) => (
      <DataGridRow>
        <DataGridCell colSpan={2} className="border-b-0 py-0">
          <span ref={ref} />
        </DataGridCell>
      </DataGridRow>
    ),
  })

  return (
    <>
      {
        // @ts-expect-error - scrollListItems is not defined
        scrollListItems?.length > 0 ? (
          <DataGrid cellVerticalAlignment="top" gridColumnTemplate="min-content 2fr">
            {iterator.map((item: any, index: any) => (
              <DataGridRow key={index}>
                {item?.type === "doc" ? (
                  <DataGridCell colSpan={2}>
                    <Box className="bg-theme-accent/10 border-theme-accent p-5">
                      <Stack distribution="start" gap="3">
                        <ViolationSeverity severities={[item.severity]} />

                        <div className="info-box text-theme-high">
                          <h1 className="mb-4 mt-0 text-2xl">{capitalize(item.title)}</h1>
                          {item.data ? (
                            <ReactMarkdown urlTransform={(href: any) => href.replace(/^\((.+)\)$/, "$1")}>
                              {item.data}
                            </ReactMarkdown>
                          ) : (
                            item.severity === "debug" &&
                            "This violation group is currently in a draft state, undergoing development and refinement."
                          )}
                        </div>
                      </Stack>
                    </Box>
                  </DataGridCell>
                ) : (
                  <>
                    <DataGridCell>
                      <ViolationDetailsPills violation={item} />
                    </DataGridCell>
                    <DataGridCell>
                      <ViolationDetailsOccurrences violation={item} />
                    </DataGridCell>
                  </>
                )}
              </DataGridRow>
            ))}
          </DataGrid>
        ) : (
          <DataGridRow>
            <DataGridCell colSpan={2}>
              <span>No violations found.</span>
            </DataGridCell>
          </DataGridRow>
        )
      }
    </>
  )
}

export default ViolationDetailsList
