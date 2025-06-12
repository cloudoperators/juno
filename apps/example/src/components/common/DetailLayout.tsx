/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"
import { Stack, Breadcrumb, BreadcrumbItem, ContentHeading } from "@cloudoperators/juno-ui-components"

import { Views } from "../constants"
import MetricsDisplay from "../metrics/MetricsDisplay"
import ViewToggleButtons from "../common/ViewToggleButtons"

interface DetailLayoutProps {
  title: string
  breadcrumbLabel: string
  metrics: { label: string; value: string }[]
  isJsonView: boolean
  actionButtons?: ReactNode
  children: ReactNode
  toggleView: () => void
  onBack: () => void
}

const DetailLayout: React.FC<DetailLayoutProps> = ({
  title,
  breadcrumbLabel,
  onBack,
  metrics,
  isJsonView,
  toggleView,
  children,
  actionButtons,
}) => {
  const viewType = isJsonView ? Views.JSON : Views.GRID

  return (
    <Stack direction="vertical" gap="10">
      <Breadcrumb>
        <BreadcrumbItem onClick={onBack} label={breadcrumbLabel} />
        <BreadcrumbItem active label={title} />
      </Breadcrumb>

      <Stack direction="horizontal" distribution="between" alignment="center">
        <ContentHeading>{title}</ContentHeading>
        {actionButtons}
      </Stack>

      <MetricsDisplay metrics={metrics} />

      <ViewToggleButtons currentView={viewType} toggleView={toggleView} showCardOption={false} />
      {children}
    </Stack>
  )
}

export default DetailLayout
