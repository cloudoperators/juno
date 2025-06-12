/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// NOTE: There's no Card component in Juno yet. This is a customized Box component. It showcases how custom theme colours can be applied.

import React from "react"
import { Box, Stack } from "@cloudoperators/juno-ui-components"

interface GenericCardProps {
  title: string
  iconElement: React.ReactNode
  badgeContainer: React.ReactNode
  content: React.ReactNode
  onClick: () => void
}

const GenericCard: React.FC<GenericCardProps> = ({ title, iconElement, badgeContainer, content, onClick }) => {
  return (
    <Box
      className="p-6 shadow-lg transition-transform duration-500 transform hover:scale-105 cursor-pointer hover:bg-theme-background-lvl-3 border text-theme-high"
      onClick={onClick}
    >
      <Stack direction="horizontal" distribution="between" alignment="center" gap="3" className="mb-3">
        <Stack direction="horizontal" alignment="center" gap="5">
          {iconElement}
          <h3 className="text-xl font-bold text-blue-300">{title}</h3>
        </Stack>
        {badgeContainer}
      </Stack>
      <Stack direction="vertical" gap="3" className="pt-3 mt-3 border-t border-theme-background-lvl-5">
        {content}
      </Stack>
    </Box>
  )
}

export default GenericCard
