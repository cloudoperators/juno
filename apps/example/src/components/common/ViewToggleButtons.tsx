/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Button, Stack } from "@cloudoperators/juno-ui-components"

import { Views } from "../constants"

import GridIcon from "../../assets/grid.svg?react"
import JsonIcon from "../../assets/json.svg?react"
import CardIcon from "../../assets/card.svg?react"

interface ViewToggleButtonsProps {
  currentView: (typeof Views)[keyof typeof Views]
  // eslint-disable-next-line no-unused-vars
  toggleView: (view: (typeof Views)[keyof typeof Views]) => void
  showCardOption?: boolean
}

const ViewToggleButtons: React.FC<ViewToggleButtonsProps> = ({ currentView, toggleView, showCardOption = true }) => {
  const isGridDisabled = currentView === Views.GRID
  const isCardDisabled = currentView === Views.CARD
  const isJsonDisabled = currentView === Views.JSON

  return (
    <Stack direction="horizontal" gap="2" className="ml-auto">
      <span className="flex items-center ml-3">View:</span>

      <Button onClick={() => toggleView(Views.GRID)} disabled={isGridDisabled} variant="subdued">
        <GridIcon />
      </Button>

      {showCardOption && (
        <Button onClick={() => toggleView(Views.CARD)} disabled={isCardDisabled} variant="subdued">
          <CardIcon />
        </Button>
      )}

      <Button onClick={() => toggleView(Views.JSON)} disabled={isJsonDisabled} variant="subdued">
        <JsonIcon />
      </Button>
    </Stack>
  )
}

export default ViewToggleButtons
