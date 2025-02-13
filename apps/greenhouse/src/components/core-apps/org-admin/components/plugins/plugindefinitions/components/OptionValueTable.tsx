/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container, DataGrid, DataGridCell, DataGridHeadCell, DataGridRow } from "@cloudoperators/juno-ui-components"

type OptionValues = {
  default?: unknown
  description?: string | undefined
  displayName?: string | undefined
  name: string
  regex?: string | undefined
  required: boolean
  type: "string" | "secret" | "bool" | "int" | "list" | "map"
}[]

interface OptionValueTableProps {
  optionValues: OptionValues
}

const OptionValueTable: React.FC<OptionValueTableProps> = (props: OptionValueTableProps) => {
  return (
    // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
    <Container px={false} py>
      {/* @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the */}
      <h2 className="text-xl font-bold mb-2 mt-8">Option Values</h2>
      {/* @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see */}
      <DataGrid columns={5}>
        {/* @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see */}
        <DataGridRow>
          {/* @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see */}
          <DataGridHeadCell>Name</DataGridHeadCell>
          {/* @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see */}
          <DataGridHeadCell>Required</DataGridHeadCell>
          {/* @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see */}
          <DataGridHeadCell>Description</DataGridHeadCell>
          {/* @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see */}
          <DataGridHeadCell>Type</DataGridHeadCell>
          {/* @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see */}
          <DataGridHeadCell>Default</DataGridHeadCell>
        </DataGridRow>
        {props.optionValues
          .sort((a, b) => {
            if (!!a.required && !b.required) {
              return -1
            } else if (!a.required && !!b.required) {
              return 1
            }
            return 0
          })
          .map((option) => {
            return (
              // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
              <DataGridRow key={option.name}>
                {/* @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment */}
                <DataGridHeadCell>{option.displayName ?? option.name}</DataGridHeadCell>
                {/* @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment */}
                <DataGridCell style={{ textAlign: "center" }}>{(option.required ?? false) && "x"}</DataGridCell>
                {/* @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment */}
                <DataGridCell>{option.description}</DataGridCell>
                {/* @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment */}
                <DataGridCell>{option.type}</DataGridCell>
                {/* @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment */}
                <DataGridCell>{option.default && JSON.stringify(option.default)}</DataGridCell>
              </DataGridRow>
            )
          })}
      </DataGrid>
    </Container>
  )
}

export default OptionValueTable
