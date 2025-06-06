/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"
import { Box, Stack, DataGrid } from "@cloudoperators/juno-ui-components"

interface SectionProps {
  title: string
  rows: ReactNode[]
}

const Section: React.FC<SectionProps> = ({ title, rows }) => {
  return (
    <Stack direction="vertical" gap="3">
      <h4>{title}</h4>
      <Box>
        <DataGrid columns={2} style={{ gridTemplateColumns: "30% 70%" }}>
          {rows.map((row, index) => (
            <React.Fragment key={index}>{row}</React.Fragment>
          ))}
        </DataGrid>
      </Box>
    </Stack>
  )
}

export default Section
