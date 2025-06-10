/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Breadcrumb as BreadcrumbContainer, BreadcrumbItem } from "@cloudoperators/juno-ui-components"
import { isMatch, useMatches, useNavigate } from "@tanstack/react-router"

export const Breadcrumb = () => {
  const navigate = useNavigate()
  const matches = useMatches()
  const matchesWithCrumbs = matches.filter((match) => isMatch(match, "loaderData.crumb"))

  return (
    <BreadcrumbContainer className="mb-6">
      {matchesWithCrumbs.map((match, i) => {
        const { pathname, loaderData } = match

        // crumb information needs to be there
        if (!loaderData || !("crumb" in loaderData)) return null

        const { crumb } = loaderData

        return (
          <BreadcrumbItem
            key={i}
            label={crumb?.label}
            icon={"icon" in crumb ? crumb.icon : undefined}
            onClick={(e) => {
              e.preventDefault()
              navigate({
                to: pathname,
              })
            }}
          />
        )
      })}
    </BreadcrumbContainer>
  )
}
