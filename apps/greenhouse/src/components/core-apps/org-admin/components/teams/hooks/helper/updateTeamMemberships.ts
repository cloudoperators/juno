/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import isEqual from "lodash/isEqual"

function isIterable(input: any) {
  if (input === null || input === undefined) {
    return false
  }

  return typeof input[Symbol.iterator] === "function"
}

function updateTeamMemberships(teamMemberships: any, setTeamMemberships: any, { added, modified, deleted }: any) {
  // Create a new array to hold the updated teamMemberships
  let updatedMemberships = [...teamMemberships]

  function findIndex(teamName: any) {
    return teamMemberships.findIndex(function (membership: any) {
      return teamName === membership.metadata.name
    })
  }

  if (added) {
    if (!isIterable(added)) return

    // If added is iterable, handle added objects
    Object.values(added)?.forEach((newTeamMembership: any) => {
      // Check if newTeamMembership already exists in teamMemberships
      const entryExists = updatedMemberships.some(
        (teamMembership) => newTeamMembership?.metadata?.name === teamMembership?.metadata?.name
      )

      // If it doesn't exist, add it to the updatedMemberships array
      if (!entryExists) {
        updatedMemberships.push(newTeamMembership)
      }
    })
  }

  if (modified) {
    if (!isIterable(modified)) return

    modified.forEach((modifiedMembership: any) => {
      let index = findIndex(modifiedMembership?.metadata?.name)
      if (index !== -1) {
        if (!isEqual(updatedMemberships[index], modifiedMembership)) {
          // Check for actual changes
          updatedMemberships[index] = modifiedMembership
        }
      }
    })
  }

  if (deleted) {
    if (!isIterable(deleted)) return

    deleted.forEach((deletedMembership: any) => {
      let index = findIndex(deletedMembership?.metadata?.name)
      if (index !== -1) {
        updatedMemberships = updatedMemberships.filter((_, i) => i !== index) // Remove deleted membership
      }
    })
  }

  // Update teamMemberships using the setter function only if there are actual changes
  if (!isEqual(updatedMemberships, teamMemberships)) {
    setTeamMemberships(updatedMemberships)
  }
}

export default updateTeamMemberships
