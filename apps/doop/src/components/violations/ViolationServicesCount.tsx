/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import FilterPill from "../shared/FilterPill"

const ViolationServicesCount = ({ constraints, slice }: any) => {
  const serviceCounts = React.useMemo(() => {
    const counts = {}
    constraints.forEach((constraint: any) =>
      constraint.violation_groups.forEach((vg: any) => {
        const serviceName = vg.pattern?.object_identity?.service
        // @ts-expect-error TS(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        if (serviceName) counts[serviceName] = (counts[serviceName] || 0) + 1
      })
    )

    return counts
  }, [constraints])

  return (
    <>
      {Object.keys(serviceCounts).map(
        (service, i) =>
          (!slice || i < slice) && (
            // @ts-expect-error TS(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            <FilterPill key={i} name="service" value={service} valueLabel={`${service} | ${serviceCounts[service]}`} />
          )
      )}
      {Object.keys(serviceCounts).length > slice && "..."}
    </>
  )
}

export default ViolationServicesCount
