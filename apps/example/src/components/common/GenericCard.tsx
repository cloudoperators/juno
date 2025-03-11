/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Box, Stack } from "@cloudoperators/juno-ui-components"

interface GenericCardProps {
  iconElement: React.ReactNode
  title: string
  badgeContainer: React.ReactNode
  content: React.ReactNode
  onClick: () => void
}

const GenericCard: React.FC<GenericCardProps> = ({ iconElement, title, badgeContainer, content, onClick }) => {
  return (
    <Box
      className="p-6 shadow-lg transition-transform duration-500 transform hover:scale-105 cursor-pointer hover:bg-theme-background-lvl-3 border border-gray-700 bg-gray-800 text-white"
      onClick={onClick}
    >
      <Stack direction="horizontal" distribution="between" alignment="center" gap="3" className="mb-3">
        <Stack direction="horizontal" alignment="center" gap="2">
          {iconElement}
          <h3 className="text-xl font-bold text-blue-300">{title}</h3>
        </Stack>
        {badgeContainer}
      </Stack>
      <Stack direction="vertical" gap="3" className="border-t border-gray-400 pt-3 mt-3">
        {content}
      </Stack>
    </Box>
  )
}

export default GenericCard
