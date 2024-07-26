/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { decodeBase64Json } from "./utils"
/**
 * Extract auth data from id_token
 * @param {string} idToken JWT
 * @returns {object} json
 */
export function decodeIDToken(idToken) {
  const [_head, tokenData, _signature] = idToken.split(".")
  return decodeBase64Json(tokenData)
}

const capitalize = (str) => {
  if (!str || str.length === 0) return ""

  let result = str.charAt(0).toUpperCase()
  if (str.length > 1) result += str.slice(1)
  return result
}

const extractNameFromEmail = (email) => {
  if (!email) return null
  try {
    const match = email.match(/^(.+)@.*$/)
    if (!match) return null
    const emailName = match[1]
    const index = emailName.indexOf(".")
    let firstName = emailName.slice(0, index)
    let lastName = emailName.substring(index + 1)
    firstName = firstName
      .split("-")
      .map((t) => capitalize(t))
      .join("-")
    lastName = lastName
      .split(".")
      .map((t) => capitalize(t))
      .join(" ")
    return { firstName, lastName }
  } catch (_) {
    console.info("(OAUTH) could not determine first and last names")
  }
}
/**
 *
 * @param {object} tokenData
 * @returns {object} parsed data
 */
export function parseIdTokenData(tokenData) {
  const email = tokenData.mail || tokenData.email || ""
  const loginName = tokenData.login_name || tokenData.name || tokenData.subject || tokenData.sub || ""
  let firstName = tokenData.first_name
  let lastName = tokenData.last_name
  if (!firstName && !lastName) {
    const userName = extractNameFromEmail(email)
    firstName = firstName || userName?.firstName
    lastName = lastName || userName?.lastName
  }
  const regex = new RegExp("^[c,d,i,s,p,C,D,I,S,P][0-9]+$")
  const userId = tokenData?.sub?.match(regex) ? tokenData.sub : null

  const parsedData = {
    loginName,
    email,
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    expiresAt: tokenData.exp * 1000,
    expiresAtDate: new Date(tokenData.exp * 1000),
    groups: tokenData.groups,
    userId: userId,
    avatarUrl: {
      small: `https://avatars.wdf.sap.corp/avatar/${userId || loginName}?size=24`,
      large: `https://avatars.wdf.sap.corp/avatar/${userId || loginName}?size=256`,
      default: `https://avatars.wdf.sap.corp/avatar/${userId || loginName}`,
    },
  }

  if (Array.isArray(tokenData.groups)) {
    tokenData.groups.forEach((item) => {
      if (item.startsWith("organization:")) {
        parsedData.organizations = parsedData.organizations || []
        parsedData.organizations.push(item.substring("organization:".length))
      }
      if (item.startsWith("team:")) {
        parsedData.teams = parsedData.teams || []
        parsedData.teams.push(item.substring("team:".length))
      }
      if (item.startsWith("role:")) {
        parsedData.roles = parsedData.roles || []
        parsedData.roles.push(item.substring("role:".length))
      }
      if (item.startsWith("support-group:")) {
        parsedData.supportGroups = parsedData.supportGroups || []
        parsedData.supportGroups.push(item.substring("support-group:".length))
      }
    })
  }
  // groups: ["organization:test-org", "team:test-team-1", "team:test-team-2"],

  return parsedData
}
