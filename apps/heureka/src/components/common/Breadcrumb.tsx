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
      {matchesWithCrumbs.map((match, i) => (
        <BreadcrumbItem
          key={i}
          label={match.loaderData?.crumb?.label}
          icon={match.loaderData?.crumb?.icon}
          onClick={(e) => {
            e.preventDefault()
            navigate({
              to: match.pathname,
              params: match.params,
              search: match.search,
            })
          }}
        />
      ))}
    </BreadcrumbContainer>
  )
}
